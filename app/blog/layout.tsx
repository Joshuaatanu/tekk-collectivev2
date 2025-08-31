import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Insights & Thought Leadership | Tekk Collective Blog',
  description: 'Expert insights on technology consulting, digital transformation, AI, cloud architecture, and UX design from industry leaders at Tekk Collective.',
  keywords: [
    'technology consulting blog',
    'digital transformation insights',
    'AI enterprise software',
    'cloud architecture articles',
    'UX design trends',
    'tech industry analysis',
    'software development best practices',
    'business technology strategy'
  ],
  authors: [
    { name: 'Joshua Atanu', url: 'https://tekkcollective.com/about' },
    { name: 'Olaoluwa Olagun', url: 'https://tekkcollective.com/about' },
    { name: 'Oyinkansola Soleye', url: 'https://tekkcollective.com/about' }
  ],
  openGraph: {
    title: 'Technology Insights & Industry Analysis | Tekk Collective',
    description: 'Stay ahead with expert insights on emerging technologies, digital transformation strategies, and innovative business solutions.',
    type: 'website',
    url: 'https://tekkcollective.com/blog',
    siteName: 'Tekk Collective',
    images: [
      {
        url: '/og-blog.jpg',
        width: 1200,
        height: 630,
        alt: 'Tekk Collective Blog - Technology Insights'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Technology Insights | Tekk Collective Blog',
    description: 'Expert analysis on AI, cloud computing, digital transformation, and UX design trends.',
    images: ['/twitter-blog.jpg']
  },
  alternates: {
    canonical: 'https://tekkcollective.com/blog',
    types: {
      'application/rss+xml': 'https://tekkcollective.com/blog/rss.xml'
    }
  },
  category: 'Technology',
  classification: 'Business Technology Consulting Blog'
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  )
} 