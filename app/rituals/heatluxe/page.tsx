import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

export const metadata: Metadata = {
  title: 'Heatluxe - Instructions',
  description: 'Exclusive instructions for Heatluxe product owners',
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

export default function HeatluxeInstructions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dorasilk-ivory to-white py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 bg-dorasilk-gold text-white">
            Exclusive Access
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-dorasilk-charcoal mb-4 font-display">
            Heatluxe™ Instructions
          </h1>
          <p className="text-xl text-dorasilk-charcoal max-w-2xl mx-auto">
            Your complete guide to turning up the heat the right way
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
                Heatluxe Treatment Kit
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-dorasilk-gold rounded-full mr-3"></span>
                Thermal Silk Cap™
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-dorasilk-gold rounded-full mr-3"></span>
                Hooded dryer or heat source
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-dorasilk-gold rounded-full mr-3"></span>
                Wide-tooth comb
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-dorasilk-gold rounded-full mr-3"></span>
                Timer
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
                <p>Start with a clean, dry wig that has been washed with Prep + Purify Shampoo™.</p>
                <p>Gently detangle your wig using a wide-tooth comb, starting from the ends.</p>
                <p>Ensure your wig is completely free of tangles and ready for treatment.</p>
                <p>Set up your heat source (hooded dryer, steamer, or heat cap) according to manufacturer instructions.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-xl border-0">
            <CardHeader className="bg-gradient-to-r from-dorasilk-ivory to-dorasilk-champagne">
              <CardTitle className="text-2xl font-display text-dorasilk-charcoal">Step 2: Application</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4 text-dorasilk-charcoal">
                <p>Section your wig into 4-6 manageable sections using hair clips.</p>
                <p>Apply Heatluxe treatment generously to each section, focusing on the mid-lengths and ends.</p>
                <p>Use your fingers to work the treatment through the hair, ensuring even distribution.</p>
                <p>For extra heat protection, apply a small amount to the roots as well.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-xl border-0">
            <CardHeader className="bg-gradient-to-r from-dorasilk-ivory to-dorasilk-champagne">
              <CardTitle className="text-2xl font-display text-dorasilk-charcoal">Step 3: Heat Application</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4 text-dorasilk-charcoal">
                <p>Cover your wig with the Thermal Silk Cap™ to ensure even heat distribution.</p>
                <p>Apply heat using your chosen method:</p>
                <ul className="ml-6 space-y-2 text-sm">
                  <li>• Hooded dryer: Low heat for 20-25 minutes</li>
                  <li>• Heat cap: Medium heat for 15-20 minutes</li>
                  <li>• Steamer: Medium steam for 10-15 minutes</li>
                </ul>
                <p>Set a timer to ensure you don't exceed the recommended processing time.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-xl border-0">
            <CardHeader className="bg-gradient-to-r from-dorasilk-ivory to-dorasilk-champagne">
              <CardTitle className="text-2xl font-display text-dorasilk-charcoal">Step 4: Cooling</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4 text-dorasilk-charcoal">
                <p>After heat processing, allow your wig to cool completely with the cap still on.</p>
                <p>This cooling period helps lock in the treatment and ensures optimal results.</p>
                <p>Cooling time should be at least 10-15 minutes.</p>
                <p>Do not remove the cap during this time.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-xl border-0">
            <CardHeader className="bg-gradient-to-r from-dorasilk-ivory to-dorasilk-champagne">
              <CardTitle className="text-2xl font-display text-dorasilk-charcoal">Step 5: Rinsing & Styling</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4 text-dorasilk-charcoal">
                <p>Remove the Thermal Silk Cap™ and rinse thoroughly with lukewarm water.</p>
                <p>Continue rinsing until the water runs clear.</p>
                <p>Gently squeeze out excess water and pat dry with a clean towel.</p>
                <p>Style as desired and enjoy your heat-enhanced results!</p>
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
                  <li>• Always use the Thermal Silk Cap™</li>
                  <li>• Don't exceed recommended heat times</li>
                  <li>• Allow proper cooling time</li>
                  <li>• Rinse thoroughly after treatment</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-dorasilk-gold">Safety Tips:</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Test heat source before use</li>
                  <li>• Never leave heat unattended</li>
                  <li>• Use heat protection products</li>
                  <li>• Follow manufacturer guidelines</li>
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