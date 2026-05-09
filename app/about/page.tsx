"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import UnicornBackground from "@/components/UnicornBackground";

const team = [
  {
    name: "Joshua Atanu",
    role: "Co-Founder & CTO",
    expertise: "Strategy · Engineering · Business Development",
    bio: "Sets technical direction across all engagements and leads the build of our in-house products — Sentino AI, GAVL, and YALP. Owns client strategy and business development.",
    image: "/team/joshua.jpg"
  },
  {
    name: "Oyinkansola Soleye",
    role: "Co-Founder",
    expertise: "Design · UX · Partnerships",
    bio: "Owns design and user experience across our consulting work and product surface, and leads partnerships. Keeps technology decisions grounded in what actually serves people.",
    image: "/team/oyinkansola.jpg"
  }
];

const values = [
  {
    index: "01",
    title: "Practical over flashy",
    description: "We build AI that delivers measurable value, not impressive demos. If a simpler solution works, we say so."
  },
  {
    index: "02",
    title: "Honest about scope",
    description: "We tell clients what AI can and can't do for them, before they spend on it. Including when the answer is \"don't use AI for this\"."
  },
  {
    index: "03",
    title: "Cross-border by design",
    description: "Our team works across the UK and Africa, so our clients can too. Cross-border engagements are first-class, not an exception."
  },
  {
    index: "04",
    title: "Build, then advise",
    description: "We ship our own AI products (Sentino AI, GAVL, YALP) so we know what implementation actually involves — not just what it sounds like in a deck."
  }
];

