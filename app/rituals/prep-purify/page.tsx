import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

export const metadata: Metadata = {
  title: 'Prep + Purify - Instructions',
  description: 'Exclusive instructions for Prep + Purify product owners',
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

export default function PrepPurifyInstructions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dorasilk-ivory to-white py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 bg-dorasilk-gold text-white">
            Exclusive Access
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-dorasilk-charcoal mb-4 font-display">
            Prep + Purify Shampoo™ Instructions
          </h1>
          <p className="text-xl text-dorasilk-charcoal max-w-2xl mx-auto">
            Your complete guide to resetting, refreshing, and reawakening your wigs
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
                Prep + Purify Shampoo™
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-dorasilk-gold rounded-full mr-3"></span>
                Wide-tooth comb
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-dorasilk-gold rounded-full mr-3"></span>
                Lukewarm water
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-dorasilk-gold rounded-full mr-3"></span>
                Clean towel
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-dorasilk-gold rounded-full mr-3"></span>
                Wig stand (optional)
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
                <p>Remove your wig and gently detangle it using a wide-tooth comb, starting from the ends.</p>
                <p>Fill a basin or sink with lukewarm water (not hot, as this can damage the fibers).</p>
                <p>Ensure you have a clean, well-lit workspace for the washing process.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-xl border-0">
            <CardHeader className="bg-gradient-to-r from-dorasilk-ivory to-dorasilk-champagne">
              <CardTitle className="text-2xl font-display text-dorasilk-charcoal">Step 2: Wetting</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4 text-dorasilk-charcoal">
                <p>Submerge your wig completely in the lukewarm water.</p>
                <p>Gently swish the wig to ensure all fibers are thoroughly wet.</p>
                <p>Allow the wig to soak for 2-3 minutes to loosen any product buildup.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-xl border-0">
            <CardHeader className="bg-gradient-to-r from-dorasilk-ivory to-dorasilk-champagne">
              <CardTitle className="text-2xl font-display text-dorasilk-charcoal">Step 3: Application</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4 text-dorasilk-charcoal">
                <p>Apply a small amount of Prep + Purify Shampoo™ to your hands and work into a lather.</p>
                <p>Gently massage the shampoo into the wig, focusing on the areas with the most product buildup.</p>
                <p>Use your fingertips to work the shampoo through the hair, avoiding harsh scrubbing.</p>
                <p>Pay special attention to the roots and areas where styling products accumulate.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-xl border-0">
            <CardHeader className="bg-gradient-to-r from-dorasilk-ivory to-dorasilk-champagne">
              <CardTitle className="text-2xl font-display text-dorasilk-charcoal">Step 4: Rinsing</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4 text-dorasilk-charcoal">
                <p>Rinse the wig thoroughly with lukewarm water until all shampoo is removed.</p>
                <p>Continue rinsing until the water runs completely clear.</p>
                <p>Gently squeeze out excess water - never wring or twist the hair.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-xl border-0">
            <CardHeader className="bg-gradient-to-r from-dorasilk-ivory to-dorasilk-champagne">
              <CardTitle className="text-2xl font-display text-dorasilk-charcoal">Step 5: Drying</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4 text-dorasilk-charcoal">
                <p>Pat the wig dry with a clean, absorbent towel.</p>
                <p>Place the wig on a wig stand or mannequin head to air dry completely.</p>
                <p>Allow 24-48 hours for complete drying before styling or storing.</p>
                <p>Your wig is now ready for the next treatment or styling session!</p>
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
                  <li>• Use lukewarm water, never hot</li>
                  <li>• Don't scrub or wring the hair</li>
                  <li>• Rinse thoroughly to remove all residue</li>
                  <li>• Air dry completely before styling</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-dorasilk-gold">Frequency:</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Wash every 2-3 weeks</li>
                  <li>• More frequently if heavily styled</li>
                  <li>• Before applying treatments</li>
                  <li>• When switching between styles</li>
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