/** @type {import('tailwindcss').Config} */
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
          primary: '#3B82F6', // Blue accent for CTAs
          secondary: '#1E40AF', // Darker blue for hover states
          accent: '#60A5FA', // Light blue for highlights
          glow: 'rgba(59, 130, 246, 0.3)', // Blue glow effect
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'brand-gradient': 'linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-33.333%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-33.333%)' },
          '100%': { transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-glow': {
          '0%': { boxShadow: '0 0 0 0 rgba(255,255,255,0.4)' },
          '70%': { boxShadow: '0 0 0 10px rgba(255,255,255,0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(255,255,255,0)' },
        },
        'slide-in': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        marquee: 'marquee 15s linear infinite',
        'marquee-reverse': 'marquee-reverse 15s linear infinite',
        float: 'float 3s ease-in-out infinite',
        'fade-in': 'fade-in 1s ease-out',
        'pulse-glow': 'pulse-glow 2s infinite',
        'slide-in': 'slide-in 0.5s ease-out',
      },
    },
  },
  plugins: [],
}
