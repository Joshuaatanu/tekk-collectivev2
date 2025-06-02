"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Typewriter } from "react-simple-typewriter";

const team = [
  {
    name: "Alex Chen",
    role: "Founder & CEO",
    expertise: "AI & Machine Learning",
    bio: "Visionary leader with 15+ years in tech innovation and strategic consulting.",
    image: "/team/alex.jpg"
  },
  {
    name: "Sarah Rodriguez",
    role: "CTO",
    expertise: "Cloud Architecture",
    bio: "Expert in scalable systems and cloud infrastructure with Fortune 500 experience.",
    image: "/team/sarah.jpg"
  },
  {
    name: "Marcus Johnson",
    role: "Creative Director",
    expertise: "UX/UI Design",
    bio: "Award-winning designer focused on human-centered digital experiences.",
    image: "/team/marcus.jpg"
  },
  {
    name: "Dr. Elena Vasquez",
    role: "Head of Research",
    expertise: "Emerging Technologies",
    bio: "PhD in Computer Science, leading research in quantum computing and blockchain.",
    image: "/team/elena.jpg"
  }
];

const values = [
  {
    title: "Innovation First",
    description: "We push the boundaries of what's possible, always staying ahead of technological curves.",
    icon: "⚡"
  },
  {
    title: "Human-Centered",
    description: "Technology serves people, not the other way around. Every solution is designed with users in mind.",
    icon: "👥"
  },
  {
    title: "Sustainable Growth",
    description: "We build for the long term, creating solutions that scale responsibly and ethically.",
    icon: "🌱"
  },
  {
    title: "Transparent Process",
    description: "Open communication and clear processes ensure our clients are always informed and involved.",
    icon: "🔍"
  }
];

export default function About() {
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
            backgroundSize: '70px 70px',
            animation: 'grid-pulse 8s ease-in-out infinite'
          }}></div>
        </div>

        {/* Minimal Abstract Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/5 w-20 h-20 border border-white/5 animate-subtle-morph"></div>
          <div className="absolute bottom-1/4 right-1/5 w-16 h-16 border border-white/5 rounded-full animate-gentle-float"></div>
          <div className="absolute top-1/2 right-1/4 w-24 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent animate-line-expand" style={{ animationDelay: '2s' }}></div>
        </div>

        <Navbar />
        
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <div className="mb-12 animate-scale-in">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-thin text-white tracking-wider mb-8">
              <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent animate-text-shimmer bg-[length:200%_100%]">
                <Typewriter
                  words={['ABOUT']}
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
              The minds behind the future of technology consulting
            </p>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <div className="flex flex-col items-center space-y-2">
            <div className="w-px h-16 bg-gradient-to-b from-white/50 to-transparent"></div>
            <div className="w-3 h-3 border border-white/50 rounded-full animate-minimal-pulse"></div>
            <span className="text-white/40 text-xs tracking-wider uppercase">Our Story</span>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-32 px-6 relative">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-thin text-white mb-12 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent animate-slide-up">
            Our Journey
          </h2>
          
          <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-xl text-white/70 font-light leading-relaxed">
              Founded in 2019, Tekk Collective emerged from a simple belief: technology should amplify human potential, 
              not complicate it. What started as a small team of passionate technologists has evolved into a globally 
              recognized consulting firm.
            </p>
            
            <p className="text-xl text-white/70 font-light leading-relaxed">
              We've guided over 500 companies through their digital transformation journeys, from ambitious startups 
              to Fortune 500 enterprises. Our approach combines cutting-edge technology with human-centered design, 
              ensuring every solution we create serves both business objectives and user needs.
            </p>
            
            <p className="text-xl text-white/70 font-light leading-relaxed">
              Today, we're not just consultants—we're partners in shaping the future of business technology.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 px-6 relative">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <div className="absolute top-1/3 right-1/4 w-18 h-18 bg-white/3 rounded-full animate-subtle-glow"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20 animate-slide-up">
            <h2 className="text-4xl md:text-6xl font-thin text-white mb-6 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
              Our Values
            </h2>
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-px bg-white/30 animate-line-expand"></div>
              <div className="mx-6 w-2 h-2 bg-white/40 rounded-full animate-minimal-pulse"></div>
              <div className="w-16 h-px bg-white/30 animate-line-expand"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
            {values.map((value, index) => (
              <div key={index} className="bg-black p-12 hover:bg-white/2 transition-all duration-700 group border-r border-b border-white/5 hover:border-white/20 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-center">
                  <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-thin text-white mb-4 group-hover:text-white/90 transition-colors duration-500">
                    {value.title}
                  </h3>
                  <p className="text-white/60 font-light leading-relaxed group-hover:text-white/70 transition-colors duration-500">
                    {value.description}
                  </p>
                </div>
                
                <div className="absolute bottom-4 right-4 w-4 h-4 border-r border-b border-white/10 group-hover:border-white/30 transition-colors duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 px-6 relative">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
          <div className="absolute bottom-1/4 left-1/5 w-24 h-24 border border-white/3 rotate-45 animate-slow-rotate"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20 animate-slide-up">
            <h2 className="text-4xl md:text-6xl font-thin text-white mb-6 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
              Meet the Team
            </h2>
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-px bg-white/30 animate-line-expand"></div>
              <div className="mx-6 w-2 h-2 bg-white/40 rounded-full animate-minimal-pulse"></div>
              <div className="w-16 h-px bg-white/30 animate-line-expand"></div>
            </div>
            <p className="text-xl text-white/70 font-light max-w-3xl mx-auto">
              The brilliant minds driving innovation and excellence in every project
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-black/50 border border-white/10 p-8 hover:border-white/30 transition-all duration-700 group animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center text-4xl font-thin text-white group-hover:bg-white/20 transition-colors duration-500">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  
                  <h3 className="text-xl font-thin text-white mb-2 group-hover:text-white/90 transition-colors duration-500">
                    {member.name}
                  </h3>
                  
                  <p className="text-white/60 font-light mb-2 group-hover:text-white/70 transition-colors duration-500">
                    {member.role}
                  </p>
                  
                  <p className="text-white/40 text-sm font-light mb-4 group-hover:text-white/50 transition-colors duration-500">
                    {member.expertise}
                  </p>
                  
                  <p className="text-white/50 text-sm font-light leading-relaxed group-hover:text-white/60 transition-colors duration-500">
                    {member.bio}
                  </p>
                </div>
                
                <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-white/10 group-hover:border-white/30 transition-colors duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 relative">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="animate-slide-up">
            <h2 className="text-4xl md:text-6xl font-thin text-white mb-8 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
              Ready to Join Our Journey?
            </h2>
            
            <p className="text-xl text-white/70 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
              Whether you're looking to transform your business or join our team, 
              we'd love to hear from you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href="/contact"
                className="group px-12 py-4 border border-white/30 text-white font-light hover:bg-white hover:text-black transition-all duration-500"
              >
                <span>Start a Project</span>
                <div className="w-0 group-hover:w-full h-px bg-white transition-all duration-500 mt-2"></div>
              </a>
              
              <a 
                href="/careers"
                className="group px-12 py-4 text-white/70 font-light hover:text-white transition-colors duration-500"
              >
                <span>Join Our Team</span>
                <div className="w-0 group-hover:w-full h-px bg-white/30 transition-all duration-500 mt-2"></div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 