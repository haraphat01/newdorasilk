'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useProducts } from '@/hooks/use-products'

export default function ProductDetailsPage() {
  const params = useParams()
  const router = useRouter()
  const { data: products, isLoading, error } = useProducts()
  const [selectedProduct, setSelectedProduct] = useState<any>(null)

  useEffect(() => {
    if (products && params.id) {
      const product = products.find(p => p.id === params.id)
      setSelectedProduct(product)
    }
  }, [products, params.id])

  const handleProceedToPayment = (productId: string, productName: string, price: number) => {
    // Store product info in sessionStorage for the checkout page
    sessionStorage.setItem('selectedProduct', JSON.stringify({
      id: productId,
      name: productName,
      price: price
    }))
    
    // Redirect to checkout page
    router.push(`/checkout?product=${productId}`)
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-dorasilk-cream py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-1/3 mb-8"></div>
              <div className="grid lg:grid-cols-2 gap-12">
                <div className="aspect-square bg-gray-200 rounded-2xl"></div>
                <div className="space-y-6">
                  <div className="h-8 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-6 bg-gray-200 rounded w-1/2"></div>
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-12 bg-gray-200 rounded w-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (error || !selectedProduct) {
    return (
      <div className="min-h-screen bg-dorasilk-cream py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-dorasilk-white p-12 rounded-3xl shadow-xl">
              <div className="text-dorasilk-gold text-6xl mb-6">⚠️</div>
              <h1 className="text-2xl font-subheading text-dorasilk-black mb-4">Product Not Found</h1>
              <p className="text-dorasilk-black mb-8 leading-relaxed font-body">
                The product you're looking for could not be found.
              </p>
              <Button 
                onClick={() => router.push('/#products')} 
                className="bg-dorasilk-gold hover:bg-dorasilk-beige text-dorasilk-black font-cta px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
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
    <div className="min-h-screen bg-dorasilk-cream py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-dorasilk-black font-body">
              <li>
                <button 
                  onClick={() => router.push('/')}
                  className="hover:text-dorasilk-gold transition-colors"
                >
                  Home
                </button>
              </li>
              <li className="text-dorasilk-gold">/</li>
              <li>
                <button 
                  onClick={() => router.push('/#products')}
                  className="hover:text-dorasilk-gold transition-colors"
                >
                  Products
                </button>
              </li>
              <li className="text-dorasilk-gold">/</li>
              <li className="text-dorasilk-black font-medium">{selectedProduct.name}</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="space-y-6">
              <div className="aspect-square relative overflow-hidden rounded-3xl shadow-xl">
                <Image
                  src={selectedProduct.image_url || "/placeholder.svg?height=600&width=600"}
                  alt={selectedProduct.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4">
                  <div className="bg-dorasilk-gold text-dorasilk-black px-4 py-2 rounded-full text-sm font-cta">
                    Premium
                  </div>
                </div>
              </div>
              
              {/* Additional Images Placeholder */}
              <div className="grid grid-cols-4 gap-4">
                {[...Array(4)].map((_, index) => (
                  <div key={index} className="aspect-square bg-dorasilk-beige rounded-xl border-2 border-dorasilk-beige"></div>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-heading text-dorasilk-black mb-4">
                  {selectedProduct.name}
                </h1>
                <p className="text-lg text-dorasilk-gold italic font-subheading mb-4">
                  {selectedProduct.name.includes('Treatment') ? 'Bring the Bounce Back' : 
                   selectedProduct.name.includes('Shampoo') ? 'Reset. Refresh. Reawaken.' :
                   selectedProduct.name.includes('Serum') ? 'Silk in a bottle. Shine in Seconds.' :
                   selectedProduct.name.includes('Cap') ? 'Turn Up the Heat — the Right Way' :
                   '3-in-1 Power: Prime. Detangle. Defend.'}
                </p>
                
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center space-x-1">
                    <span className="text-dorasilk-gold text-xl">★★★★★</span>
                    <span className="text-sm text-dorasilk-black/70 font-body">(127 reviews)</span>
                  </div>
                  <div className="text-green-600 text-sm font-body font-semibold">In Stock</div>
                </div>

                <div className="bg-dorasilk-beige p-6 rounded-2xl mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-4xl font-heading text-dorasilk-black">
                      ${(selectedProduct.price / 100).toFixed(2)}
                    </span>
                    <div className="text-right">
                      <p className="text-sm text-dorasilk-black/70 line-through font-body">$59.99</p>
                      <p className="text-green-600 font-body font-semibold">Save $14.99</p>
                    </div>
                  </div>
                  <p className="text-sm text-dorasilk-black/70 mt-2 font-body">Free shipping included</p>
                </div>
              </div>

              {/* Product Description */}
              <div>
                <h3 className="text-xl font-subheading text-dorasilk-black mb-4">Description</h3>
                <p className="text-dorasilk-black leading-relaxed mb-6 font-body">
                  {selectedProduct.description}
                </p>
                
                <div className="bg-dorasilk-white p-6 rounded-2xl border border-dorasilk-beige">
                  <h4 className="font-subheading text-dorasilk-black mb-3">Key Benefits</h4>
                  <ul className="space-y-2 text-dorasilk-black font-body">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-dorasilk-gold rounded-full mr-3"></span>
                      Deep hydration and moisture retention
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-dorasilk-gold rounded-full mr-3"></span>
                      Reduces frizz and enhances definition
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-dorasilk-gold rounded-full mr-3"></span>
                      Salon-quality results at home
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-dorasilk-gold rounded-full mr-3"></span>
                      Long-lasting luxury scent
                    </li>
                  </ul>
                </div>
              </div>

              {/* Features */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-dorasilk-white p-4 rounded-xl border border-dorasilk-beige">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-dorasilk-gold rounded-full flex items-center justify-center text-dorasilk-black">
                      🚚
                    </div>
                    <div>
                      <h4 className="font-subheading text-dorasilk-black">Free Shipping</h4>
                      <p className="text-sm text-dorasilk-black/70 font-body">5-7 business days</p>
                    </div>
                  </div>
                </div>
                <div className="bg-dorasilk-white p-4 rounded-xl border border-dorasilk-beige">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-dorasilk-gold rounded-full flex items-center justify-center text-dorasilk-black">
                      ⚡
                    </div>
                    <div>
                      <h4 className="font-subheading text-dorasilk-black">Fast Processing</h4>
                      <p className="text-sm text-dorasilk-black/70 font-body">Same day dispatch</p>
                    </div>
                  </div>
                </div>
                <div className="bg-dorasilk-white p-4 rounded-xl border border-dorasilk-beige">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-dorasilk-gold rounded-full flex items-center justify-center text-dorasilk-black">
                      💎
                    </div>
                    <div>
                      <h4 className="font-subheading text-dorasilk-black">Premium Quality</h4>
                      <p className="text-sm text-dorasilk-black/70 font-body">Salon-grade products</p>
                    </div>
                  </div>
                </div>
                <div className="bg-dorasilk-white p-4 rounded-xl border border-dorasilk-beige">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-dorasilk-gold rounded-full flex items-center justify-center text-dorasilk-black">
                      🔒
                    </div>
                    <div>
                      <h4 className="font-subheading text-dorasilk-black">Secure Payment</h4>
                      <p className="text-sm text-dorasilk-black/70 font-body">SSL encrypted</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <Button 
                  onClick={() => handleProceedToPayment(selectedProduct.id, selectedProduct.name, selectedProduct.price)}
                  className="w-full bg-dorasilk-gold hover:bg-dorasilk-beige text-dorasilk-black font-cta py-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg"
                >
                  Proceed with Payment
                </Button>
                
                <Button 
                  onClick={() => router.push('/#products')}
                  variant="outline"
                  className="w-full border-2 border-dorasilk-gold text-dorasilk-gold hover:bg-dorasilk-gold hover:text-dorasilk-black font-cta py-4 rounded-xl transition-all duration-300"
                >
                  Back to Products
                </Button>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-20 space-y-12">
            {/* How to Use */}
            <div className="bg-dorasilk-white p-8 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-subheading text-dorasilk-black mb-6">How to Use</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-dorasilk-gold rounded-full flex items-center justify-center text-dorasilk-black text-2xl font-heading mx-auto mb-4">
                    1
                  </div>
                  <h4 className="font-subheading text-dorasilk-black mb-2">Prepare</h4>
                  <p className="text-sm text-dorasilk-black/70 font-body">Clean and detangle your wig thoroughly</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-dorasilk-gold rounded-full flex items-center justify-center text-dorasilk-black text-2xl font-heading mx-auto mb-4">
                    2
                  </div>
                  <h4 className="font-subheading text-dorasilk-black mb-2">Apply</h4>
                  <p className="text-sm text-dorasilk-black/70 font-body">Apply the product evenly throughout your wig</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-dorasilk-gold rounded-full flex items-center justify-center text-dorasilk-black text-2xl font-heading mx-auto mb-4">
                    3
                  </div>
                  <h4 className="font-subheading text-dorasilk-black mb-2">Style</h4>
                  <p className="text-sm text-dorasilk-black/70 font-body">Style as desired and enjoy beautiful results</p>
                </div>
              </div>
            </div>

            {/* Customer Reviews */}
            <div className="bg-dorasilk-white p-8 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-subheading text-dorasilk-black mb-6">Customer Reviews</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-dorasilk-beige p-6 rounded-2xl">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-dorasilk-gold">★★★★★</span>
                    <span className="font-subheading text-dorasilk-black">Sarah M.</span>
                  </div>
                  <p className="text-dorasilk-black text-sm leading-relaxed font-body">
                    "Absolutely love this product! My wigs have never looked better. The scent is divine and the results are salon-quality."
                  </p>
                </div>
                <div className="bg-dorasilk-beige p-6 rounded-2xl">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-dorasilk-gold">★★★★★</span>
                    <span className="font-subheading text-dorasilk-black">Jennifer L.</span>
                  </div>
                  <p className="text-dorasilk-black text-sm leading-relaxed font-body">
                    "This has become my go-to product for wig care. The hydration is incredible and it makes my hair so soft and manageable."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
