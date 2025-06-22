"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

interface Product {
  id: string
  name: string
  price: number
  image_url: string
  description: string
}

export default function BuyNowButton({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.id}`}>
      <Button 
        size="lg" 
        className="w-full text-lg py-6 bg-gradient-to-r from-dorasilk-gold to-dorasilk-rose-gold hover:from-dorasilk-rose-gold hover:to-dorasilk-gold text-white font-semibold uppercase tracking-wider transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
      >
        View Details - ${(product.price / 100).toFixed(2)}
      </Button>
    </Link>
  )
}
