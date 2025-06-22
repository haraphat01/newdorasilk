import type { Metadata } from 'next'
import './globals.css'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'Dorasilk - Premium Wig Care Products',
  description: 'Revive the Silky Magic. Restore the Luxury. Reveal the True You. Premium wig care treatments for salon-quality results at home.',
  keywords: 'wig care, hair treatments, salon quality, Dorasilk, premium hair products',
  authors: [{ name: 'Dorasilk' }],
  creator: 'Dorasilk',
  publisher: 'Dorasilk',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://dorasilk.com'),
  openGraph: {
    title: 'Dorasilk - Premium Wig Care Products',
    description: 'Revive the Silky Magic. Restore the Luxury. Reveal the True You.',
    url: 'https://dorasilk.com',
    siteName: 'Dorasilk',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dorasilk - Premium Wig Care Products',
    description: 'Revive the Silky Magic. Restore the Luxury. Reveal the True You.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
