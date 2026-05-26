# UI/UX Design System Prompt

## Design Philosophy
Create a **minimalist, futuristic web application** with a sophisticated dark theme that emphasizes clean lines, subtle animations, and glassmorphism effects. The design should feel premium, modern, and celestial with a focus on white space, elegant typography, and restrained use of color accents.

---

## Core Technology Stack

### Framework & Build Tools
- **Next.js 13.4+** (App Router)
- **React 18.2+**
- **TypeScript 5.1+**
- **Tailwind CSS 3.3+**

### Key Dependencies
```json
{
  "next": "^13.4.6",
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "typescript": "^5.1.3",
  "tailwindcss": "^3.3.2",
  "autoprefixer": "^10.4.14",
  "postcss": "^8.4.24"
}
```

### Optional Enhancements
- `@react-google-maps/api` for map integrations
- `react-markdown` for rich text content
- Custom typewriter effects (optional)

---

## Color Palette

### Base Colors
- **Background**: Pure black (`#000000`)
- **Foreground**: White with varying opacity levels
  - Primary text: `rgba(255, 255, 255, 1)`
  - Secondary text: `rgba(255, 255, 255, 0.7)`
  - Tertiary text: `rgba(255, 255, 255, 0.6)`
  - Muted text: `rgba(255, 255, 255, 0.4)`

### Brand Colors
```javascript
brand: {
  primary: '#3B82F6',    // Blue accent for CTAs
  secondary: '#1E40AF',  // Darker blue for hover states
  accent: '#60A5FA',     // Light blue for highlights
  glow: 'rgba(59, 130, 246, 0.3)', // Blue glow effect
}
```

### Border & Divider Colors
- Subtle borders: `rgba(255, 255, 255, 0.1)`
- Medium borders: `rgba(255, 255, 255, 0.2)`
- Accent borders: `rgba(255, 255, 255, 0.3)`

---

## Typography

### Font Stack
```css
/* System Font Stack */
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
             'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;

/* Google Fonts Integration */
import { Inter } from 'next/font/google'
```

### Custom Fonts (Optional)
- **Unbounded** (Bold, Regular, ExtraBold) - For headlines
- **Space Grotesk** (Bold, Regular) - For sub-headings

### Type Scale
- **Hero Heading**: 6rem - 9rem (96px - 144px) `text-6xl md:text-8xl lg:text-9xl`
- **H2**: 2.5rem - 3.75rem (40px - 60px) `text-4xl md:text-6xl`
- **H3**: 1.875rem - 2.25rem (30px - 36px) `text-3xl md:text-4xl`
- **Body Large**: 1.25rem - 1.5rem (20px - 24px) `text-xl md:text-2xl`
- **Body**: 1rem (16px) `text-base`
- **Small**: 0.875rem (14px) `text-sm`

### Typography Principles
- **Font Weight**: Primarily use `font-light` (300) and `font-thin` (100)
- **Letter Spacing**: `tracking-wide` (0.025em) or `tracking-wider` (0.05em)
- **Line Height**: 1.6 for body text, 1.2 for headings

---

## Layout System

### Container Widths
- **Small**: `max-w-5xl` (1024px)
- **Medium**: `max-w-6xl` (1152px)
- **Large**: `max-w-7xl` (1280px)

### Spacing Scale
- **Section Padding**: `py-32` (8rem vertical)
- **Container Padding**: `px-6` (1.5rem horizontal)
- **Component Gaps**: `gap-12` or `gap-px` for grid layouts
- **Micro Spacing**: `space-y-3`, `space-y-4`

### Grid Patterns
```jsx
// Two-column feature grid
<div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/5">

// Three-column testimonial grid
<div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/5">
```

---

## Component Patterns

### Glassmorphism Cards
```css
.glass-card {
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
}

.glass-card:hover {
  background: rgba(0, 0, 0, 0.65);
  border-color: rgba(255, 255, 255, 0.2);
}
```

