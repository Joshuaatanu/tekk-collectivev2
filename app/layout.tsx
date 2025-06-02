import './globals.css'
import { Inter } from 'next/font/google'
import StarryBackground from '@/components/StarryBackground'
import PageTransition from '@/components/PageTransition'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true
})

export const metadata = {
  title: {
    default: 'Tekk Collective - Technology Consulting Excellence',
    template: '%s | Tekk Collective'
  },
  description: 'Transforming businesses through innovative technology solutions and strategic consulting. Expert team delivering AI, cloud, and digital transformation services.',
  keywords: ['technology consulting', 'digital transformation', 'AI solutions', 'cloud architecture', 'software development'],
  authors: [{ name: 'Tekk Collective' }],
  creator: 'Tekk Collective',
  publisher: 'Tekk Collective',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://tekkcollective.com',
    title: 'Tekk Collective - Technology Consulting Excellence',
    description: 'Transforming businesses through innovative technology solutions and strategic consulting.',
    siteName: 'Tekk Collective',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Tekk Collective - Technology Consulting'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tekk Collective - Technology Consulting Excellence',
    description: 'Transforming businesses through innovative technology solutions and strategic consulting.',
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
        <StarryBackground />
        <PageTransition>
          {children}
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
