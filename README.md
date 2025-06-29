# Dorasilk E-commerce

A premium wig care e-commerce website built with Next.js, TypeScript, Tailwind CSS, and Supabase.

## Features

- 🎨 Beautiful, responsive design with Dorasilk brand colors
- 🛍️ Product catalog with dynamic data from Supabase
- 💳 Stripe payment integration
- 🔄 TanStack Query for efficient data fetching
- 📱 Mobile-responsive design
- 🎯 SEO optimized

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **State Management**: TanStack Query (React Query)
- **Payments**: Stripe
- **UI Components**: shadcn/ui

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm
- Supabase account
- Stripe account

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd dorasilk-ecommerce
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory with the following variables:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here

# Stripe Configuration
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key_here
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key_here
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_here
```

4. Set up the database:
Run the SQL scripts in the `scripts/` directory in your Supabase SQL editor:
- `create-tables.sql` - Creates the products table
- `seed-products.sql` - Inserts sample product data

5. Run the development server:
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Stripe Setup

### 1. Create a Stripe Account
- Sign up at [stripe.com](https://stripe.com)
- Get your API keys from the Stripe Dashboard

### 2. Configure Webhooks
1. Go to Stripe Dashboard > Developers > Webhooks
2. Add endpoint: `https://your-domain.com/api/webhook`
3. Select events: `checkout.session.completed`, `payment_intent.succeeded`, `payment_intent.payment_failed`
4. Copy the webhook signing secret to your `.env.local`

### 3. Test the Integration
- Use Stripe's test card numbers for testing
- Test successful payments: `4242 4242 4242 4242`
- Test failed payments: `4000 0000 0000 0002`

## Project Structure

```
dorasilk-ecommerce/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   ├── checkout/          # Checkout page
│   ├── success/           # Success page
│   └── cancel/            # Cancel page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   └── products-section.tsx
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── scripts/              # Database scripts
└── styles/               # Global styles
```

## Brand Colors

Dorasilk uses a sophisticated color palette:
- **Ivory**: `#FDFBF7`
- **Gold**: `#D4AF37`
- **Rose Gold**: `#B76E79`
- **Champagne Beige**: `#F5E6D3`
- **Charcoal**: `#2C2C2C`

## Fonts

- **Primary**: Montserrat (sans-serif)
- **Display**: Cormorant Garamond (serif)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License. #   n e w d o r a s i l k  
 