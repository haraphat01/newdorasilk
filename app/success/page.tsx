'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

interface OrderDetails {
  id: string
  name: string
  email: string
  address: string
  city: string
  state: string
  zip: string
  payment_status: string
  created_at: string
  products: {
    id: string
    name: string
    description: string
    price: number
    image_url: string
  }
}

export default function SuccessPage() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (sessionId) {
      fetchOrderDetails(sessionId)
    } else {
      setIsLoading(false)
    }
  }, [sessionId])

  const fetchOrderDetails = async (sessionId: string) => {
    try {
      const response = await fetch(`/api/orders/${sessionId}`)
      const data = await response.json()
      
      if (response.ok) {
        setOrderDetails(data.order)
      } else {
        setError(data.error || 'Failed to fetch order details')
      }
    } catch (error) {
      console.error('Error fetching order details:', error)
      setError('Failed to fetch order details')
    } finally {
      setIsLoading(false)
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-dorasilk-ivory to-white flex items-center justify-center">
        <div className="text-center">
          <div className="bg-white p-12 rounded-3xl shadow-xl max-w-md mx-auto">
            <div className="text-dorasilk-gold text-6xl mb-6 animate-pulse">✨</div>
            <h1 className="text-2xl font-semibold text-dorasilk-charcoal mb-4 font-display">Processing Your Order...</h1>
            <div className="w-16 h-16 border-4 border-dorasilk-gold border-t-transparent rounded-full animate-spin mx-auto"></div>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-dorasilk-ivory to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white p-12 rounded-3xl shadow-xl">
              <div className="text-dorasilk-gold text-6xl mb-6">⚠️</div>
              <h1 className="text-2xl font-semibold text-dorasilk-charcoal mb-4 font-display">Order Details Unavailable</h1>
              <p className="text-dorasilk-charcoal mb-8 leading-relaxed">{error}</p>
              <Button 
                onClick={() => window.location.href = '/#products'} 
                className="bg-gradient-to-r from-dorasilk-gold to-dorasilk-rose-gold hover:from-dorasilk-rose-gold hover:to-dorasilk-gold text-white font-medium uppercase tracking-wider px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Back to Products
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-dorasilk-ivory to-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="bg-white p-8 rounded-3xl shadow-xl max-w-2xl mx-auto mb-8">
              <div className="text-dorasilk-gold text-8xl mb-6">🎉</div>
              <h1 className="text-4xl md:text-5xl font-bold text-dorasilk-charcoal mb-6 font-display">Payment Successful!</h1>
              <div className="h-1 w-32 bg-gradient-to-r from-dorasilk-gold to-dorasilk-rose-gold mx-auto mb-8"></div>
              <p className="text-xl text-dorasilk-charcoal leading-relaxed">
                Thank you for your purchase. Your order has been confirmed and is being processed.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Order Details */}
            <div className="lg:col-span-2">
              <Card className="bg-white shadow-xl border-0">
                <CardContent className="p-8">
                  <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-dorasilk-charcoal mb-6 font-display">Order Confirmation</h2>
                    
                    <div className="bg-gradient-to-r from-dorasilk-ivory to-dorasilk-champagne p-6 rounded-2xl mb-6">
                      <div className="flex items-center space-x-6">
                        <div className="w-24 h-24 bg-gradient-to-br from-dorasilk-gold to-dorasilk-rose-gold rounded-2xl flex items-center justify-center text-3xl">
                          ✨
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-dorasilk-charcoal font-display mb-2">
                            {orderDetails?.products.name}
                          </h3>
                          <p className="text-sm text-dorasilk-rose-gold italic font-display mb-3">
                            {orderDetails?.products.name.includes('Treatment') ? 'Bring the Bounce Back' : 
                             orderDetails?.products.name.includes('Shampoo') ? 'Reset. Refresh. Reawaken.' :
                             orderDetails?.products.name.includes('Serum') ? 'Silk in a bottle. Shine in Seconds.' :
                             orderDetails?.products.name.includes('Cap') ? 'Turn Up the Heat — the Right Way' :
                             '3-in-1 Power: Prime. Detangle. Defend.'}
                          </p>
                          <div className="flex items-center space-x-2">
                            <span className="text-yellow-500">★★★★★</span>
                            <span className="text-sm text-gray-500">(127 reviews)</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-3xl font-bold text-dorasilk-charcoal">
                            ${orderDetails ? (orderDetails.products.price / 100).toFixed(2) : '0.00'}
                          </p>
                          <p className="text-sm text-gray-500">USD</p>
                        </div>
                      </div>
                    </div>

                    {orderDetails && (
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white border border-dorasilk-champagne p-6 rounded-2xl">
                          <h4 className="font-semibold text-dorasilk-charcoal mb-4 font-display">Shipping Address</h4>
                          <div className="space-y-2 text-dorasilk-charcoal">
                            <p className="font-medium">{orderDetails.name}</p>
                            <p>{orderDetails.address}</p>
                            <p>{orderDetails.city}, {orderDetails.state} {orderDetails.zip}</p>
                          </div>
                        </div>
                        <div className="bg-white border border-dorasilk-champagne p-6 rounded-2xl">
                          <h4 className="font-semibold text-dorasilk-charcoal mb-4 font-display">Order Information</h4>
                          <div className="space-y-2 text-dorasilk-charcoal">
                            <p><span className="font-medium">Order ID:</span> {orderDetails.id}</p>
                            <p><span className="font-medium">Email:</span> {orderDetails.email}</p>
                            <p><span className="font-medium">Order Date:</span> {new Date(orderDetails.created_at).toLocaleDateString()}</p>
                            <p><span className="font-medium">Status:</span> <span className="text-green-600 font-semibold">Paid</span></p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Next Steps */}
            <div className="lg:col-span-1">
              <Card className="bg-white shadow-xl border-0 sticky top-8">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold text-dorasilk-charcoal mb-6 font-display">What's Next?</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-dorasilk-gold rounded-full flex items-center justify-center text-white flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold text-dorasilk-charcoal mb-1">Order Confirmation</h4>
                        <p className="text-sm text-gray-600">Check your email for order confirmation</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-dorasilk-gold rounded-full flex items-center justify-center text-white flex-shrink-0">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold text-dorasilk-charcoal mb-1">Processing</h4>
                        <p className="text-sm text-gray-600">Your order will be processed within 24 hours</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-dorasilk-gold rounded-full flex items-center justify-center text-white flex-shrink-0">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold text-dorasilk-charcoal mb-1">Shipping</h4>
                        <p className="text-sm text-gray-600">Free shipping with 5-7 business day delivery</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-dorasilk-gold rounded-full flex items-center justify-center text-white flex-shrink-0">
                        4
                      </div>
                      <div>
                        <h4 className="font-semibold text-dorasilk-charcoal mb-1">Tracking</h4>
                        <p className="text-sm text-gray-600">You'll receive tracking information via email</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 space-y-4">
                    <Button asChild className="w-full bg-gradient-to-r from-dorasilk-gold to-dorasilk-rose-gold hover:from-dorasilk-rose-gold hover:to-dorasilk-gold text-white font-bold uppercase tracking-wider py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                      <Link href="/#products">Continue Shopping</Link>
                    </Button>
                    
                    <Button 
                      asChild
                      variant="outline"
                      className="w-full border-2 border-dorasilk-gold text-dorasilk-gold hover:bg-dorasilk-gold hover:text-white font-semibold uppercase tracking-wider py-4 rounded-xl transition-all duration-300"
                    >
                      <Link href="/">Back to Home</Link>
                    </Button>
                  </div>

                  <div className="mt-8 text-center">
                    <p className="text-sm text-gray-500 mb-4">
                      Have questions? Contact us at{' '}
                      <a href="mailto:info@dorasilk.com" className="text-dorasilk-gold hover:underline font-medium">
                        info@dorasilk.com
                      </a>
                    </p>
                    <div className="flex items-center justify-center space-x-4 text-xs text-gray-400">
                      <span>📧</span>
                      <span>📱</span>
                      <span>💬</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Trust Section */}
          <div className="mt-16 text-center">
            <div className="bg-white p-8 rounded-3xl shadow-xl max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold text-dorasilk-charcoal mb-6 font-display">Thank You for Choosing Dorasilk!</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">💎</div>
                  <h4 className="text-lg font-semibold text-dorasilk-charcoal mb-2 font-display">Premium Quality</h4>
                  <p className="text-sm text-gray-600">Salon-grade ingredients and formulations</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🚚</div>
                  <h4 className="text-lg font-semibold text-dorasilk-charcoal mb-2 font-display">Free Shipping</h4>
                  <p className="text-sm text-gray-600">Free worldwide shipping on all orders</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">✨</div>
                  <h4 className="text-lg font-semibold text-dorasilk-charcoal mb-2 font-display">Satisfaction Guaranteed</h4>
                  <p className="text-sm text-gray-600">30-day money-back guarantee</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
