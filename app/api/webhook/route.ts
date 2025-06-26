import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { headers } from 'next/headers'
import { createClient } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  const body = await request.text()
  const headersList = await headers()
  const signature = headersList.get('stripe-signature')
  
  if (!signature) {
    return NextResponse.json(
      { error: 'Missing stripe signature' },
      { status: 400 }
    )
  }

  let event
  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (err) {
    console.error('Webhook signature verification failed:', err)
    return NextResponse.json(
      { error: 'Invalid signature' },
      { status: 400 }
    )
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed':
        await handleCheckoutCompleted(event.data.object)
        break
        
      case 'payment_intent.succeeded':
        const paymentIntent = event.data.object
        console.log('Payment intent succeeded:', paymentIntent.id)
        break
        
      case 'payment_intent.payment_failed':
        const failedPayment = event.data.object
        console.log('Payment failed:', failedPayment.id)
        break
        
      default:
        console.log(`Unhandled event type: ${event.type}`)
    }
    
    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Webhook handler error:', error)
    return NextResponse.json(
      { error: 'Webhook handler failed' },
      { status: 500 }
    )
  }
}

async function handleCheckoutCompleted(session: any) {
  console.log('Processing checkout session:', session.id)
  
  const customerDetails = session.customer_details
  const metadata = session.metadata
  
  if (!customerDetails) {
    console.error('No customer details found in session')
    return
  }

  if (!metadata?.productId) {
    console.error('No product ID found in session metadata')
    return
  }

  const supabase = createClient()
  
  try {
    // Check if order already exists (prevent duplicates)
    const { data: existingOrder } = await supabase
      .from('orders')
      .select('id')
      .eq('stripe_session_id', session.id)
      .single()

    if (existingOrder) {
      console.log('Order already exists for session:', session.id)
      return
    }

    // Prepare order data (matching your table schema)
    const orderData = {
      product_id: metadata.productId,
      name: customerDetails.name || 'Unknown',
      email: customerDetails.email || '',
      phone: customerDetails.phone || '',
      address: customerDetails.address?.line1 || '',
      city: customerDetails.address?.city || '',
      state: customerDetails.address?.state || '',
      zip: customerDetails.address?.postal_code || '',
      stripe_session_id: session.id,
      payment_status: 'completed'
      // created_at will be handled by your database default
    }

    // Insert order into database
    const { data: order, error } = await supabase
      .from('orders')
      .insert(orderData)
      .select()
      .single()

    if (error) {
      console.error('Error saving order to database:', error)
      throw error
    }

    console.log('Order saved successfully:', order.id)
    
    // Post-order processing
    await postOrderProcessing(order, session)
    
  } catch (error) {
    console.error('Error in handleCheckoutCompleted:', error)
    throw error
  }
}

async function postOrderProcessing(order: any, session: any) {
  try {
    // Add your post-order logic here:
    
    // 1. Send confirmation email
    // await sendOrderConfirmationEmail(order)
    
    // 2. Update inventory if needed
    // await updateProductInventory(order.product_id, order.quantity)
    
    // 3. Create shipping label
    // await createShippingLabel(order)
    
    // 4. Send internal notifications
    // await sendOrderNotification(order)
    
    console.log('Post-order processing completed for order:', order.id)
  } catch (error) {
    console.error('Error in post-order processing:', error)
    // Don't throw here - we don't want to fail the webhook if post-processing fails
  }
}