### Blur Background Utilities
```css
.blur-bg-light {
  backdrop-filter: blur(1px);
  background-color: rgba(0, 0, 0, 0.05);
}

.blur-bg-medium {
  backdrop-filter: blur(2px);
  background-color: rgba(0, 0, 0, 0.1);
}

.blur-bg-heavy {
  backdrop-filter: blur(4px);
  background-color: rgba(0, 0, 0, 0.2);
}
```

### Navbar Pattern
```jsx
// Floating pill navbar with glassmorphism
<nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
  <div className={`flex items-center gap-2 px-4 py-3 rounded-full
    backdrop-blur-xl bg-black/70 border border-white/20`}>
    {/* Logo, navigation items, CTA */}
  </div>
</nav>
```

### Decorative Elements
```jsx
// Divider with dot
<div className="flex items-center justify-center">
  <div className="w-16 h-px bg-white/30"></div>
  <div className="mx-6 w-2 h-2 bg-white/40 rounded-full"></div>
  <div className="w-16 h-px bg-white/30"></div>
</div>

// Corner decorative element
<div className="absolute bottom-4 right-4 w-6 h-6
  border-r border-b border-white/10 group-hover:border-white/30
  transition-colors duration-500"></div>

// Number badge
<span className="text-5xl font-thin text-white/20
  group-hover:text-white/40 transition-colors">01</span>
```

### Background Patterns
```jsx
// Subtle grid overlay
<div className="absolute inset-0 opacity-5">
  <div style={{
    backgroundImage: `
      linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
    `,
    backgroundSize: '80px 80px'
  }}></div>
</div>

// Section dividers
<div className="absolute top-0 left-0 w-full h-px
  bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
```

---

## Animation System

### Keyframe Animations
```javascript
// Tailwind Config
keyframes: {
  'fade-in': {
    '0%': { opacity: '0', transform: 'translateY(20px)' },
    '100%': { opacity: '1', transform: 'translateY(0)' }
  },
  'scale-in': {
    '0%': { opacity: '0', transform: 'scale(0.9) translateY(20px)' },
    '100%': { opacity: '1', transform: 'scale(1) translateY(0)' }
  },
  'slide-up': {
    '0%': { opacity: '0', transform: 'translateY(30px)' },
    '100%': { opacity: '1', transform: 'translateY(0)' }
  },
  'slide-left': {
    '0%': { opacity: '0', transform: 'translateX(-20px)' },
    '100%': { opacity: '1', transform: 'translateX(0)' }
  },
  'float': {
    '0%, 100%': { transform: 'translateY(0)' },
    '50%': { transform: 'translateY(-10px)' }
  },
  'pulse-glow': {
    '0%': { boxShadow: '0 0 0 0 rgba(255,255,255,0.4)' },
    '70%': { boxShadow: '0 0 0 10px rgba(255,255,255,0)' },
    '100%': { boxShadow: '0 0 0 0 rgba(255,255,255,0)' }
  }
}
```

### Animation Classes
```jsx
// Usage examples
<div className="animate-scale-in">
<div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
<div className="animate-float">
```

### Transition Patterns
```css
/* Smooth, cubic-bezier transitions */
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

/* Duration scale */
duration-200  /* 200ms - micro interactions */
duration-300  /* 300ms - standard */
duration-500  /* 500ms - emphasis */
duration-700  /* 700ms - dramatic reveals */
```

### Page Transitions
```jsx
// PageTransition component with sliding panels
<div className="fixed inset-0 z-50">
  <div className="absolute inset-0 bg-black
    transform transition-transform duration-700">
    {/* Transition content */}
  </div>
</div>
```

---

## Interactive States

### Hover Effects
```css
/* Minimal hover - cards */
.minimal-hover:hover {
  border-color: rgba(255, 255, 255, 0.3);
  background-color: rgba(255, 255, 255, 0.02);
}

/* Text hover */
text-white/70 hover:text-white

/* Scale hover */
group-hover:scale-105 transition-transform duration-300

/* Glow hover */
hover:shadow-brand-glow
```

