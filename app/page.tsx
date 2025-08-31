/* eslint-disable @next/next/no-img-element */
"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <div className="bg-black min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Subtle Background Grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}></div>
        </div>

        {/* Minimal Abstract Elements */}
        <div className="absolute inset-0">
          <div className="absolute bottom-1/3 right-1/4 w-12 h-12 border border-white/5 rounded-full"></div>
          <div className="absolute top-1/2 right-1/3 w-20 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </div>

        <Navbar />
        
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <div className="mb-12 animate-scale-in">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-thin text-white tracking-wider mb-8">
              <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent animate-text-shimmer bg-[length:200%_100%]">
                <Typewriter
                  words={['TEKK COLLECTIVE']}
                  loop={1}
                  cursor
                  cursorStyle='|'
                  typeSpeed={120}
                  deleteSpeed={80}
                />
              </span>
            </h1>
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-px bg-white/30"></div>
              <div className="mx-6 w-2 h-2 bg-white/40 rounded-full"></div>
              <div className="w-16 h-px bg-white/30"></div>
            </div>
            <p className="text-xl md:text-2xl text-white/70 font-light tracking-wide max-w-3xl mx-auto">
              Transforming businesses through innovative technology solutions and strategic consulting
            </p>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center space-y-2">
            <div className="w-px h-16 bg-gradient-to-b from-white/50 to-transparent"></div>
            <div className="w-3 h-3 border border-white/50 rounded-full"></div>
            <span className="text-white/40 text-xs tracking-wider uppercase">Explore</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 px-6 relative">
        {/* Subtle Section Dividers */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/5">
            <div className="bg-black p-16 hover:bg-white/2 transition-all duration-300 group border-r border-b border-white/5 hover:border-white/20">
              <div className="flex justify-between items-start mb-12">
                <span className="text-5xl font-thin text-white/20 group-hover:text-white/40 transition-colors duration-300">
                  01
                </span>
                <div className="w-8 h-px bg-white/20 group-hover:w-20 transition-all duration-300"></div>
              </div>
              
              <h3 className="text-3xl md:text-4xl text-white font-thin mb-6 group-hover:text-white/90 transition-colors duration-500">
                Digital Transformation
              </h3>
              
              <p className="text-white/60 font-light leading-relaxed mb-12 text-lg group-hover:text-white/70 transition-colors duration-500">
                We redefine technology consulting with a futuristic approach, propelling your business light years ahead of the competition through innovative solutions and strategic insight.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-white/30 rounded-full mr-4"></div>
                  <span className="text-white/50 font-light">Strategic Technology Planning</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-white/30 rounded-full mr-4"></div>
                  <span className="text-white/50 font-light">Process Innovation</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-white/30 rounded-full mr-4"></div>
                  <span className="text-white/50 font-light">Digital Architecture</span>
                </div>
              </div>
              
              {/* Subtle overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              
              {/* Subtle corner element */}
              <div className="absolute bottom-4 right-4 w-6 h-6 border-r border-b border-white/10 group-hover:border-white/30 transition-colors duration-500"></div>
            </div>

            <div className="bg-black p-16 hover:bg-white/2 transition-all duration-300 group border-r border-b border-white/5 hover:border-white/20">
              <div className="flex justify-between items-start mb-12">
                <span className="text-5xl font-thin text-white/20 group-hover:text-white/40 transition-colors duration-300">
                  02
                </span>
                <div className="w-8 h-px bg-white/20 group-hover:w-20 transition-all duration-300"></div>
              </div>
              
              <h3 className="text-3xl md:text-4xl text-white font-thin mb-6 group-hover:text-white/90 transition-colors duration-500">
                Expert Solutions
              </h3>
              
              <p className="text-white/60 font-light leading-relaxed mb-12 text-lg group-hover:text-white/70 transition-colors duration-500">
                Our team of galaxy-minded experts align your technological stars, transforming your business into a blazing supernova of success through proven methodologies.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-white/30 rounded-full mr-4"></div>
                  <span className="text-white/50 font-light">Technical Excellence</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-white/30 rounded-full mr-4"></div>
                  <span className="text-white/50 font-light">Scalable Architecture</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-white/30 rounded-full mr-4"></div>
                  <span className="text-white/50 font-light">Continuous Innovation</span>
                </div>
              </div>
              
              {/* Subtle overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/8 to-white/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              
              {/* Subtle corner element */}
              <div className="absolute bottom-4 right-4 w-6 h-6 border-r border-b border-white/10 group-hover:border-white/30 transition-colors duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-32 px-6 relative">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-white/3 rounded-full"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-thin text-white mb-6 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
              Ready to Transform?
            </h2>
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-px bg-white/30"></div>
              <div className="mx-6 w-2 h-2 bg-white/40 rounded-full"></div>
              <div className="w-16 h-px bg-white/30"></div>
            </div>
            <p className="text-xl text-white/70 font-light max-w-3xl mx-auto leading-relaxed">
              No matter how big or small your tech challenge, we've got the cosmic solutions 
              that turn IT problems into stardust.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12">
            <a
              href="/contact"
              className="group px-12 py-4 border border-brand-primary/50 bg-brand-gradient text-white font-light hover:bg-brand-secondary hover:border-brand-secondary transition-all duration-500 focus-ring shadow-brand-glow hover:shadow-lg"
              aria-label="Start your digital transformation journey with Tekk Collective"
            >
              <span>Start Your Journey</span>
              <div className="w-0 group-hover:w-full h-px bg-white transition-all duration-500 mt-2"></div>
            </a>
            <a
              href="/services"
              className="group px-12 py-4 text-white/70 font-light hover:text-brand-accent transition-colors duration-500 focus-ring"
              aria-label="Explore our technology consulting services"
            >
              <span>Explore Services</span>
              <div className="w-0 group-hover:w-full h-px bg-brand-accent transition-all duration-500 mt-2"></div>
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 px-6 relative">
        {/* Subtle Section Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-thin text-white mb-6 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
              Client Stories
            </h2>
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-px bg-white/30"></div>
              <div className="mx-6 w-2 h-2 bg-white/40 rounded-full"></div>
              <div className="w-16 h-px bg-white/30"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/5">
            <div className="bg-black p-12 hover:bg-white/2 transition-all duration-300 group border-r border-b border-white/5 hover:border-white/20">
              <div className="flex items-center mb-8">
                <img src="images/Dawn.svg" alt="RoyalQ Assistant" className="w-12 h-12 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <h4 className="text-white font-light">RoyalQ Assistant</h4>
                  <span className="text-white/40 text-sm font-light">Financial Technology</span>
                </div>
              </div>
              <p className="text-white/60 font-light leading-relaxed group-hover:text-white/70 transition-colors duration-500">
                "Tekk Collective has completely transformed our online presence and elevated our brand with their exceptional work. Their attention to detail is unmatched."
              </p>
              
              {/* Subtle corner element */}
              <div className="absolute bottom-4 right-4 w-4 h-4 border-r border-b border-white/10 group-hover:border-white/30 transition-colors duration-500"></div>
            </div>

            <div className="bg-black p-12 hover:bg-white/2 transition-all duration-700 group border-r border-b border-white/5 hover:border-white/20 animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center mb-8">
                <img src="images/Portal.svg" alt="Emperico Works" className="w-12 h-12 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <h4 className="text-white font-light">Emperico Works</h4>
                  <span className="text-white/40 text-sm font-light">Enterprise Solutions</span>
                </div>
              </div>
              <p className="text-white/60 font-light leading-relaxed group-hover:text-white/70 transition-colors duration-500">
                "Their minimalist design philosophy and technical expertise were a game-changer for our startup's success. We couldn't be happier with the results."
              </p>
              
              {/* Subtle corner element */}
              <div className="absolute bottom-4 right-4 w-4 h-4 border-r border-b border-white/10 group-hover:border-white/30 transition-colors duration-500"></div>
            </div>

            <div className="bg-black p-12 hover:bg-white/2 transition-all duration-700 group border-r border-b border-white/5 hover:border-white/20 animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center mb-8">
                <img src="images/Transparency.svg" alt="TechFlow Solutions" className="w-12 h-12 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <h4 className="text-white font-light">TechFlow Solutions</h4>
                  <span className="text-white/40 text-sm font-light">Cloud Infrastructure</span>
                </div>
              </div>
              <p className="text-white/60 font-light leading-relaxed group-hover:text-white/70 transition-colors duration-500">
                "Working with Tekk Collective was a seamless experience from start to finish. Their team delivered beyond our expectations and on time."
              </p>
              
              {/* Subtle corner element */}
              <div className="absolute bottom-4 right-4 w-4 h-4 border-r border-b border-white/10 group-hover:border-white/30 transition-colors duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
