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
    { href: '/project', label: 'Project' },
    { href: '/work', label: 'Work' },
    { href: '/blog', label: 'Blog' },
    { href: '/careers', label: 'Careers' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 text-white transition-all duration-500"
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Centered Pill Container */}
      <div className={`flex flex-row items-center gap-2 px-4 py-3 rounded-full transition-all duration-500 ${isScrolled
        ? 'backdrop-blur-xl bg-black/70 border border-white/20 shadow-lg shadow-black/20'
        : 'backdrop-blur-md bg-black/40 border border-white/10'
        }`}>
        {/* Logo */}
        <a
          href="/"
          className="group focus-ring px-2"
          aria-label="Tekk Collective - Home"
        >
          <Image
            src="/tekk-collective-logo.svg"
            alt="Tekk Collective"
            width="120"
            height="24"
            className="h-5 w-auto transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        {/* Divider */}
        <div className="hidden md:block w-px h-5 bg-white/20"></div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-row items-center gap-1 font-light text-sm tracking-wider">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`relative px-3 py-1.5 rounded-full transition-all duration-300 focus-ring ${pathname === item.href
                ? 'text-white bg-white/10'
                : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              aria-current={pathname === item.href ? 'page' : undefined}
            >
              <span>{item.label}</span>
            </a>
          ))}

          {/* Divider */}
          <div className="w-px h-5 bg-white/20 mx-1"></div>

          {/* CTA Button */}
          <a
            href="/contact"
            className="px-5 py-1.5 rounded-full bg-white text-black font-medium hover:bg-white/90 transition-colors duration-200 text-sm whitespace-nowrap"
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
          <span className={`block w-5 h-px bg-white transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''
            }`}></span>
          <span className={`block w-5 h-px bg-white transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''
            }`}></span>
          <span className={`block w-5 h-px bg-white transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''
            }`}></span>
        </button>

        {/* Mobile Menu Overlay */}
        <div
          id="mobile-menu"
          className={`fixed inset-0 bg-black/95 backdrop-blur-md z-40 md:hidden transition-opacity duration-200 ${isMobileMenuOpen
            ? 'opacity-100 visible'
            : 'opacity-0 invisible pointer-events-none'
            }`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-menu-title"
        >
          <div className="flex flex-col items-center justify-center h-full gap-6">
            <h2 id="mobile-menu-title" className="sr-only">Mobile Navigation Menu</h2>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-xl font-light tracking-wide transition-colors duration-200 ${pathname === item.href ? 'text-white' : 'text-white/60 active:text-white'
                  }`}
                onClick={() => setIsMobileMenuOpen(false)}
                aria-current={pathname === item.href ? 'page' : undefined}
              >
                {item.label}
              </a>
            ))}

            <a
              href="/contact"
              className="mt-4 px-8 py-3 rounded-full bg-white text-black font-medium active:bg-white/90 transition-colors duration-200 whitespace-nowrap"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Get started with Tekk Collective"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