export default function About() {
  return (
    <div className="bg-black min-h-screen overflow-hidden">
      <UnicornBackground />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Subtle Background Grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
            `,
            backgroundSize: '70px 70px'
          }}></div>
        </div>

        {/* Blurred Background Layer */}
        <div className="absolute inset-0 backdrop-blur-sm bg-black/20"></div>


        <Navbar />

        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <div className="mb-12 animate-scale-in">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-thin text-white tracking-wider mb-8">
              <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent animate-text-shimmer bg-[length:200%_100%]">
                ABOUT
              </span>
            </h1>
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-px bg-white/30"></div>
              <div className="mx-6 w-2 h-2 bg-white/40 rounded-full"></div>
              <div className="w-16 h-px bg-white/30"></div>
            </div>
            <p className="text-xl md:text-2xl text-white/70 font-light tracking-wide max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.5s' }}>
              An AI consultancy built across borders.
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
        {/* Background Blur Layer */}
        <div className="absolute inset-0 backdrop-blur-[2px] bg-black/10"></div>

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-thin text-white mb-12 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent animate-slide-up">
            Our Journey
          </h2>

          <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-xl text-white/70 font-light leading-relaxed">
              Tekk Collective started with a simple observation: most businesses don&apos;t need more AI hype, they need
              someone who can actually ship it. We do the unglamorous middle bit between a good idea and a working
              system in production.
            </p>

            <p className="text-xl text-white/70 font-light leading-relaxed">
              Headquartered in Manchester, with engineering teams in Lagos and Abuja, we serve clients across the UK
              and Africa. We&apos;re also our own customer — Sentino AI, GAVL, and YALP are products our team has
              built and shipped, which is how we know what implementation actually involves.
            </p>

            <p className="text-xl text-white/70 font-light leading-relaxed">
              We&apos;d rather tell you the boring truth about whether AI fits your problem than sell you a flashy
              project that won&apos;t survive contact with production.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 px-6 relative">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </div>
        {/* Background Blur Layer */}
        <div className="absolute inset-0 backdrop-blur-[1px] bg-black/5"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20 animate-slide-up">
            <h2 className="text-4xl md:text-6xl font-thin text-white mb-6 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
              Our Values
            </h2>
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-px bg-white/30"></div>
              <div className="mx-6 w-2 h-2 bg-white/40 rounded-full"></div>
              <div className="w-16 h-px bg-white/30"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
            {values.map((value, index) => (
              <div key={index} className="bg-black p-12 hover:bg-white/2 transition-all duration-700 group border-r border-b border-white/5 hover:border-white/20 animate-scale-in relative" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex justify-between items-start mb-8">
                  <span className="text-5xl font-thin text-white/20 group-hover:text-white/40 transition-colors duration-500">
                    {value.index}
                  </span>
                  <div className="w-8 h-px bg-white/20 group-hover:w-16 transition-all duration-500"></div>
                </div>
                <h3 className="text-xl font-thin text-white mb-4 group-hover:text-white/90 transition-colors duration-500">
                  {value.title}
                </h3>
                <p className="text-white/60 font-light leading-relaxed group-hover:text-white/70 transition-colors duration-500">
                  {value.description}
                </p>

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
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20 animate-slide-up">
            <h2 className="text-4xl md:text-6xl font-thin text-white mb-6 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
              Meet the Team
            </h2>
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-px bg-white/30"></div>
              <div className="mx-6 w-2 h-2 bg-white/40 rounded-full"></div>
              <div className="w-16 h-px bg-white/30"></div>
            </div>
            <p className="text-xl text-white/70 font-light max-w-3xl mx-auto">
              Two founders in Manchester. An engineering bench in Lagos and Abuja.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
            {team.map((member, index) => (
              <div key={index} className="bg-black/50 border border-white/10 p-8 hover:border-white/30 transition-all duration-700 group animate-scale-in relative" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 border border-brand-primary/30 rounded-full flex items-center justify-center text-4xl font-thin text-white group-hover:from-brand-primary/30 group-hover:to-brand-secondary/30 group-hover:border-brand-primary/50 transition-all duration-500">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>

                  <h3 className="text-xl font-thin text-white mb-1 group-hover:text-white/90 transition-colors duration-500">
                    {member.name}
                  </h3>

                  <p className="text-brand-accent font-light mb-1 text-sm tracking-wide group-hover:text-brand-primary transition-colors duration-500">
                    {member.role}
                  </p>

                  <p className="text-white/40 text-xs font-light mb-4 tracking-wider uppercase group-hover:text-white/50 transition-colors duration-500">
                    {member.expertise}
                  </p>

                  <div className="w-8 h-px bg-brand-primary/30 mx-auto mb-4 group-hover:w-16 group-hover:bg-brand-primary/50 transition-all duration-500"></div>

                  <p className="text-white/50 text-sm font-light leading-relaxed group-hover:text-white/60 transition-colors duration-500">
                    {member.bio}
                  </p>
                </div>

                <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-white/10 group-hover:border-white/30 transition-colors duration-500"></div>
              </div>
            ))}
          </div>

          {/* Engineering team callout */}
          <div className="max-w-4xl mx-auto bg-black/30 border border-white/10 p-10 hover:border-white/20 transition-all duration-500 relative">
            <div className="flex justify-between items-start mb-6">
              <span className="text-white/40 text-xs font-light tracking-[0.3em] uppercase">
                Engineering team · Lagos and Abuja
              </span>
              <div className="w-8 h-px bg-white/20"></div>
            </div>
            <p className="text-white/70 font-light leading-relaxed text-lg">
              Our delivery teams are based in Lagos and Abuja — senior AI, frontend, backend, and cloud engineers
              who ship the work alongside our Manchester founders. Our clients get UK-grade strategy with the
              breadth and pace of an engineering team that lives in two markets.
            </p>
            <div className="absolute bottom-4 right-4 w-4 h-4 border-r border-b border-white/10"></div>
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
              Want to work with us?
            </h2>

            <p className="text-xl text-white/70 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
              Tell us what you&apos;re trying to build, or what role you&apos;d like to play. We read every message.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="/contact"
                className="group px-12 py-4 border border-white/30 text-white font-light hover:bg-white hover:text-black transition-all duration-500"
              >
                <span>Start a conversation</span>
                <div className="w-0 group-hover:w-full h-px bg-white transition-all duration-500 mt-2"></div>
              </a>

              <a
                href="/careers"
                className="group px-12 py-4 text-white/70 font-light hover:text-white transition-colors duration-500"
              >
                <span>Join our team</span>
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