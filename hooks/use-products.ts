import { useQuery } from '@tanstack/react-query'
import { createClient } from '@/lib/supabase'

export interface Product {
  id: string
  name: string
  description: string
  price: number
  image_url: string
  created_at: string
}

async function fetchProducts(): Promise<Product[]> {
  const supabase = createClient()
  
  const { data: products, error } = await supabase
    .from("products")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(10)

  if (error) {
    throw new Error(`Failed to fetch products: ${error.message}`)
  }

  return products || []
}

export function useProducts() {
  return useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes (formerly cacheTime)
  })
} 