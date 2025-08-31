"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle keyboard navigation for mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/work', label: 'Work' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-4 md:py-6 flex flex-row items-center text-white transition-all duration-500 ${
        isScrolled 
          ? 'backdrop-blur-md bg-black/80 border-b border-white/20' 
          : 'backdrop-blur-sm bg-black/20 border-b border-white/10'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="flex items-center">
        <a 
          href="/" 
          className="group focus-ring"
          aria-label="Tekk Collective - Home"
        >
          <Image
            src="/tekk-collective-logo.svg"
            alt="Tekk Collective"
            width="163"
            height="33"
            className="h-6 md:h-8 w-auto transition-transform duration-300 group-hover:scale-105"
          />
        </a>
      </div>

      {/* Desktop Navigation */}
      <div className="ml-auto hidden md:flex flex-row items-center space-x-8 lg:space-x-12 font-light text-sm tracking-wider">
        {navItems.map((item) => (
          <a 
            key={item.href}
            href={item.href} 
            className={`relative group transition-colors duration-300 focus-ring ${
              pathname === item.href 
                ? 'text-white' 
                : 'text-white/70 hover:text-white'
            }`}
            aria-current={pathname === item.href ? 'page' : undefined}
          >
            <span>{item.label}</span>
            <div className={`absolute bottom-0 left-0 h-px transition-all duration-300 ${
              pathname === item.href 
                ? 'w-full bg-brand-primary' 
                : 'w-0 group-hover:w-full bg-white'
            }`}></div>
          </a>
        ))}
        
        {/* CTA Button */}
        <a 
          href="/contact" 
          className="ml-4 px-6 py-2 border border-brand-primary/50 bg-brand-gradient text-white font-light hover:bg-brand-secondary hover:border-brand-secondary transition-all duration-300 text-sm focus-ring shadow-brand-glow hover:shadow-lg"
          aria-label="Get started with Tekk Collective"
        >
          Get Started
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="ml-auto md:hidden flex flex-col space-y-1 p-2 focus-ring"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label={isMobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
        aria-expanded={isMobileMenuOpen}
        aria-controls="mobile-menu"
      >
        <span className={`block w-5 h-px bg-white transition-transform duration-300 ${
          isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''
        }`}></span>
        <span className={`block w-5 h-px bg-white transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-0' : ''
        }`}></span>
        <span className={`block w-5 h-px bg-white transition-transform duration-300 ${
          isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''
        }`}></span>
      </button>

      {/* Mobile Menu Overlay */}
      <div 
        id="mobile-menu"
        className={`fixed inset-0 bg-black/95 backdrop-blur-md z-40 md:hidden transition-all duration-500 ${
          isMobileMenuOpen 
            ? 'opacity-100 visible' 
            : 'opacity-0 invisible'
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-title"
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <h2 id="mobile-menu-title" className="sr-only">Mobile Navigation Menu</h2>
          {navItems.map((item, index) => (
            <a 
              key={item.href}
              href={item.href}
              className={`text-2xl font-light tracking-wider transition-all duration-300 hover:text-white relative group focus-ring ${
                pathname === item.href ? 'text-white' : 'text-white/70'
              }`}
              style={{ 
                animationDelay: `${index * 0.1}s`,
                animation: isMobileMenuOpen ? 'slide-up 0.6s ease-out forwards' : ''
              }}
              onClick={() => setIsMobileMenuOpen(false)}
              aria-current={pathname === item.href ? 'page' : undefined}
            >
              <span>{item.label}</span>
              <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-px transition-all duration-300 ${
                pathname === item.href 
                  ? 'w-full bg-brand-primary' 
                  : 'w-0 group-hover:w-full bg-white'
              }`}></div>
            </a>
          ))}
          
          <a 
            href="/contact"
            className="mt-8 px-8 py-3 border border-brand-primary/50 bg-brand-gradient text-white font-light hover:bg-brand-secondary hover:border-brand-secondary transition-all duration-300 focus-ring shadow-brand-glow"
            onClick={() => setIsMobileMenuOpen(false)}
            style={{ 
              animationDelay: '0.4s',
              animation: isMobileMenuOpen ? 'slide-up 0.6s ease-out forwards' : ''
            }}
            aria-label="Get started with Tekk Collective"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}
