// SEO Setup and Analytics Configuration for Tekk Collective
// This script handles schema markup, analytics integration, and SEO monitoring

// Organization Schema Markup
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Tekk Collective",
  "alternateName": "Tekk Collective Technology Consulting",
  "url": "https://tekkcollective.com",
  "logo": "https://tekkcollective.com/logo.png",
  "description": "Leading technology consulting firm specializing in digital transformation, cloud architecture, AI integration, and innovative software solutions for enterprise clients.",
  "foundingDate": "2019",
  "founders": [
    {
      "@type": "Person",
      "name": "Joshua Atanu",
      "jobTitle": "Founder & CEO",
      "url": "https://tekkcollective.com/about"
    }
  ],
  "employees": [
    {
      "@type": "Person",
      "name": "Joshua Atanu",
      "jobTitle": "Founder & CEO"
    },
    {
      "@type": "Person", 
      "name": "Olaoluwa Olagun",
      "jobTitle": "Chief Technology Officer"
    },
    {
      "@type": "Person",
      "name": "Oyinkansola Soleye", 
      "jobTitle": "Lead UI/UX Designer"
    }
  ],
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-XXX-XXX-XXXX",
    "contactType": "Business Development",
    "availableLanguage": ["English"]
  },
  "sameAs": [
    "https://linkedin.com/company/tekk-collective",
    "https://twitter.com/tekkcollective",
    "https://github.com/tekk-collective"
  ],
  "serviceType": [
    "Technology Consulting",
    "Digital Transformation",
    "Cloud Architecture",
    "Software Development",
    "UI/UX Design",
    "AI Consulting"
  ],
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Technology Consulting Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Digital Transformation Consulting",
          "description": "End-to-end digital transformation strategy and implementation"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Cloud Architecture Design",
          "description": "Scalable cloud-native architecture and migration services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI Integration Services", 
          "description": "Artificial intelligence implementation and optimization"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Custom Software Development",
          "description": "Enterprise-grade custom software solutions"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "UI/UX Design Services",
          "description": "User-centered design and experience optimization"
        }
      }
    ]
  }
};

// Website Schema Markup
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Tekk Collective",
  "url": "https://tekkcollective.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://tekkcollective.com/blog?search={search_term_string}",
    "query-input": "required name=search_term_string"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Tekk Collective",
    "logo": {
      "@type": "ImageObject",
      "url": "https://tekkcollective.com/logo.png"
    }
  }
};

// Article Schema Template (for blog posts)
const createArticleSchema = (article) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": article.title,
  "description": article.excerpt,
  "image": article.image || "https://tekkcollective.com/default-article.jpg",
  "datePublished": article.publishDate,
  "dateModified": article.modifiedDate || article.publishDate,
  "author": {
    "@type": "Person",
    "name": article.author,
    "jobTitle": article.authorRole,
    "url": "https://tekkcollective.com/about"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Tekk Collective",
    "logo": {
      "@type": "ImageObject",
      "url": "https://tekkcollective.com/logo.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": `https://tekkcollective.com/blog/${article.slug}`
  },
  "articleSection": article.category,
  "keywords": article.tags,
  "wordCount": article.wordCount || 2000,
  "inLanguage": "en-US"
});

// Breadcrumb Schema
const createBreadcrumbSchema = (breadcrumbs) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": breadcrumbs.map((crumb, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": crumb.name,
    "item": crumb.url
  }))
});

// FAQ Schema (for service pages)
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What services does Tekk Collective offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tekk Collective offers comprehensive technology consulting services including digital transformation, cloud architecture, AI integration, custom software development, and UI/UX design services."
      }
    },
    {
      "@type": "Question", 
      "name": "How long does a typical digital transformation project take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Digital transformation projects typically range from 3-12 months depending on scope and complexity. We work closely with clients to create realistic timelines and milestone-based delivery schedules."
      }
    },
    {
      "@type": "Question",
      "name": "Do you work with startups or only enterprise clients?",
      "acceptedAnswer": {
        "@type": "Answer", 
        "text": "We work with clients ranging from innovative startups to Fortune 500 enterprises. Our solutions are scalable and tailored to meet the specific needs and budget of each organization."
      }
    },
    {
      "@type": "Question",
      "name": "What technologies does Tekk Collective specialize in?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We specialize in cloud technologies (AWS, Azure, GCP), modern web frameworks (React, Next.js), AI/ML platforms, microservices architecture, and enterprise software solutions."
      }
    }
  ]
};