### Focus States
```css
.focus-ring:focus {
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5);
  outline: none;
}

/* Default focus */
*:focus-visible {
  outline: 2px solid #3B82F6;
  outline-offset: 2px;
}
```

### Active States (Mobile)
```jsx
// Use 'active:' instead of 'hover:' for mobile
<a className="text-white/60 active:text-white">
```

---

## Button Styles

### Primary CTA
```jsx
<a href="/contact" className="px-12 py-4
  border border-brand-primary/50 bg-brand-gradient
  text-white font-light
  hover:bg-brand-secondary hover:border-brand-secondary
  transition-all duration-500 shadow-brand-glow hover:shadow-lg">
  Start Your Journey
</a>
```

### Secondary CTA
```jsx
<a href="/services" className="group px-12 py-4
  text-white/70 font-light
  hover:text-brand-accent transition-colors duration-500">
  <span>Explore Services</span>
  <div className="w-0 group-hover:w-full h-px bg-brand-accent
    transition-all duration-500 mt-2"></div>
</a>
```

### Pill Button (Navbar CTA)
```jsx
<a href="/contact" className="px-5 py-1.5 rounded-full
  bg-white text-black font-medium
  hover:bg-white/90 transition-colors duration-200">
  Get Started
</a>
```

---

## Accessibility

### Required Attributes
```jsx
// Navigation
<nav role="navigation" aria-label="Main navigation">

// Current page indicator
<a aria-current={pathname === item.href ? 'page' : undefined}>

// Screen reader only content
<span className="sr-only">Mobile Navigation Menu</span>

// Skip to main content
<a href="#main-content" className="skip-link">
  Skip to main content
</a>
<main id="main-content">
```

### Keyboard Navigation
```javascript
// Escape key to close mobile menu
useEffect(() => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };
  // ...
}, [isMobileMenuOpen]);
```

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## Responsive Design

### Breakpoints (Tailwind defaults)
- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px
- **2xl**: 1536px

### Mobile-First Patterns
```jsx
// Hide on mobile, show on desktop
<div className="hidden md:flex">

// Full width on mobile, 2-col on desktop
<div className="grid grid-cols-1 lg:grid-cols-2">

// Responsive typography
<h1 className="text-6xl md:text-8xl lg:text-9xl">

// Responsive spacing
<section className="py-16 md:py-32">
```

### Mobile Menu
```jsx
// Fullscreen overlay with centered navigation
<div className="fixed inset-0 bg-black/95 backdrop-blur-md">
  <div className="flex flex-col items-center justify-center h-full gap-6">
    {/* Menu items */}
  </div>
</div>
```

---

## Performance Optimizations

### Image Optimization
```jsx
import Image from 'next/image'

<Image
  src="/logo.svg"
  alt="Logo"
  width={120}
  height={24}
  priority  // For above-the-fold images
/>
```

### Font Loading
```javascript
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true
})
```

### Lazy Loading
```jsx
// Disable expensive animations for performance
.animate-text-shimmer {
  /* Disabled for performance */
}
```

### Preconnect Resources
```jsx
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
```

---

## SEO Best Practices

### Metadata Template
```javascript
export const metadata = {
  metadataBase: new URL('https://yourdomain.com'),
  title: {
    default: 'Your App - Tagline',
    template: '%s | Your App'
  },
  description: 'Your compelling description',
  keywords: ['keyword1', 'keyword2'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourdomain.com',
    title: 'Your App',
    description: 'Description',
    siteName: 'Your App',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your App',
    images: ['/og-image.jpg']
  }
}
```

### Structured Data
```jsx
<script type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Your Organization",
    "url": "https://yourdomain.com"
  })}
</script>
```

---

## Scroll Enhancements

### Custom Scrollbar
```css
::-webkit-scrollbar {
  width: 2px;
}

::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 1px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.4);
}
```

