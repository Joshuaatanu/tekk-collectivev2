"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import UnicornBackground from "@/components/UnicornBackground";

const ukOfferings = [
  {
    index: "01",
    title: "AI implementation for UK SMEs and scale-ups",
    description:
      "LLM and generative AI integration, agents and workflow automation, RAG systems. Manchester-led strategy with embedded engineering delivery."
  },
  {
    index: "02",
    title: "Academic and research-grade AI",
    description:
      "Cornerstone partnership with the University of Greater Manchester. Sentino AI is integrated into UoGM research pipelines as a validation surface."
  },
  {
    index: "03",
    title: "Senior expertise without London rates",
    description:
      "Northern-rate engagements with the same calibre of strategy and engineering you&apos;d expect from a London AI consultancy. Without the overhead."
  }
];

export default function UKRegion() {
  return (
    <div className="bg-black min-h-screen overflow-hidden">
      <UnicornBackground />
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <Navbar />

        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <div className="mb-12 animate-scale-in">
            <span className="text-white/40 text-xs font-light tracking-[0.3em] uppercase mb-6 block">
              Region · United Kingdom
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-thin text-white tracking-wider mb-8">
              <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent animate-text-shimmer bg-[length:200%_100%]">
                UNITED KINGDOM
              </span>
            </h1>
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-px bg-white/30 animate-line-expand"></div>
              <div className="mx-6 w-2 h-2 bg-white/40 rounded-full animate-minimal-pulse"></div>
              <div className="w-16 h-px bg-white/30 animate-line-expand"></div>
            </div>
            <p className="text-xl md:text-2xl text-white/70 font-light tracking-wide max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.5s' }}>
              AI consultancy for UK businesses, headquartered in Manchester.
            </p>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center space-y-2">
            <div className="w-px h-16 bg-gradient-to-b from-white/50 to-transparent"></div>
            <div className="w-3 h-3 border border-white/50 rounded-full"></div>
            <span className="text-white/40 text-xs tracking-wider uppercase">What we offer UK clients</span>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 relative">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/5">
            {ukOfferings.map((o, i) => (
              <div
                key={o.title}
                className="bg-black p-12 transition-all duration-500 group relative overflow-hidden border-r border-b border-white/5 hover:border-white/20 animate-scale-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex justify-between items-start mb-8">
                  <span className="text-5xl font-thin text-white/20 group-hover:text-white/40 transition-colors duration-500">
                    {o.index}
                  </span>
                  <div className="w-8 h-px bg-white/20 group-hover:w-16 transition-all duration-500"></div>
                </div>
                <h3 className="text-xl md:text-2xl text-white font-thin mb-4 group-hover:text-white/90 transition-colors duration-500">
                  {o.title}
                </h3>
                <p className="text-white/60 font-light leading-relaxed group-hover:text-white/70 transition-colors duration-500">
                  {o.description}
                </p>
                <div className="absolute bottom-4 right-4 w-4 h-4 border-r border-b border-white/10 group-hover:border-white/30 transition-colors duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 relative">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <span className="text-white/40 text-xs font-light tracking-[0.3em] uppercase mb-6 block">
              Why Manchester
            </span>
            <h2 className="text-3xl md:text-5xl font-thin text-white mb-12 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
              The North&apos;s tech ecosystem, plus international delivery.
            </h2>
          </div>
          <div className="space-y-6">
            <p className="text-lg text-white/70 font-light leading-relaxed">
              Manchester has a genuine, growing AI scene anchored by the universities, MediaCity, and the
              Northern Quarter. There&apos;s real money flowing into AI implementation from local SMEs,
              manufacturing, professional services, and public sector — and most of those buyers don&apos;t
              want to pay London rates for it.
            </p>
            <p className="text-lg text-white/70 font-light leading-relaxed">
              We sit in that gap. Manchester-headquartered, with engineering capacity in Lagos and Abuja
              that lets us deliver at sensible rates without compromising on the people on your account.
              Our cornerstone partnership with the University of Greater Manchester gives us academic
              credibility most boutique firms can&apos;t match.
            </p>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 relative">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-thin text-white mb-8 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
            Got a UK AI project?
          </h2>
          <p className="text-xl text-white/70 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            Tell us what you&apos;re trying to build. We&apos;ll tell you whether we can help and how.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="/contact"
              className="group px-12 py-4 border border-white/30 text-white font-light hover:bg-white hover:text-black transition-all duration-500"
            >
              <span>Start a UK conversation</span>
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
      </section>

      <Footer />
    </div>
  );
}
