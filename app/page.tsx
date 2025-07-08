'use client'

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ProductsSection } from "@/components/products-section"
import { NewsletterLaunch } from "@/components/newsletter-launch"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Banner */}
      {/* <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dorasilk-black">
      
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border border-dorasilk-gold rounded-full"></div>
          <div className="absolute top-40 right-32 w-24 h-24 border border-dorasilk-gold rounded-full"></div>
          <div className="absolute bottom-32 left-32 w-20 h-20 border border-dorasilk-gold rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-28 h-28 border border-dorasilk-gold rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-6xl md:text-8xl font-heading text-dorasilk-white mb-6 leading-tight">
                Dorasilk
              </h1>
              <div className="h-1 w-32 bg-dorasilk-gold mx-auto mb-8"></div>
              <p className="text-2xl md:text-3xl text-dorasilk-white font-subheading mb-4">
                The Science of Hair Revamp
              </p>
              <p className="text-lg md:text-xl text-dorasilk-white max-w-3xl mx-auto leading-relaxed mb-8 font-body">
                Salon-smooth wigs. Bounce-restored curls. Ritual-grade care—now in your hands.
              </p>
            </div>

            <div className="mb-12">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button 
                  onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 bg-dorasilk-gold hover:bg-dorasilk-beige text-dorasilk-black font-cta rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Shop Now
                </button>
                <button 
                  onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 border-2 border-dorasilk-gold text-dorasilk-gold hover:bg-dorasilk-gold hover:text-dorasilk-black font-cta rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  How It Works
                </button>
              </div>
            </div>

       
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="text-4xl mb-4">✨</div>
                <h3 className="text-lg font-subheading text-dorasilk-white mb-2">Premium Quality</h3>
                <p className="text-sm text-dorasilk-white font-body">Salon-grade ingredients for professional results</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🚚</div>
                <h3 className="text-lg font-subheading text-dorasilk-white mb-2">Free Shipping</h3>
                <p className="text-sm text-dorasilk-white font-body">Free shipping on all orders worldwide</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">💎</div>
                <h3 className="text-lg font-subheading text-dorasilk-white mb-2">Luxury Experience</h3>
                <p className="text-sm text-dorasilk-white font-body">Elegant packaging and premium service</p>
              </div>
            </div>
          </div>
        </div>

  
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-dorasilk-gold rounded-full flex justify-center">
            <div className="w-1 h-3 bg-dorasilk-gold rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section> */}




      {/* <section className="py-24 bg-dorasilk-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading text-dorasilk-black mb-6">
                Tired of stiff wigs and failed revamps?
              </h2>
              <div className="h-1 w-32 bg-dorasilk-gold mx-auto mb-8"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="bg-gradient-to-r from-red-50 to-red-100 p-8 rounded-2xl border-l-4 border-red-400">
                  <h3 className="text-2xl font-subheading text-red-800 mb-4">The Problem</h3>
                  <ul className="space-y-3 text-red-700 font-body">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2"></span>
                      Dry, stiff wigs after just weeks of use
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2"></span>
                      Salon treatments that don't last
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2"></span>
                      Wasted money on ineffective products
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2"></span>
                      No clear guidance on wig care
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-gradient-to-r from-green-50 to-green-100 p-8 rounded-2xl border-l-4 border-green-400">
                  <h3 className="text-2xl font-subheading text-green-800 mb-4">The Dorasilk Solution</h3>
                  <ul className="space-y-3 text-green-700 font-body">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></span>
                      Scientifically engineered systems
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></span>
                      Long-lasting salon-quality results
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></span>
                      Step-by-step ritual guidance
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></span>
                      Proven results you can trust
                    </li>
                  </ul>
                </div>
              </div>
            </div>

         
            <div className="mt-16 text-center">
              <div className="bg-dorasilk-cream p-12 rounded-3xl">
                <h3 className="text-2xl font-subheading text-dorasilk-black mb-6">See the Transformation</h3>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  <div className="bg-dorasilk-white p-6 rounded-2xl shadow-lg">
                    <h4 className="text-lg font-subheading text-red-600 mb-4">Before</h4>
                    <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl flex items-center justify-center">
                      <span className="text-gray-500 text-lg font-body">Dry, Stiff Hair</span>
                    </div>
                  </div>
                  <div className="bg-dorasilk-white p-6 rounded-2xl shadow-lg">
                    <h4 className="text-lg font-subheading text-green-600 mb-4">After</h4>
                    <div className="aspect-square bg-gradient-to-br from-dorasilk-gold to-dorasilk-beige rounded-xl flex items-center justify-center">
                      <span className="text-dorasilk-black text-lg font-body">Silky, Bouncy Hair</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}


      {/* <section id="how-it-works" className="py-24 bg-dorasilk-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading text-dorasilk-black mb-6">The 3-Step Ritual</h2>
              <div className="h-1 w-32 bg-dorasilk-gold mx-auto mb-8"></div>
              <p className="text-xl text-dorasilk-black max-w-4xl mx-auto leading-relaxed font-body">
                Transform your wigs with our scientifically proven system. Simple steps, extraordinary results.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center shadow-xl border-0 bg-dorasilk-white hover-lift">
                <CardHeader className="bg-dorasilk-gold text-dorasilk-black">
                  <div className="text-4xl mb-4">🧴</div>
                  <CardTitle className="text-2xl font-heading">Step 1: Cleanse</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <h4 className="text-lg font-subheading text-dorasilk-black mb-3">Prep + Purify Shampoo™</h4>
                  <p className="text-dorasilk-black mb-4 font-body">
                    Gently removes buildup and prepares hair for optimal treatment absorption.
                  </p>
                  <Badge variant="secondary" className="bg-dorasilk-beige text-dorasilk-black font-cta">
                    Reset • Refresh • Reawaken
                  </Badge>
                </CardContent>
              </Card>

              <Card className="text-center shadow-xl border-0 bg-dorasilk-white hover-lift">
                <CardHeader className="bg-dorasilk-gold text-dorasilk-black">
                  <div className="text-4xl mb-4">✨</div>
                  <CardTitle className="text-2xl font-heading">Step 2: Treat</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <h4 className="text-lg font-subheading text-dorasilk-black mb-3">Sleek/Curl Fusion</h4>
                  <p className="text-dorasilk-black mb-4 font-body">
                    Deep conditioning treatment that restores bounce, shine, and softness.
                  </p>
                  <Badge variant="secondary" className="bg-dorasilk-beige text-dorasilk-black font-cta">
                    Bring the Bounce Back
                  </Badge>
                </CardContent>
              </Card>

              <Card className="text-center shadow-xl border-0 bg-dorasilk-white hover-lift">
                <CardHeader className="bg-dorasilk-gold text-dorasilk-black">
                  <div className="text-4xl mb-4">🔒</div>
                  <CardTitle className="text-2xl font-heading">Step 3: Seal</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <h4 className="text-lg font-subheading text-dorasilk-black mb-3">Elixir Serum + Heatluxe Cap</h4>
                  <p className="text-dorasilk-black mb-4 font-body">
                    Locks in moisture and enhances results with heat-activated treatment.
                  </p>
                  <Badge variant="secondary" className="bg-dorasilk-beige text-dorasilk-black font-cta">
                    Silk in a Bottle
                  </Badge>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-dorasilk-black mb-6 font-body">
                Each product includes NFC-enabled instructions for guided application
              </p>
              <button 
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-dorasilk-gold hover:bg-dorasilk-beige text-dorasilk-black font-cta rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Start Your Ritual
              </button>
            </div>
          </div>
        </div>
      </section> */}


      {/* <section className="py-24 bg-dorasilk-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-dorasilk-cream p-8 md:p-12 rounded-3xl shadow-xl">
              <div className="mb-8">
                <div className="text-6xl mb-4">💖</div>
                <h3 className="text-2xl font-subheading text-dorasilk-black mb-4">Real Results, Real Stories</h3>
              </div>
              
              <blockquote className="text-xl md:text-2xl text-dorasilk-black italic font-heading leading-relaxed mb-8">
                "I almost gave up on my NGN300K wig. Dorasilk revived it in one day. 
                My hair is now softer than when I first bought it. This is magic in a bottle!"
              </blockquote>
              
              <div className="text-dorasilk-gold font-subheading text-lg mb-4">
                — Sarah K., Lagos
              </div>
              
              <div className="flex justify-center space-x-4 text-sm text-dorasilk-black font-body">
                <span>★★★★★</span>
                <span>Verified Purchase</span>
                <span>Before & After Photos</span>
              </div>
            </div>
          </div>
        </div>
      </section> */}


      {/* <section id="about" className="py-24 bg-dorasilk-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading text-dorasilk-black mb-6">About Dorasilk</h2>
              <div className="h-1 w-32 bg-dorasilk-gold mx-auto mb-8"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
              <div className="space-y-8">
                <div className="bg-dorasilk-white p-8 rounded-2xl shadow-lg">
                  <h3 className="text-2xl font-subheading text-dorasilk-black mb-4">Vision</h3>
                  <p className="text-dorasilk-black leading-relaxed font-body">
                    To make luxury wig care accessible, ritualistic, and deeply transformational for every woman who 
                    invests in donor hair.
                  </p>
                </div>
                
                <div className="bg-dorasilk-white p-8 rounded-2xl shadow-lg">
                  <h3 className="text-2xl font-subheading text-dorasilk-black mb-4">Mission</h3>
                  <p className="text-dorasilk-black leading-relaxed font-body">
                    To eliminate salon guesswork by offering scientifically engineered systems that restore the life, 
                    shine, and bounce of wigs and bundles.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-subheading text-dorasilk-black mb-4">Core Values</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-dorasilk-gold rounded-full"></div>
                    <span className="text-dorasilk-black font-body font-medium">Ritual over routine</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-dorasilk-gold rounded-full"></div>
                    <span className="text-dorasilk-black font-body font-medium">Science over assumptions</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-dorasilk-gold rounded-full"></div>
                    <span className="text-dorasilk-black font-body font-medium">Results over hype</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-dorasilk-gold rounded-full"></div>
                    <span className="text-dorasilk-black font-body font-medium">Empowerment over shame</span>
                  </div>
                </div>
              </div>
            </div>

           
            <div className="bg-dorasilk-white p-8 md:p-12 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-subheading text-dorasilk-black mb-6 text-center">Our Story</h3>
              <p className="text-lg text-dorasilk-black leading-relaxed text-center max-w-4xl mx-auto font-body">
                Dorasilk was born from frustration. After spending hundreds of thousands on premium wigs, our 
                founder—like so many others—was left with dry, stiff hair just weeks later. No salon could explain why. 
                No product worked long-term. That pain sparked a mission: to create the first pro-grade system 
                made exclusively for wigs and bundles.
              </p>
            </div>
          </div>
        </div>
      </section> */}


      {/* <section className="py-24 bg-dorasilk-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-heading text-dorasilk-black mb-6">From the Founder</h2>
              <div className="h-1 w-32 bg-dorasilk-gold mx-auto mb-8"></div>
            </div>

            <div className="bg-dorasilk-cream p-8 md:p-12 rounded-3xl shadow-xl">
              <div className="mb-8">
                <div className="w-24 h-24 bg-dorasilk-gold rounded-full mx-auto flex items-center justify-center text-3xl">
                  👑
                </div>
                <h3 className="text-2xl font-subheading text-dorasilk-black mt-4 mb-2">
                  Opemipo Monica Akintunde
                </h3>
                <p className="text-dorasilk-gold font-body font-medium">Founder & CEO</p>
              </div>
              
              <blockquote className="text-xl md:text-2xl text-dorasilk-black italic font-heading leading-relaxed mb-8">
                "I created Dorasilk for women like me—women tired of trial-and-error and wasted money. 
                This brand is a love letter to every woman who believed her wig deserved better. 
                Thank you for trusting us with your crown."
              </blockquote>
            </div>
          </div>
        </div>
      </section> */}


      {/* <ProductsSection /> */}


      {/* <section className="py-24 bg-dorasilk-black text-dorasilk-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-heading mb-6 text-dorasilk-white">Transformations</h2>
            <div className="h-1 w-32 bg-dorasilk-gold mx-auto mb-8"></div>
            <p className="text-xl mb-12 leading-relaxed text-dorasilk-white max-w-4xl mx-auto font-body">
              Real results from real customers. See how Dorasilk is changing the game for wig care.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-dorasilk-white/10 backdrop-blur-sm p-6 rounded-2xl border border-dorasilk-white/20">
                <div className="text-4xl mb-4">📸</div>
                <h3 className="text-xl font-subheading mb-2 text-dorasilk-white">Before/After Gallery</h3>
                <p className="text-sm text-dorasilk-white/70 font-body">See the dramatic transformations</p>
              </div>
              <div className="bg-dorasilk-white/10 backdrop-blur-sm p-6 rounded-2xl border border-dorasilk-white/20">
                <div className="text-4xl mb-4">👩‍🎨</div>
                <h3 className="text-xl font-subheading mb-2 text-dorasilk-white">Stylist Tests</h3>
                <p className="text-sm text-dorasilk-white/70 font-body">Professional validation</p>
              </div>
              <div className="bg-dorasilk-white/10 backdrop-blur-sm p-6 rounded-2xl border border-dorasilk-white/20">
                <div className="text-4xl mb-4">💬</div>
                <h3 className="text-xl font-subheading mb-2 text-dorasilk-white">User Stories</h3>
                <p className="text-sm text-dorasilk-white/70 font-body">Real customer experiences</p>
              </div>
            </div>

            <button 
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-12 py-6 bg-dorasilk-gold hover:bg-dorasilk-beige text-dorasilk-black font-cta rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl text-lg"
            >
              Start Your Transformation
            </button>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <NewsletterLaunch />
      <footer className="bg-dorasilk-black text-dorasilk-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              {/* <div>
                <h3 className="text-2xl font-heading mb-4 text-dorasilk-white">Dorasilk</h3>
                <p className="text-dorasilk-white/70 leading-relaxed font-body">
                  The Science of Hair Revamp. Premium wig care products for the modern woman.
                </p>
              </div> */}

              {/* <div>
                <h4 className="text-lg font-subheading mb-4 text-dorasilk-white">Products</h4>
                <ul className="space-y-2 text-dorasilk-white/70 font-body">
                  <li>Sleek Fusion Treatment™</li>
                  <li>Curl Fusion Treatment™</li>
                  <li>Prep + Purify Shampoo™</li>
                  <li>Elixir Serum by Dorasilk™</li>
                  <li>Heatluxe™</li>
                </ul>
              </div> */}

              <div>
                <h4 className="text-lg font-subheading mb-4 text-dorasilk-white">Support</h4>
                <ul className="space-y-2 text-dorasilk-white/70 font-body">
                  <li>Contact Us</li>
                  <li>Shipping Information</li>
                  <li>Returns & Exchanges</li>
                  <li>FAQ</li>
                  <li>Product Verification</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-subheading mb-4 text-dorasilk-white">Connect</h4>
                <ul className="space-y-2 text-dorasilk-white/70 font-body">
                  <li>Instagram</li>
                  <li>Facebook</li>
                  <li>Twitter</li>
                  <li>YouTube</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-dorasilk-white/20 pt-8 text-center">
              <p className="text-dorasilk-white/50 font-body">
                © 2025 Dorasilk. All rights reserved. The Science of Hair Revamp.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
