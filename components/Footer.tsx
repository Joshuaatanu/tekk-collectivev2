/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Footer() {
  return (
    <footer className="relative bg-black/60 backdrop-blur-md border-t border-white/20 mt-20 py-16 z-20">
      {/* Footer background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
        {/* Subtle star overlay for footer */}
        {[...Array(20)].map((_, i) => (
          <div
            key={`footer-star-${i}`}
            className="absolute bg-white/20 rounded-full animate-minimal-pulse"
            style={{
              width: '1px',
              height: '1px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 2 + 3}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="animate-slide-up">
            <h5 className="text-white font-light text-lg mb-6 tracking-wide">Company</h5>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-300 font-light">Careers</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-300 font-light">Project</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-300 font-light">Contact</a></li>
            </ul>
          </div>
          
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h5 className="text-white font-light text-lg mb-6 tracking-wide">Services</h5>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-300 font-light">Consulting</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-300 font-light">Design</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-300 font-light">Support</a></li>
            </ul>
          </div>
          
          <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <h5 className="text-white font-light text-lg mb-6 tracking-wide">Contact</h5>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-300 font-light">Feedback</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-300 font-light">Email</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-300 font-light">Phone</a></li>
            </ul>
          </div>
        </div>
        
        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-12"></div>
        
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-8 mb-12 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <a href="#" className="text-white/60 hover:text-white transition-colors duration-300 hover:scale-110 transform transition-transform">
            <img src="images/twitter.svg" height="24" width="24" alt="Twitter" className="opacity-60 hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a href="#" className="text-white/60 hover:text-white transition-colors duration-300 hover:scale-110 transform transition-transform">
            <img src="images/instagram.svg" height="24" width="24" alt="Instagram" className="opacity-60 hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a href="#" className="text-white/60 hover:text-white transition-colors duration-300 hover:scale-110 transform transition-transform">
            <img src="images/facebook.svg" height="24" width="24" alt="Facebook" className="opacity-60 hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a href="#" className="text-white/60 hover:text-white transition-colors duration-300 hover:scale-110 transform transition-transform">
            <img src="images/github.svg" height="24" width="24" alt="GitHub" className="opacity-60 hover:opacity-100 transition-opacity duration-300" />
          </a>
        </div>
        
        {/* Copyright */}
        <div className="text-center animate-slide-up" style={{ animationDelay: '0.8s' }}>
          <p className="text-white/60 font-light text-sm tracking-wider">
            &copy; 2023 Tekk Collective. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
