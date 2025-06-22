'use client'

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ProductsSection } from "@/components/products-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-dorasilk-ivory via-dorasilk-champagne to-dorasilk-ivory">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 border border-dorasilk-gold rounded-full"></div>
          <div className="absolute top-40 right-32 w-24 h-24 border border-dorasilk-rose-gold rounded-full"></div>
          <div className="absolute bottom-32 left-32 w-20 h-20 border border-dorasilk-gold rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-28 h-28 border border-dorasilk-rose-gold rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-6xl md:text-8xl font-bold text-dorasilk-charcoal mb-6 font-display leading-tight">
                Dorasilk
              </h1>
              <div className="h-1 w-32 bg-gradient-to-r from-dorasilk-gold to-dorasilk-rose-gold mx-auto mb-8"></div>
              <p className="text-2xl md:text-3xl text-dorasilk-charcoal font-light mb-8 font-display">
                Premium Wig Care
              </p>
            </div>

            <div className="mb-12">
              <p className="text-lg md:text-xl text-dorasilk-charcoal max-w-3xl mx-auto leading-relaxed mb-8">
                Transform your wigs with salon-quality treatments. Our premium products bring back the bounce, 
                shine, and softness your hair deserves. Experience the luxury of professional care at home.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button 
                  onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 bg-gradient-to-r from-dorasilk-gold to-dorasilk-rose-gold hover:from-dorasilk-rose-gold hover:to-dorasilk-gold text-white font-semibold uppercase tracking-wider rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Shop Now
                </button>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 border-2 border-dorasilk-gold text-dorasilk-gold hover:bg-dorasilk-gold hover:text-white font-semibold uppercase tracking-wider rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  Learn More
                </button>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="text-4xl mb-4">✨</div>
                <h3 className="text-lg font-semibold text-dorasilk-charcoal mb-2 font-display">Premium Quality</h3>
                <p className="text-sm text-dorasilk-charcoal">Salon-grade ingredients for professional results</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🚚</div>
                <h3 className="text-lg font-semibold text-dorasilk-charcoal mb-2 font-display">Free Shipping</h3>
                <p className="text-sm text-dorasilk-charcoal">Free shipping on all orders worldwide</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">💎</div>
                <h3 className="text-lg font-semibold text-dorasilk-charcoal mb-2 font-display">Luxury Experience</h3>
                <p className="text-sm text-dorasilk-charcoal">Elegant packaging and premium service</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-dorasilk-gold rounded-full flex justify-center">
            <div className="w-1 h-3 bg-dorasilk-gold rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-dorasilk-charcoal mb-6 font-display">About Dorasilk</h2>
              <div className="h-1 w-32 bg-gradient-to-r from-dorasilk-gold to-dorasilk-rose-gold mx-auto mb-8"></div>
              <p className="text-xl text-dorasilk-charcoal max-w-4xl mx-auto leading-relaxed">
                We believe every woman deserves to feel confident and beautiful. Our premium wig care products 
                are crafted with the finest ingredients to restore, protect, and enhance your hair's natural beauty.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="bg-gradient-to-r from-dorasilk-ivory to-dorasilk-champagne p-8 rounded-2xl">
                  <h3 className="text-2xl font-semibold text-dorasilk-charcoal mb-4 font-display">Our Mission</h3>
                  <p className="text-dorasilk-charcoal leading-relaxed">
                    To provide premium wig care solutions that empower women to maintain their hair's beauty 
                    and confidence with salon-quality treatments in the comfort of their homes.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-dorasilk-champagne to-dorasilk-ivory p-8 rounded-2xl">
                  <h3 className="text-2xl font-semibold text-dorasilk-charcoal mb-4 font-display">Our Promise</h3>
                  <p className="text-dorasilk-charcoal leading-relaxed">
                    Every product is formulated with the highest quality ingredients, ensuring your hair 
                    receives the care it deserves while maintaining its natural beauty and strength.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-dorasilk-gold to-dorasilk-rose-gold p-1 rounded-2xl">
                  <div className="bg-white p-8 rounded-2xl">
                    <div className="aspect-square bg-gradient-to-br from-dorasilk-ivory to-dorasilk-champagne rounded-xl flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-6xl mb-4">💫</div>
                        <p className="text-dorasilk-charcoal font-display italic">Premium Care, Beautiful Results</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Message */}
      <section className="py-24 bg-gradient-to-br from-dorasilk-ivory to-dorasilk-champagne">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-dorasilk-charcoal mb-6 font-display">A Message from Our Founder</h2>
              <div className="h-1 w-32 bg-gradient-to-r from-dorasilk-gold to-dorasilk-rose-gold mx-auto mb-8"></div>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl">
              <div className="mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-dorasilk-gold to-dorasilk-rose-gold rounded-full mx-auto flex items-center justify-center text-3xl">
                  👑
                </div>
              </div>
              
              <blockquote className="text-xl md:text-2xl text-dorasilk-charcoal italic font-display leading-relaxed mb-8">
                "Every woman deserves to feel beautiful and confident. At Dorasilk, we've created premium 
                wig care products that bring salon-quality results to your home. Our commitment is to 
                help you maintain the beauty and health of your hair with the finest ingredients and 
                most effective formulations."
              </blockquote>
              
              <div className="text-dorasilk-gold font-semibold text-lg font-display">
                — Dorasilk Founder
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <ProductsSection />

      {/* Order Section */}
      <section className="py-24 bg-gradient-to-br from-dorasilk-charcoal to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display text-white">Ready to Transform Your Hair?</h2>
            <div className="h-1 w-32 bg-gradient-to-r from-dorasilk-gold to-dorasilk-rose-gold mx-auto mb-8"></div>
            <p className="text-xl mb-12 leading-relaxed text-white">
              Experience the luxury of premium wig care. Order now and enjoy free shipping worldwide.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold mb-2 font-display text-white">Easy Ordering</h3>
                <p className="text-sm text-gray-200">Simple, secure checkout process</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold mb-2 font-display text-white">Fast Delivery</h3>
                <p className="text-sm text-gray-200">Quick shipping to your doorstep</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <div className="text-4xl mb-4">💎</div>
                <h3 className="text-xl font-semibold mb-2 font-display text-white">Premium Quality</h3>
                <p className="text-sm text-gray-200">Salon-grade products guaranteed</p>
              </div>
            </div>

            <button 
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-12 py-6 bg-gradient-to-r from-dorasilk-gold to-dorasilk-rose-gold hover:from-dorasilk-rose-gold hover:to-dorasilk-gold text-white font-bold uppercase tracking-wider rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl text-lg"
            >
              Start Shopping Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dorasilk-charcoal text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-4 font-display text-white">Dorasilk</h3>
                <p className="text-gray-300 leading-relaxed">
                  Premium wig care products for the modern woman. Transform your hair with salon-quality treatments.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4 font-display text-white">Products</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>Curl Fusion Treatment™</li>
                  <li>Prep + Purify Shampoo™</li>
                  <li>Elixir Serum by Dorasilk™</li>
                  <li>Thermal Silk Cap™</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4 font-display text-white">Support</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>Contact Us</li>
                  <li>Shipping Information</li>
                  <li>Returns & Exchanges</li>
                  <li>FAQ</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4 font-display text-white">Connect</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>Instagram</li>
                  <li>Facebook</li>
                  <li>Twitter</li>
                  <li>YouTube</li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-700 pt-8 text-center">
              <p className="text-gray-400">
                © 2024 Dorasilk. All rights reserved. Premium wig care for confident women.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
