'use client'

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useProducts } from "@/hooks/use-products"

export function ProductsSection() {
  const { data: products, isLoading, error } = useProducts()

  const handleProceedToPayment = (productId: string, productName: string, price: number) => {
    // Store product info in sessionStorage for the checkout page
    sessionStorage.setItem('selectedProduct', JSON.stringify({
      id: productId,
      name: productName,
      price: price
    }))
    
    // Redirect to checkout page
    window.location.href = `/checkout?product=${productId}`
  }

  if (isLoading) {
    return (
      <section id="products" className="py-24 bg-gradient-to-br from-dorasilk-ivory to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-dorasilk-charcoal mb-6 font-display">Our Products</h2>
            <div className="h-1 w-32 bg-gradient-to-r from-dorasilk-gold to-dorasilk-rose-gold mx-auto mb-8"></div>
            <p className="text-xl text-dorasilk-charcoal max-w-3xl mx-auto leading-relaxed">
              Dorasilk brings salon-quality revamp treatments straight to your hands. Designed for wigs and bundles, our DIY kits restore shine, bounce, and softness—so your hair always looks brand new.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <Card key={index} className="overflow-hidden bg-white animate-pulse border-0 shadow-lg">
                <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300"></div>
                <CardContent className="p-6">
                  <div className="h-6 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded mb-4 w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded mb-4 w-2/3"></div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-8 bg-gray-200 rounded w-20"></div>
                    <div className="h-10 bg-gray-200 rounded w-24"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section id="products" className="py-24 bg-gradient-to-br from-dorasilk-ivory to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-dorasilk-charcoal mb-6 font-display">Our Products</h2>
            <div className="h-1 w-32 bg-gradient-to-r from-dorasilk-gold to-dorasilk-rose-gold mx-auto mb-8"></div>
            <p className="text-xl text-dorasilk-charcoal max-w-3xl mx-auto leading-relaxed">
              Dorasilk brings salon-quality revamp treatments straight to your hands. Designed for wigs and bundles, our DIY kits restore shine, bounce, and softness—so your hair always looks brand new.
            </p>
          </div>
          
          <div className="text-center py-16">
            <div className="bg-white p-12 rounded-3xl shadow-xl max-w-md mx-auto">
              <div className="text-dorasilk-gold text-6xl mb-6">⚠️</div>
              <h3 className="text-2xl font-semibold text-dorasilk-charcoal mb-4 font-display">Unable to Load Products</h3>
              <p className="text-dorasilk-charcoal max-w-sm mx-auto mb-8 leading-relaxed">
                We're experiencing some technical difficulties. Please try refreshing the page or contact us for assistance.
              </p>
              <Button 
                onClick={() => window.location.reload()} 
                className="bg-gradient-to-r from-dorasilk-gold to-dorasilk-rose-gold hover:from-dorasilk-rose-gold hover:to-dorasilk-gold text-white font-medium uppercase tracking-wider px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Refresh Page
              </Button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="products" className="py-24 bg-gradient-to-br from-dorasilk-ivory to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dorasilk-charcoal mb-6 font-display">Our Products</h2>
          <div className="h-1 w-32 bg-gradient-to-r from-dorasilk-gold to-dorasilk-rose-gold mx-auto mb-8"></div>
          <p className="text-xl text-dorasilk-charcoal max-w-3xl mx-auto leading-relaxed">
            Dorasilk brings salon-quality revamp treatments straight to your hands. Designed for wigs and bundles, our DIY kits restore shine, bounce, and softness—so your hair always looks brand new.
          </p>
        </div>
        
        {products && products.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="group overflow-hidden bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg">
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={product.image_url || "/placeholder.svg?height=300&width=300"}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-dorasilk-gold text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Premium
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 font-display text-dorasilk-gold group-hover:text-dorasilk-rose-gold transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-sm text-dorasilk-rose-gold italic mb-4 font-display">
                    {product.name.includes('Treatment') ? 'Bring the Bounce Back' : 
                     product.name.includes('Shampoo') ? 'Reset. Refresh. Reawaken.' :
                     product.name.includes('Serum') ? 'Silk in a bottle. Shine in Seconds.' :
                     product.name.includes('Cap') ? 'Turn Up the Heat — the Right Way' :
                     '3-in-1 Power: Prime. Detangle. Defend.'}
                  </p>
                  <p className="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed">{product.description}</p>
                  
                  <div className="bg-gradient-to-r from-dorasilk-ivory to-dorasilk-champagne p-4 rounded-xl mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-dorasilk-charcoal">
                        ${(product.price / 100).toFixed(2)}
                      </span>
                      <div className="flex items-center space-x-1">
                        <span className="text-yellow-500">★★★★★</span>
                        <span className="text-sm text-gray-500">(127 reviews)</span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Free shipping included</p>
                  </div>

                  <div className="space-y-3">
                    <Link href={`/products/${product.id}`}>
                      <Button 
                        className="w-full bg-gradient-to-r from-dorasilk-gold to-dorasilk-rose-gold hover:from-dorasilk-rose-gold hover:to-dorasilk-gold text-white font-semibold uppercase tracking-wider py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                      >
                        View Details
                      </Button>
                    </Link>
                    
                    <Button 
                      onClick={() => handleProceedToPayment(product.id, product.name, product.price)}
                      variant="outline"
                      className="w-full border-2 border-dorasilk-gold text-dorasilk-gold hover:bg-dorasilk-gold hover:text-white font-semibold uppercase tracking-wider py-3 rounded-xl transition-all duration-300"
                    >
                      Quick Buy
                    </Button>
                    
                    <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <span className="mr-1">🚚</span>
                        Free Shipping
                      </span>
                      <span className="flex items-center">
                        <span className="mr-1">⚡</span>
                        Fast Delivery
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="bg-white p-12 rounded-3xl shadow-xl max-w-md mx-auto">
              <div className="text-dorasilk-gold text-6xl mb-6">✨</div>
              <h3 className="text-2xl font-semibold text-dorasilk-charcoal mb-4 font-display">Products Coming Soon</h3>
              <p className="text-dorasilk-charcoal max-w-sm mx-auto leading-relaxed">
                We're preparing our premium wig care collection for you. Check back soon for our luxurious treatments.
              </p>
            </div>
          </div>
        )}

        {/* Trust Section */}
        <div className="mt-20 text-center">
          <div className="bg-white p-8 rounded-3xl shadow-xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-dorasilk-charcoal mb-6 font-display">Why Choose Dorasilk?</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🧪</div>
                <h4 className="text-lg font-semibold text-dorasilk-charcoal mb-2 font-display">Premium Ingredients</h4>
                <p className="text-sm text-gray-600">Salon-grade formulations with the finest ingredients</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">💎</div>
                <h4 className="text-lg font-semibold text-dorasilk-charcoal mb-2 font-display">Luxury Experience</h4>
                <p className="text-sm text-gray-600">Elegant packaging and premium customer service</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">✨</div>
                <h4 className="text-lg font-semibold text-dorasilk-charcoal mb-2 font-display">Proven Results</h4>
                <p className="text-sm text-gray-600">Thousands of satisfied customers worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 