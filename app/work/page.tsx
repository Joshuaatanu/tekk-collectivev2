"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import UnicornBackground from "@/components/UnicornBackground";

const engagements = [
  {
    index: "01",
    name: "Royal Q",
    type: "Embedded engineering engagement",
    description:
      "We operate as Royal Q's in-house AI engineering team — strategic AI and Cloud partner across all major projects, with ongoing responsibility for product maintenance and cloud optimization.",
    focus: ["Embedded AI team", "Cloud optimization", "Product maintenance", "Strategic engineering"]
  },
  {
    index: "02",
    name: "University of Greater Manchester",
    type: "Academic partnership",
    description:
      "A cornerstone partnership aligning academic research with industrial AI. Sentino AI is integrated into UoGM research pipelines for validation, with collaboration on co-developing and testing AI systems for real research workflows.",
    focus: ["Sentino AI integration", "Research validation", "Co-development", "Foundation model collaboration"]
  },
  {
    index: "03",
    name: "Campus Colab",
    type: "Talent partnership",
    description:
      "Sourcing and nurturing top tech talent through bootcamps and university partnerships, with industry placement programs that connect skilled graduates with leading tech companies.",
    focus: ["Talent acquisition", "Industry placement", "Youth empowerment", "Bootcamps"]
  }
];

export default function Work() {
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
            backgroundSize: '60px 60px',
            animation: 'grid-pulse 8s ease-in-out infinite'
          }}></div>
        </div>

        {/* Minimal Abstract Elements */}
        <div className="absolute inset-0">
          <div className="absolute bottom-1/3 right-1/6 w-14 h-14 border border-white/5 rounded-full animate-gentle-float"></div>
          <div className="absolute top-2/3 right-1/3 w-20 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent animate-line-expand" style={{ animationDelay: '2s' }}></div>
        </div>

        <Navbar />

        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <div className="mb-12 animate-scale-in">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-thin text-white tracking-wider mb-8">
              <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent animate-text-shimmer bg-[length:200%_100%]">
                WORK
              </span>
            </h1>
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-px bg-white/30 animate-line-expand"></div>
              <div className="mx-6 w-2 h-2 bg-white/40 rounded-full animate-minimal-pulse"></div>
              <div className="w-16 h-px bg-white/30 animate-line-expand"></div>
            </div>
            <p className="text-xl md:text-2xl text-white/70 font-light tracking-wide max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.5s' }}>
              Selected engagements and partnerships
            </p>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <div className="flex flex-col items-center space-y-2">
            <div className="w-px h-16 bg-gradient-to-b from-white/50 to-transparent"></div>
            <div className="w-3 h-3 border border-white/50 rounded-full animate-minimal-pulse"></div>
            <span className="text-white/40 text-xs tracking-wider uppercase">Who we work with</span>
          </div>
        </div>
      </section>

      {/* Engagements Grid */}
      <section className="py-32 px-6 relative">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20 animate-slide-up">
            <h2 className="text-4xl md:text-6xl font-thin text-white mb-6 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
              Who we work with
            </h2>
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-px bg-white/30"></div>
              <div className="mx-6 w-2 h-2 bg-white/40 rounded-full"></div>
              <div className="w-16 h-px bg-white/30"></div>
            </div>
            <p className="text-lg text-white/60 font-light max-w-2xl mx-auto leading-relaxed">
              The companies and institutions we partner with — from embedded engineering and academic collaboration to talent pipelines.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/5">
            {engagements.map((e, i) => (
              <div
                key={e.name}
                className="bg-black p-12 transition-all duration-500 group relative overflow-hidden border-r border-b border-white/5 hover:border-white/20 animate-scale-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex justify-between items-start mb-10">
                  <span className="text-5xl font-thin text-white/20 group-hover:text-white/40 transition-colors duration-500">
                    {e.index}
                  </span>
                  <div className="w-8 h-px bg-white/20 group-hover:w-20 transition-all duration-500"></div>
                </div>

                <h3 className="text-2xl md:text-3xl text-white font-thin mb-3 group-hover:text-white/90 transition-colors duration-500">
                  {e.name}
                </h3>
                <p className="text-white/50 font-light text-sm tracking-wide uppercase mb-6 group-hover:text-white/60 transition-colors duration-500">
                  {e.type}
                </p>

                <p className="text-white/60 font-light leading-relaxed mb-8 group-hover:text-white/70 transition-colors duration-500">
                  {e.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {e.focus.map((f) => (
                    <span
                      key={f}
                      className="px-3 py-1 border border-white/20 text-white/50 text-xs font-light group-hover:border-white/30 group-hover:text-white/60 transition-all duration-300"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                <a
                  href="/contact"
                  className="inline-flex items-center text-white/50 font-light text-sm tracking-wider hover:text-white/80 transition-colors duration-300"
                >
                  <span>Ask us about this engagement</span>
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>

                <div className="absolute bottom-4 right-4 w-6 h-6 border-r border-b border-white/10 group-hover:border-white/30 transition-colors duration-500"></div>
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
              Ready to work together?
            </h2>

            <p className="text-xl text-white/70 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
              Whether you need an embedded AI team, a research collaborator, or talent pipeline support, start with a conversation.
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
                href="/services"
                className="group px-12 py-4 text-white/70 font-light hover:text-white transition-colors duration-500"
              >
                <span>View Services</span>
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
