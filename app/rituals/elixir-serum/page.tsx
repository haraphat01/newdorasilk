import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

export const metadata: Metadata = {
  title: 'Elixir Serum - Instructions',
  description: 'Exclusive instructions for Elixir Serum product owners',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function ElixirSerumInstructions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dorasilk-ivory to-white py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 bg-dorasilk-gold text-white">
            Exclusive Access
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-dorasilk-charcoal mb-4 font-display">
            Elixir Serum by Dorasilk™ Instructions
          </h1>
          <p className="text-xl text-dorasilk-charcoal max-w-2xl mx-auto">
            Your complete guide to silk in a bottle and shine in seconds
          </p>
        </div>

        <Card className="mb-8 shadow-xl border-0">
          <CardHeader className="bg-gradient-to-r from-dorasilk-gold to-dorasilk-rose-gold text-white">
            <CardTitle className="text-2xl font-display">What You'll Need</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <ul className="space-y-3 text-dorasilk-charcoal">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-dorasilk-gold rounded-full mr-3"></span>
                Elixir Serum by Dorasilk™
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-dorasilk-gold rounded-full mr-3"></span>
                Clean, styled wig
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-dorasilk-gold rounded-full mr-3"></span>
                Wide-tooth comb (optional)
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-dorasilk-gold rounded-full mr-3"></span>
                Clean hands
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-dorasilk-gold rounded-full mr-3"></span>
                Small mirror (optional)
              </li>
            </ul>
          </CardContent>
        </Card>

        <div className="space-y-8">
          <Card className="shadow-xl border-0">
            <CardHeader className="bg-gradient-to-r from-dorasilk-ivory to-dorasilk-champagne">
              <CardTitle className="text-2xl font-display text-dorasilk-charcoal">Step 1: Preparation</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4 text-dorasilk-charcoal">
                <p>Ensure your wig is clean, dry, and styled as desired.</p>
                <p>Wash your hands thoroughly to avoid transferring dirt or oils.</p>
                <p>Shake the Elixir Serum bottle gently to ensure the formula is well-mixed.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-xl border-0">
            <CardHeader className="bg-gradient-to-r from-dorasilk-ivory to-dorasilk-champagne">
              <CardTitle className="text-2xl font-display text-dorasilk-charcoal">Step 2: Application Amount</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4 text-dorasilk-charcoal">
                <p>Start with a small amount - 2-3 drops for short wigs, 4-6 drops for medium length, 6-8 drops for long wigs.</p>
                <p>You can always add more if needed, but it's better to start with less.</p>
                <p>Remember: Elixir Serum is concentrated, so a little goes a long way.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-xl border-0">
            <CardHeader className="bg-gradient-to-r from-dorasilk-ivory to-dorasilk-champagne">
              <CardTitle className="text-2xl font-display text-dorasilk-charcoal">Step 3: Application Method</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4 text-dorasilk-charcoal">
                <p>Pour the serum into your palms and rub your hands together to warm the product.</p>
                <p>Apply to the mid-lengths and ends of your wig first, avoiding the roots.</p>
                <p>Use your fingers to work the serum through the hair, ensuring even distribution.</p>
                <p>For extra shine, apply a small amount to the surface of the hair.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-xl border-0">
            <CardHeader className="bg-gradient-to-r from-dorasilk-ivory to-dorasilk-champagne">
              <CardTitle className="text-2xl font-display text-dorasilk-charcoal">Step 4: Styling</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4 text-dorasilk-charcoal">
                <p>Style your wig as desired - the serum will help reduce frizz and add shine.</p>
                <p>If using heat tools, the serum provides heat protection up to 400°F.</p>
                <p>For curly or wavy wigs, scrunch the hair gently to enhance definition.</p>
                <p>Enjoy your silky, shiny results!</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-xl border-0">
            <CardHeader className="bg-gradient-to-r from-dorasilk-ivory to-dorasilk-champagne">
              <CardTitle className="text-2xl font-display text-dorasilk-charcoal">Step 5: Touch-ups</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4 text-dorasilk-charcoal">
                <p>Throughout the day, you can apply 1-2 drops to refresh shine and reduce frizz.</p>
                <p>Focus on areas that may have become dry or frizzy.</p>
                <p>The serum is lightweight and won't weigh down your wig.</p>
                <p>Perfect for on-the-go touch-ups!</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-12" />

        <Card className="shadow-xl border-0 bg-gradient-to-r from-dorasilk-ivory to-dorasilk-champagne">
          <CardHeader>
            <CardTitle className="text-2xl font-display text-dorasilk-charcoal">Pro Tips</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-6 text-dorasilk-charcoal">
              <div>
                <h4 className="font-semibold mb-2 text-dorasilk-gold">For Best Results:</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Start with less, add more if needed</li>
                  <li>• Apply to mid-lengths and ends first</li>
                  <li>• Warm the product in your hands</li>
                  <li>• Use daily for continuous shine</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-dorasilk-gold">Usage Tips:</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Perfect for daily use</li>
                  <li>• Great for heat protection</li>
                  <li>• Ideal for touch-ups</li>
                  <li>• Works on all wig types</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-12">
          <p className="text-sm text-gray-500">
            Need help? Contact our support team at support@dorasilk.com
          </p>
        </div>
      </div>
    </div>
  )
} 