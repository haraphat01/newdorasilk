'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useProducts } from '@/hooks/use-products'

interface SelectedProduct {
  id: string
  name: string
  price: number
}

export default function CheckoutPage() {
  const searchParams = useSearchParams()
  const productId = searchParams.get('product')
  const { data: products } = useProducts()
  const [selectedProduct, setSelectedProduct] = useState<SelectedProduct | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    // Get product from sessionStorage or find by ID
    const storedProduct = sessionStorage.getItem('selectedProduct')
    if (storedProduct) {
      setSelectedProduct(JSON.parse(storedProduct))
    } else if (productId && products) {
      const product = products.find(p => p.id === productId)
      if (product) {
        setSelectedProduct({
          id: product.id,
          name: product.name,
          price: product.price
        })
      }
    }
  }, [productId, products])

  const handleProceedToStripe = async () => {
    if (!selectedProduct) return

    setIsLoading(true)
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productId: selectedProduct.id,
          productName: selectedProduct.name,
          price: selectedProduct.price,
        }),
      })

      const { sessionId } = await response.json()
      
      // Redirect to Stripe Checkout
      const stripe = await import('@stripe/stripe-js').then(stripe => 
        stripe.loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)
      )
      
      if (stripe) {
        const { error } = await stripe.redirectToCheckout({ sessionId })
        if (error) {
          console.error('Stripe error:', error)
          alert('Payment failed. Please try again.')
        }
      }
    } catch (error) {
      console.error('Checkout error:', error)
      alert('Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  if (!selectedProduct) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-dorasilk-ivory to-white flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="bg-white p-12 rounded-3xl shadow-xl">
            <div className="text-dorasilk-gold text-6xl mb-6">⚠️</div>
            <h1 className="text-2xl font-semibold text-dorasilk-charcoal mb-4 font-display">Product Not Found</h1>
            <p className="text-dorasilk-charcoal mb-8 leading-relaxed">The selected product could not be found.</p>
            <Button 
              onClick={() => window.location.href = '/#products'} 
              className="bg-gradient-to-r from-dorasilk-gold to-dorasilk-rose-gold hover:from-dorasilk-rose-gold hover:to-dorasilk-gold text-white font-medium uppercase tracking-wider px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Back to Products
            </Button>
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
            <h1 className="text-4xl md:text-5xl font-bold text-dorasilk-charcoal mb-6 font-display">Checkout</h1>
            <div className="h-1 w-32 bg-gradient-to-r from-dorasilk-gold to-dorasilk-rose-gold mx-auto mb-8"></div>
            <p className="text-xl text-dorasilk-charcoal leading-relaxed">
              Complete your purchase to get your premium Dorasilk product
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Order Summary */}
            <div className="lg:col-span-2">
              <Card className="bg-white shadow-xl border-0">
                <CardContent className="p-8">
                  <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-dorasilk-charcoal mb-6 font-display">Order Summary</h2>
                    
                    <div className="bg-gradient-to-r from-dorasilk-ivory to-dorasilk-champagne p-6 rounded-2xl">
                      <div className="flex items-center space-x-6">
                        <div className="w-24 h-24 bg-gradient-to-br from-dorasilk-gold to-dorasilk-rose-gold rounded-2xl flex items-center justify-center text-3xl">
                          ✨
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-dorasilk-charcoal font-display mb-2">{selectedProduct.name}</h3>
                          <p className="text-sm text-dorasilk-rose-gold italic font-display mb-3">
                            {selectedProduct.name.includes('Treatment') ? 'Bring the Bounce Back' : 
                             selectedProduct.name.includes('Shampoo') ? 'Reset. Refresh. Reawaken.' :
                             selectedProduct.name.includes('Serum') ? 'Silk in a bottle. Shine in Seconds.' :
                             selectedProduct.name.includes('Cap') ? 'Turn Up the Heat — the Right Way' :
                             '3-in-1 Power: Prime. Detangle. Defend.'}
                          </p>
                          <div className="flex items-center space-x-2">
                            <span className="text-yellow-500">★★★★★</span>
                            <span className="text-sm text-gray-500">(127 reviews)</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-3xl font-bold text-dorasilk-charcoal">
                            ${(selectedProduct.price / 100).toFixed(2)}
                          </p>
                          <p className="text-sm text-gray-500">USD</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-white border border-dorasilk-champagne p-4 rounded-xl">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-dorasilk-gold rounded-full flex items-center justify-center text-white">
                          🚚
                        </div>
                        <div>
                          <h4 className="font-semibold text-dorasilk-charcoal">Free Shipping</h4>
                          <p className="text-sm text-gray-500">5-7 business days</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white border border-dorasilk-champagne p-4 rounded-xl">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-dorasilk-gold rounded-full flex items-center justify-center text-white">
                          ⚡
                        </div>
                        <div>
                          <h4 className="font-semibold text-dorasilk-charcoal">Fast Processing</h4>
                          <p className="text-sm text-gray-500">Same day dispatch</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white border border-dorasilk-champagne p-4 rounded-xl">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-dorasilk-gold rounded-full flex items-center justify-center text-white">
                          💎
                        </div>
                        <div>
                          <h4 className="font-semibold text-dorasilk-charcoal">Premium Quality</h4>
                          <p className="text-sm text-gray-500">Salon-grade products</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white border border-dorasilk-champagne p-4 rounded-xl">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-dorasilk-gold rounded-full flex items-center justify-center text-white">
                          🔒
                        </div>
                        <div>
                          <h4 className="font-semibold text-dorasilk-charcoal">Secure Payment</h4>
                          <p className="text-sm text-gray-500">SSL encrypted</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Payment Summary */}
            <div className="lg:col-span-1">
              <Card className="bg-white shadow-xl border-0 sticky top-8">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold text-dorasilk-charcoal mb-6 font-display">Payment Summary</h2>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between items-center">
                      <span className="text-dorasilk-charcoal">Product</span>
                      <span className="text-dorasilk-charcoal">${(selectedProduct.price / 100).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-dorasilk-charcoal">Shipping</span>
                      <span className="text-green-600 font-semibold">FREE</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-dorasilk-charcoal">Tax</span>
                      <span className="text-dorasilk-charcoal">$0.00</span>
                    </div>
                    <div className="border-t border-dorasilk-champagne pt-4">
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold text-dorasilk-charcoal">Total</span>
                        <span className="text-2xl font-bold text-dorasilk-charcoal">${(selectedProduct.price / 100).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Button 
                      onClick={handleProceedToStripe}
                      disabled={isLoading}
                      className="w-full bg-gradient-to-r from-dorasilk-gold to-dorasilk-rose-gold hover:from-dorasilk-rose-gold hover:to-dorasilk-gold text-white font-bold uppercase tracking-wider py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg"
                    >
                      {isLoading ? (
                        <div className="flex items-center space-x-2">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Processing...</span>
                        </div>
                      ) : (
                        'Proceed to Payment'
                      )}
                    </Button>
                    
                    <Button 
                      onClick={() => window.location.href = '/#products'}
                      variant="outline"
                      className="w-full border-2 border-dorasilk-gold text-dorasilk-gold hover:bg-dorasilk-gold hover:text-white font-semibold uppercase tracking-wider py-4 rounded-xl transition-all duration-300"
                    >
                      Back to Products
                    </Button>
                  </div>

                  <div className="mt-8 text-center">
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 mb-2">
                      <span>🔒</span>
                      <span>Secure payment powered by Stripe</span>
                    </div>
                    <div className="flex items-center justify-center space-x-4 text-xs text-gray-400">
                      <span>Visa</span>
                      <span>Mastercard</span>
                      <span>American Express</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 text-center">
            <div className="bg-white p-8 rounded-3xl shadow-xl max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold text-dorasilk-charcoal mb-6 font-display">Why Shop with Dorasilk?</h3>
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