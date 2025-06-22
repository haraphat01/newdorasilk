'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function CancelPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dorasilk-ivory to-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="bg-white p-8 rounded-3xl shadow-xl max-w-2xl mx-auto mb-8">
              <div className="text-dorasilk-gold text-8xl mb-6">😔</div>
              <h1 className="text-4xl md:text-5xl font-bold text-dorasilk-charcoal mb-6 font-display">Payment Cancelled</h1>
              <div className="h-1 w-32 bg-gradient-to-r from-dorasilk-gold to-dorasilk-rose-gold mx-auto mb-8"></div>
              <p className="text-xl text-dorasilk-charcoal leading-relaxed">
                No worries! Your payment was cancelled and no charges were made to your account.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Main Content */}
            <div>
              <Card className="bg-white shadow-xl border-0">
                <CardContent className="p-8">
                  <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-dorasilk-charcoal mb-6 font-display">No Charges Made</h2>
                    <p className="text-dorasilk-charcoal mb-6 leading-relaxed">
                      Your payment was cancelled before completion. Your card has not been charged and your account remains unchanged.
                    </p>
                    
                    <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-2xl border border-green-200">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
                          ✓
                        </div>
                        <div>
                          <h4 className="font-semibold text-green-800">Payment Cancelled Safely</h4>
                          <p className="text-sm text-green-700">No charges were made to your account</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Button asChild className="w-full bg-gradient-to-r from-dorasilk-gold to-dorasilk-rose-gold hover:from-dorasilk-rose-gold hover:to-dorasilk-gold text-white font-bold uppercase tracking-wider py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                      <Link href="/#products">Try Again</Link>
                    </Button>
                    
                    <Button 
                      asChild
                      variant="outline"
                      className="w-full border-2 border-dorasilk-gold text-dorasilk-gold hover:bg-dorasilk-gold hover:text-white font-semibold uppercase tracking-wider py-4 rounded-xl transition-all duration-300"
                    >
                      <Link href="/">Back to Home</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Help Section */}
            <div>
              <Card className="bg-white shadow-xl border-0">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold text-dorasilk-charcoal mb-6 font-display">Need Help?</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-dorasilk-gold rounded-full flex items-center justify-center text-white flex-shrink-0">
                        🔒
                      </div>
                      <div>
                        <h4 className="font-semibold text-dorasilk-charcoal mb-1">Secure Payments</h4>
                        <p className="text-sm text-gray-600">All payments are processed securely through Stripe</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-dorasilk-gold rounded-full flex items-center justify-center text-white flex-shrink-0">
                        💬
                      </div>
                      <div>
                        <h4 className="font-semibold text-dorasilk-charcoal mb-1">Customer Support</h4>
                        <p className="text-sm text-gray-600">Contact us if you have any questions about payment</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-dorasilk-gold rounded-full flex items-center justify-center text-white flex-shrink-0">
                        🔄
                      </div>
                      <div>
                        <h4 className="font-semibold text-dorasilk-charcoal mb-1">Try Again</h4>
                        <p className="text-sm text-gray-600">You can try the payment again anytime</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-dorasilk-gold rounded-full flex items-center justify-center text-white flex-shrink-0">
                        📧
                      </div>
                      <div>
                        <h4 className="font-semibold text-dorasilk-charcoal mb-1">Email Support</h4>
                        <p className="text-sm text-gray-600">Get help via email at info@dorasilk.com</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-gradient-to-r from-dorasilk-ivory to-dorasilk-champagne rounded-2xl">
                    <h4 className="font-semibold text-dorasilk-charcoal mb-3 font-display">Common Reasons for Cancellation</h4>
                    <ul className="space-y-2 text-sm text-dorasilk-charcoal">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-dorasilk-gold rounded-full mr-3"></span>
                        Changed your mind about the purchase
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-dorasilk-gold rounded-full mr-3"></span>
                        Technical issues during checkout
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-dorasilk-gold rounded-full mr-3"></span>
                        Wanted to review order details first
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-dorasilk-gold rounded-full mr-3"></span>
                        Payment method issues
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Trust Section */}
          <div className="mt-16 text-center">
            <div className="bg-white p-8 rounded-3xl shadow-xl max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold text-dorasilk-charcoal mb-6 font-display">Why Choose Dorasilk?</h3>
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

          {/* Contact Section */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-dorasilk-gold to-dorasilk-rose-gold p-8 rounded-3xl text-white">
              <h3 className="text-2xl font-semibold mb-4 font-display">Still Have Questions?</h3>
              <p className="mb-6 leading-relaxed">
                Our customer support team is here to help you with any questions or concerns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:info@dorasilk.com"
                  className="px-8 py-3 bg-white text-dorasilk-gold font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                >
                  Email Support
                </a>
                <a 
                  href="/#products"
                  className="px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-dorasilk-gold transition-all duration-300 transform hover:scale-105"
                >
                  Browse Products
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
