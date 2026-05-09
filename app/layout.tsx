import './globals.css'
import { Inter } from 'next/font/google'
import UnicornBackground from '@/components/UnicornBackground'
import PageTransition from '@/components/PageTransition'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true
})

export const metadata = {
  metadataBase: new URL('https://tekkcollective.com'),
  title: {
    default: 'Tekk Collective — AI Consultancy in Manchester',
    template: '%s | Tekk Collective'
  },
  description: 'AI consultancy that designs, deploys, and builds intelligent systems for teams across the UK and Africa. Headquartered in Manchester, with engineering teams in Lagos and Abuja.',
  keywords: [
    'AI consultancy Manchester',
    'AI implementation UK',
    'AI consulting Nigeria',
    'AI agency UK',
    'cross-border AI',
    'AI consultancy Lagos',
    'Manchester AI agency',
    'Sentino AI',
    'GAVL'
  ],
  authors: [
    { name: 'Joshua Atanu' },
    { name: 'Oyinkansola Soleye' }
  ],
  creator: 'Tekk Collective',
  publisher: 'Tekk Collective Ltd',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://tekkcollective.com',
    title: 'Tekk Collective — AI Consultancy in Manchester',
    description: 'AI consultancy that designs, deploys, and builds intelligent systems for teams across the UK and Africa.',
    siteName: 'Tekk Collective',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Tekk Collective — AI consultancy in Manchester',
        type: 'image/jpeg'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tekk Collective — AI Consultancy in Manchester',
    description: 'AI consultancy that designs, deploys, and builds intelligent systems for teams across the UK and Africa.',
    images: ['/og-image.jpg']
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#000000'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <UnicornBackground />
        <PageTransition>
          <main id="main-content">
            {children}
          </main>
        </PageTransition>

        {/* Performance monitoring script placeholder */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Performance monitoring
              if (typeof window !== 'undefined') {
                window.addEventListener('load', () => {
                  setTimeout(() => {
                    const perfData = performance.getEntriesByType('navigation')[0];
                    console.log('Page load time:', perfData.loadEventEnd - perfData.loadEventStart);
                  }, 0);
                });
              }
            `
          }}
        />
      </body>
    </html>
  )
}