// Local Business Schema (if applicable)
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Tekk Collective",
  "image": "https://tekkcollective.com/office.jpg",
  "@id": "https://tekkcollective.com",
  "url": "https://tekkcollective.com",
  "telephone": "+1-XXX-XXX-XXXX",
  "priceRange": "$$$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Technology Blvd",
    "addressLocality": "Tech City",
    "addressRegion": "CA",
    "postalCode": "90210", 
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 34.0522,
    "longitude": -118.2437
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday", 
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "09:00",
    "closes": "18:00"
  },
  "sameAs": [
    "https://linkedin.com/company/tekk-collective",
    "https://twitter.com/tekkcollective"
  ]
};

// Performance Monitoring
const performanceMonitoring = {
  // Core Web Vitals tracking
  trackCoreWebVitals: () => {
    if (typeof window !== 'undefined' && 'web-vital' in window) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(console.log);
        getFID(console.log);
        getFCP(console.log);
        getLCP(console.log);
        getTTFB(console.log);
      });
    }
  },

  // Page load performance
  trackPageLoad: () => {
    if (typeof window !== 'undefined') {
      window.addEventListener('load', () => {
        const navigation = performance.getEntriesByType('navigation')[0];
        console.log('Page Load Performance:', {
          domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
          loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
          totalTime: navigation.loadEventEnd - navigation.fetchStart
        });
      });
    }
  }
};

// SEO Analytics Integration
const seoAnalytics = {
  // Google Analytics 4 setup
  setupGA4: (measurementId) => {
    if (typeof window !== 'undefined') {
      window.gtag = window.gtag || function() {
        (window.gtag.q = window.gtag.q || []).push(arguments);
      };
      window.gtag('js', new Date());
      window.gtag('config', measurementId, {
        page_title: document.title,
        page_location: window.location.href
      });
    }
  },

  // Search Console integration
  trackSiteSearch: (searchTerm, category, resultsCount) => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'search', {
        search_term: searchTerm,
        search_category: category,
        search_results: resultsCount
      });
    }
  },

  // Content engagement tracking
  trackContentEngagement: (contentType, contentId, action) => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'content_engagement', {
        content_type: contentType,
        content_id: contentId,
        action: action,
        timestamp: new Date().toISOString()
      });
    }
  }
};

// XML Sitemap Generator (conceptual - would need server-side implementation)
const generateSitemap = () => {
  const baseUrl = 'https://tekkcollective.com';
  const pages = [
    { url: '/', priority: 1.0, changefreq: 'weekly' },
    { url: '/about', priority: 0.9, changefreq: 'monthly' },
    { url: '/services', priority: 0.9, changefreq: 'monthly' },
    { url: '/work', priority: 0.8, changefreq: 'weekly' },
    { url: '/blog', priority: 0.8, changefreq: 'daily' },
    { url: '/contact', priority: 0.7, changefreq: 'monthly' }
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <priority>${page.priority}</priority>
    <changefreq>${page.changefreq}</changefreq>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </url>`).join('')}
</urlset>`;
};

// Robots.txt content
const robotsTxt = `
User-agent: *
Allow: /

Sitemap: https://tekkcollective.com/sitemap.xml

# Block AI training crawlers (optional)
User-agent: GPTBot
Disallow: /

User-agent: ChatGPT-User
Disallow: /

User-agent: CCBot
Disallow: /

User-agent: anthropic-ai
Disallow: /

User-agent: Claude-Web
Disallow: /
`;

// Export all schemas and utilities
module.exports = {
  organizationSchema,
  websiteSchema,
  createArticleSchema,
  createBreadcrumbSchema,
  faqSchema,
  localBusinessSchema,
  performanceMonitoring,
  seoAnalytics,
  generateSitemap,
  robotsTxt
};

// Usage examples:
/*
// In blog post pages:
const articleData = {
  title: "The Future of AI in Enterprise Software",
  excerpt: "Exploring how AI is transforming business...",
  author: "Joshua Atanu",
  authorRole: "Founder & CEO",
  publishDate: "2024-03-15",
  category: "AI & Machine Learning",
  tags: ["AI", "Enterprise", "Software"],
  slug: "future-ai-enterprise-software"
};

const schema = createArticleSchema(articleData);

// In Next.js pages:
export const metadata = {
  title: articleData.title,
  description: articleData.excerpt,
  openGraph: {
    title: articleData.title,
    description: articleData.excerpt,
    type: 'article',
    authors: [articleData.author]
  },
  other: {
    'application/ld+json': JSON.stringify(schema)
  }
};
*/ 