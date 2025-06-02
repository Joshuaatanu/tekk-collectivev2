"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import { Typewriter } from "react-simple-typewriter";

function printFormattedDate(date: Date): string {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const monthsOfYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayOfWeek = daysOfWeek[date.getDay()];
  const month = monthsOfYear[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  return `${dayOfWeek}, ${month} ${day}, ${year}`;
}

const date = new Date();
const formattedDate = printFormattedDate(date);

export default function Contact() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    subject: '',
    message: ''
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFocus = (fieldName: string) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  return (
    <div className="bg-black min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Dynamic Background Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'grid-pulse 4s ease-in-out infinite'
          }}></div>
        </div>

        {/* Enhanced Abstract Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-28 left-24 w-16 h-16 border border-white/10 rotate-45 animate-morph"></div>
          <div className="absolute top-32 right-20 w-1 h-28 bg-gradient-to-b from-white/20 to-transparent animate-line-expand"></div>
          <div className="absolute bottom-32 left-1/3 w-20 h-20 border-2 border-white/15 rounded-full animate-glow-pulse"></div>
          <div className="absolute top-1/2 right-1/3 w-24 h-1 bg-gradient-to-r from-transparent via-white/25 to-transparent animate-line-expand" style={{ animationDelay: '1s' }}></div>
          
          {/* Additional floating elements */}
          <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-white/10 rounded-full animate-particle-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-white/5 animate-geometric-rotate"></div>
          <div className="absolute top-3/4 left-2/3 w-4 h-4 bg-white/15 animate-particle-float" style={{ animationDelay: '3s' }}></div>
        </div>

        <Navbar />
        
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <div className="mb-12 animate-scale-in">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-thin text-white tracking-wider mb-8">
              <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent animate-text-shimmer bg-[length:200%_100%]">
                <Typewriter
                  words={['CONNECT']}
                  loop={1}
                  cursor
                  cursorStyle='|'
                  typeSpeed={120}
                  deleteSpeed={80}
                />
              </span>
            </h1>
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-px bg-white/30 animate-line-expand"></div>
              <div className="mx-6 w-2 h-2 bg-white/40 rounded-full animate-minimal-pulse"></div>
              <div className="w-16 h-px bg-white/30 animate-line-expand"></div>
            </div>
            <p className="text-xl md:text-2xl text-white/70 font-light tracking-wide max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.5s' }}>
              Let's discuss how we can transform your business through technology
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-12 text-white/50 font-light text-sm tracking-wider animate-slide-up" style={{ animationDelay: '1s' }}>
            <span className="animate-text-shimmer bg-gradient-to-r from-white/50 to-white/70 bg-clip-text text-transparent bg-[length:200%_100%]">
              {formattedDate}
            </span>
            <div className="w-px h-4 bg-white/20 hidden md:block animate-line-expand"></div>
            <span className="hover:text-white/70 transition-colors duration-300">Available 24/7</span>
            <div className="w-px h-4 bg-white/20 hidden md:block animate-line-expand"></div>
            <span className="hover:text-white/70 transition-colors duration-300">Global Reach</span>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center space-y-2">
            <div className="w-px h-16 bg-gradient-to-b from-white/50 to-transparent"></div>
            <div className="w-3 h-3 border border-white/50 rounded-full animate-minimal-pulse"></div>
            <span className="text-white/40 text-xs tracking-wider uppercase">Contact</span>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Form Section */}
      <section className="py-32 px-6 relative">
        {/* Section Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          <div className="absolute top-1/2 left-1/4 w-32 h-32 border border-white/5 rotate-45 animate-geometric-rotate"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-white/10 rounded-full animate-border-dance"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Enhanced Contact Form */}
            <div className="space-y-8 animate-slide-right">
              <div className="mb-12">
                <h2 className="text-4xl md:text-5xl font-thin text-white mb-6 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
                  Get in Touch
                </h2>
                <div className="w-16 h-px bg-white/30 animate-line-expand"></div>
              </div>
              
              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                className="space-y-8"
              >
                <input
                  type="hidden"
                  name="access_key"
                  value="7e09478d-d697-405e-b85e-36cb81615d5c"
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="group relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onFocus={() => handleFocus('name')}
                      onBlur={handleBlur}
                      placeholder="Full Name"
                      required
                      className="w-full bg-transparent border-b border-white/20 text-white placeholder-white/40 py-4 focus:outline-none focus:border-white/60 transition-all duration-500 font-light hover:border-white/30"
                    />
                    <div className={`absolute bottom-0 left-0 h-px bg-white transition-all duration-500 ${focusedField === 'name' ? 'w-full' : 'w-0'}`}></div>
                  </div>
                  
                  <div className="group relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => handleFocus('email')}
                      onBlur={handleBlur}
                      placeholder="Email Address"
                      required
                      className="w-full bg-transparent border-b border-white/20 text-white placeholder-white/40 py-4 focus:outline-none focus:border-white/60 transition-all duration-500 font-light hover:border-white/30"
                    />
                    <div className={`absolute bottom-0 left-0 h-px bg-white transition-all duration-500 ${focusedField === 'email' ? 'w-full' : 'w-0'}`}></div>
                  </div>
                </div>
                
                <div className="group relative">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('subject')}
                    onBlur={handleBlur}
                    placeholder="Subject"
                    required
                    className="w-full bg-transparent border-b border-white/20 text-white placeholder-white/40 py-4 focus:outline-none focus:border-white/60 transition-all duration-500 font-light hover:border-white/30"
                  />
                  <div className={`absolute bottom-0 left-0 h-px bg-white transition-all duration-500 ${focusedField === 'subject' ? 'w-full' : 'w-0'}`}></div>
                </div>
                
                <div className="group relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('message')}
                    onBlur={handleBlur}
                    placeholder="Tell us about your project"
                    required
                    rows={6}
                    className="w-full bg-transparent border-b border-white/20 text-white placeholder-white/40 py-4 focus:outline-none focus:border-white/60 transition-all duration-500 font-light resize-none hover:border-white/30"
                  ></textarea>
                  <div className={`absolute bottom-0 left-0 h-px bg-white transition-all duration-500 ${focusedField === 'message' ? 'w-full' : 'w-0'}`}></div>
                </div>
                
                <button
                  type="submit"
                  className="group px-12 py-4 border border-white/30 text-white hover:bg-white hover:text-black transition-all duration-700 font-light tracking-wide relative overflow-hidden"
                >
                  <span className="relative z-10">Send Message</span>
                  <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                </button>
              </form>
            </div>

            {/* Enhanced Contact Information */}
            <div className="space-y-12 animate-slide-left">
              <div className="mb-12">
                <h2 className="text-4xl md:text-5xl font-thin text-white mb-6 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
                  Contact Information
                </h2>
                <div className="w-16 h-px bg-white/30 animate-line-expand"></div>
              </div>
              
              <div className="space-y-12">
                <div className="group relative p-6 border border-white/10 hover:border-white/20 transition-all duration-500 hover:bg-white/2">
                  <h3 className="text-white/50 font-light text-sm tracking-wider uppercase mb-4 group-hover:text-white/70 transition-colors duration-300">
                    Email
                  </h3>
                  <p className="text-white font-light text-xl group-hover:text-white/90 transition-colors duration-300">
                    hello@tekkcollective.com
                  </p>
                  <div className="w-8 h-px bg-white/20 mt-4 group-hover:w-20 transition-all duration-700"></div>
                  
                  {/* Corner accent */}
                  <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-white/10 group-hover:border-white/30 transition-colors duration-300"></div>
                </div>
                
                <div className="group relative p-6 border border-white/10 hover:border-white/20 transition-all duration-500 hover:bg-white/2">
                  <h3 className="text-white/50 font-light text-sm tracking-wider uppercase mb-4 group-hover:text-white/70 transition-colors duration-300">
                    Phone
                  </h3>
                  <p className="text-white font-light text-xl group-hover:text-white/90 transition-colors duration-300">
                    +1 (555) 123-4567
                  </p>
                  <div className="w-8 h-px bg-white/20 mt-4 group-hover:w-20 transition-all duration-700"></div>
                  
                  {/* Corner accent */}
                  <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-white/10 group-hover:border-white/30 transition-colors duration-300"></div>
                </div>
                
                <div className="group relative p-6 border border-white/10 hover:border-white/20 transition-all duration-500 hover:bg-white/2">
                  <h3 className="text-white/50 font-light text-sm tracking-wider uppercase mb-4 group-hover:text-white/70 transition-colors duration-300">
                    Office
                  </h3>
                  <p className="text-white font-light text-xl group-hover:text-white/90 transition-colors duration-300">
                    123 Innovation Drive<br />
                    Tech District, CA 94105
                  </p>
                  <div className="w-8 h-px bg-white/20 mt-4 group-hover:w-20 transition-all duration-700"></div>
                  
                  {/* Corner accent */}
                  <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-white/10 group-hover:border-white/30 transition-colors duration-300"></div>
                </div>
                
                <div className="group relative p-6 border border-white/10 hover:border-white/20 transition-all duration-500 hover:bg-white/2">
                  <h3 className="text-white/50 font-light text-sm tracking-wider uppercase mb-4 group-hover:text-white/70 transition-colors duration-300">
                    Business Hours
                  </h3>
                  <div className="space-y-2 text-white font-light group-hover:text-white/90 transition-colors duration-300">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                    <p>Saturday: 10:00 AM - 4:00 PM PST</p>
                    <p>Sunday: Closed</p>
                  </div>
                  <div className="w-8 h-px bg-white/20 mt-4 group-hover:w-20 transition-all duration-700"></div>
                  
                  {/* Corner accent */}
                  <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-white/10 group-hover:border-white/30 transition-colors duration-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Response Time Section */}
      <section className="py-32 px-6 relative">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent animate-line-expand"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent animate-line-expand" style={{ animationDelay: '1s' }}></div>
          
          {/* Floating response indicators */}
          <div className="absolute top-1/4 left-1/4 w-20 h-20 border border-white/5 animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-white/5 rounded-full animate-glow-pulse"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="animate-slide-up">
            <h2 className="text-4xl md:text-6xl font-thin text-white mb-8 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
              Quick Response
            </h2>
            <p className="text-white/60 text-xl font-light mb-12 max-w-2xl mx-auto">
              We typically respond to all inquiries within 24 hours. For urgent matters, please call us directly.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { time: "< 1 Hour", label: "Emergency Support", delay: "0s" },
                { time: "< 24 Hours", label: "General Inquiries", delay: "0.2s" },
                { time: "< 48 Hours", label: "Project Proposals", delay: "0.4s" }
              ].map((response, index) => (
                <div key={index} className="text-center group animate-slide-up" style={{ animationDelay: response.delay }}>
                  <div className="text-3xl md:text-4xl font-thin text-white mb-4 group-hover:text-white/80 transition-colors duration-500 bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent animate-text-shimmer bg-[length:200%_100%]">
                    {response.time}
                  </div>
                  <div className="text-white/50 font-light tracking-wider uppercase text-sm group-hover:text-white/70 transition-colors duration-500">
                    {response.label}
                  </div>
                  <div className="w-8 h-px bg-white/20 mx-auto mt-4 group-hover:w-20 transition-all duration-700"></div>
                  
                  {/* Floating indicator */}
                  <div className="absolute -top-2 -right-2 w-2 h-2 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-minimal-pulse"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
