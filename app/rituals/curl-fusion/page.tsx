import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

export const metadata: Metadata = {
  title: 'Curl Fusion - Instructions',
  description: 'Exclusive instructions for Curl Fusion product owners',
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

export default function CurlFusionInstructions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dorasilk-ivory to-white py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 bg-dorasilk-gold text-white">
            Exclusive Access
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-dorasilk-charcoal mb-4 font-display">
            Curl Fusion Treatment™ Instructions
          </h1>
          <p className="text-xl text-dorasilk-charcoal max-w-2xl mx-auto">
            Your complete guide to bringing the bounce back to your curly wigs
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
                Curl Fusion Treatment Kit
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-dorasilk-gold rounded-full mr-3"></span>
                Wide-tooth comb or detangling brush
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-dorasilk-gold rounded-full mr-3"></span>
                Plastic cap or shower cap
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-dorasilk-gold rounded-full mr-3"></span>
                Microfiber towel
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-dorasilk-gold rounded-full mr-3"></span>
                Hair clips for sectioning
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
                <p>Start with a clean wig. If needed, wash with Prep + Purify Shampoo™ and allow to air dry completely.</p>
                <p>Gently detangle your wig using a wide-tooth comb, working from the ends upward to prevent breakage.</p>
                <p>Spritz lightly with water to dampen the hair - not soaking wet, just slightly moist.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-xl border-0">
            <CardHeader className="bg-gradient-to-r from-dorasilk-ivory to-dorasilk-champagne">
              <CardTitle className="text-2xl font-display text-dorasilk-charcoal">Step 2: Application</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4 text-dorasilk-charcoal">
                <p>Section your wig into 6-8 manageable sections using hair clips.</p>
                <p>Apply Curl Fusion treatment generously to each section, focusing on the mid-lengths and ends.</p>
                <p>Use your fingers to work the treatment through the hair, ensuring every strand is coated.</p>
                <p>For extra definition, apply a small amount to the roots as well.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-xl border-0">
            <CardHeader className="bg-gradient-to-r from-dorasilk-ivory to-dorasilk-champagne">
              <CardTitle className="text-2xl font-display text-dorasilk-charcoal">Step 3: Processing</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4 text-dorasilk-charcoal">
                <p>Cover your wig with a plastic cap to create a warm, humid environment.</p>
                <p>Allow the treatment to process for 25-35 minutes for optimal curl definition.</p>
                <p>For deeper penetration, you can use a hooded dryer on low heat for 20 minutes.</p>
                <p>Do not exceed 35 minutes processing time.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-xl border-0">
            <CardHeader className="bg-gradient-to-r from-dorasilk-ivory to-dorasilk-champagne">
              <CardTitle className="text-2xl font-display text-dorasilk-charcoal">Step 4: Rinsing</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4 text-dorasilk-charcoal">
                <p>Rinse thoroughly with cool water until the water runs clear.</p>
                <p>Gently squeeze out excess water - never wring or twist curly hair.</p>
                <p>Use a microfiber towel to blot dry, being careful not to rough up the cuticle.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-xl border-0">
            <CardHeader className="bg-gradient-to-r from-dorasilk-ivory to-dorasilk-champagne">
              <CardTitle className="text-2xl font-display text-dorasilk-charcoal">Step 5: Styling</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4 text-dorasilk-charcoal">
                <p>Allow your wig to air dry completely for best curl definition.</p>
                <p>If using a diffuser, use low heat and low speed settings.</p>
                <p>Apply Elixir Serum by Dorasilk™ sparingly for extra shine and frizz control.</p>
                <p>Style as desired and enjoy your bouncy, defined curls!</p>
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
                  <li>• Use on damp, not soaking wet hair</li>
                  <li>• Don't skip the processing time</li>
                  <li>• Rinse with cool water to seal cuticles</li>
                  <li>• Air dry for maximum curl definition</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-dorasilk-gold">Maintenance:</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Reapply every 4-6 weeks</li>
                  <li>• Use Prime + Protect Mist™ daily</li>
                  <li>• Avoid brushing when dry</li>
                  <li>• Sleep with a satin bonnet</li>
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