### Smooth Scroll
```css
html {
  scroll-behavior: smooth;
}
```

### Scroll Indicator
```jsx
<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
  <div className="flex flex-col items-center space-y-2">
    <div className="w-px h-16 bg-gradient-to-b from-white/50 to-transparent"></div>
    <div className="w-3 h-3 border border-white/50 rounded-full"></div>
    <span className="text-white/40 text-xs tracking-wider uppercase">Explore</span>
  </div>
</div>
```

---

## File Structure

```
project/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles & animations
│   └── [route]/
│       └── page.tsx        # Individual pages
├── components/
│   ├── Navbar.tsx          # Floating pill navigation
│   ├── Footer.tsx          # Site footer
│   ├── PageTransition.tsx  # Route transition wrapper
│   └── [Component].tsx     # Reusable components
├── public/
│   ├── fonts/              # Custom fonts
│   ├── images/             # Static images
│   └── manifest.json       # PWA manifest
├── tailwind.config.js      # Tailwind configuration
└── package.json
```

---

## Quick Start Template

### 1. Install Dependencies
```bash
npm install next@13.4.6 react@18.2.0 react-dom@18.2.0 \
  typescript@5.1.3 tailwindcss@3.3.2 \
  autoprefixer@10.4.14 postcss@8.4.24
```

### 2. Tailwind Config
```javascript
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#3B82F6',
          secondary: '#1E40AF',
          accent: '#60A5FA',
          glow: 'rgba(59, 130, 246, 0.3)',
        },
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        // Add other keyframes...
      },
      animation: {
        'fade-in': 'fade-in 1s ease-out',
        // Add other animations...
      },
    },
  },
  plugins: [],
}
```

### 3. Global CSS Foundation
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --foreground-rgb: 255, 255, 255;
  --background-start-rgb: 0, 0, 0;
}

body {
  color: rgb(var(--foreground-rgb));
  background: rgb(var(--background-start-rgb));
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  font-weight: 300;
  line-height: 1.6;
}

html {
  scroll-behavior: smooth;
}
```

---

## Design Checklist

When implementing this design system, ensure:

- [ ] All text uses light font weights (300 or lighter)
- [ ] Generous use of white space (py-32 for sections)
- [ ] Glassmorphism effects on cards and overlays
- [ ] Smooth transitions (300ms-500ms) on all interactive elements
- [ ] Subtle borders with low opacity (0.1-0.2)
- [ ] Proper accessibility attributes (aria-labels, roles)
- [ ] Mobile-first responsive design
- [ ] Keyboard navigation support
- [ ] Reduced motion preferences respected
- [ ] Focus states clearly visible
- [ ] Semantic HTML structure
- [ ] Optimized images with Next.js Image component
- [ ] Proper SEO metadata
- [ ] Custom scrollbar styling
- [ ] Starry/geometric background elements
- [ ] Decorative dividers and corner elements

---

## Color Usage Guidelines

1. **Background layers**: Pure black with overlay elements
2. **Text hierarchy**: White at varying opacities (100%, 70%, 60%, 40%)
3. **Brand accent**: Use sparingly for CTAs and highlights only
4. **Borders**: Almost always use white at 10-30% opacity
5. **Hover states**: Increase opacity or add subtle glow effects
6. **Cards**: Dark background (black/55%) with backdrop blur

---

## Animation Principles

1. **Subtle by default**: Animations should enhance, not distract
2. **Performance-first**: Disable expensive animations when needed
3. **Staggered reveals**: Use animation delays for sequential elements
4. **Respect preferences**: Always include reduced motion support
5. **Purposeful motion**: Each animation should have clear intent
6. **Consistent timing**: Stick to 200ms, 300ms, 500ms, 700ms durations

---

This design system creates a cohesive, premium experience with minimalist aesthetics and professional polish. Use this as a foundation and adapt the brand colors, fonts, and specific content to match your project's needs.
