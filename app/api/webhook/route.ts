import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { headers } from 'next/headers'
import { createClient } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  const body = await request.text()
  const signature = headers().get('stripe-signature')

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
        const session = event.data.object
        
        // Handle successful payment
        console.log('Payment successful for session:', session.id)
        
        // Extract customer information from Stripe session
        const customerDetails = session.customer_details
        const metadata = session.metadata
        
        if (customerDetails && metadata) {
          const supabase = createClient()
          
          // Save order to database
          const { data: order, error } = await supabase
            .from('orders')
            .insert({
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
            })
            .select()
            .single()

          if (error) {
            console.error('Error saving order to database:', error)
          } else {
            console.log('Order saved to database:', order.id)
            
            // Here you can add additional logic like:
            // - Send confirmation email
            // - Update inventory
            // - Create shipping label
            // - Send notifications
          }
        }
        
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
