"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import UnicornBackground from "@/components/UnicornBackground";

const europeOfferings = [
  {
    index: "01",
    title: "Contracted via UK Ltd",
    description:
      "All client work is contracted through Tekk Collective Ltd in Manchester. Familiar legal framework for European procurement teams; no surprises on contracting forms."
  },
  {
    index: "02",
    title: "EUR-friendly engagements",
    description:
      "We invoice in EUR or GBP, your choice. We absorb the FX translation; you pay in the currency you budget in."
  },
  {
    index: "03",
    title: "UK-grade strategy, no Brexit friction",
    description:
      "The same AI strategy and engineering work we do for UK clients, available to European buyers without the supplier-onboarding overhead of a fresh EU vendor."
  }
];

export default function EuropeRegion() {
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
              Region · Europe
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-thin text-white tracking-wider mb-8">
              <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent animate-text-shimmer bg-[length:200%_100%]">
                EUROPE
              </span>
            </h1>
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-px bg-white/30 animate-line-expand"></div>
              <div className="mx-6 w-2 h-2 bg-white/40 rounded-full animate-minimal-pulse"></div>
              <div className="w-16 h-px bg-white/30 animate-line-expand"></div>
            </div>
            <p className="text-xl md:text-2xl text-white/70 font-light tracking-wide max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.5s' }}>
              UK-quality AI consulting for European clients, without Brexit friction.
            </p>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center space-y-2">
            <div className="w-px h-16 bg-gradient-to-b from-white/50 to-transparent"></div>
            <div className="w-3 h-3 border border-white/50 rounded-full"></div>
            <span className="text-white/40 text-xs tracking-wider uppercase">How we serve European clients</span>
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
            {europeOfferings.map((o, i) => (
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
              Honest about presence
            </span>
            <h2 className="text-3xl md:text-5xl font-thin text-white mb-12 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
              We don&apos;t have a European office yet. We deliver from the UK.
            </h2>
          </div>
          <div className="space-y-6">
            <p className="text-lg text-white/70 font-light leading-relaxed">
              We&apos;re honest about this because Northern English and German Mittelstand buyers respond
              to honesty. Our European clients today are served through Tekk Collective Ltd in Manchester.
              That works for most engagements.
            </p>
            <p className="text-lg text-white/70 font-light leading-relaxed">
              Local incorporation in mainland Europe is available on request for clients with specific
              procurement, data residency, or contracting requirements that need an EU-domiciled vendor.
              Tell us what your procurement team needs and we&apos;ll arrange it.
            </p>
            <p className="text-lg text-white/70 font-light leading-relaxed">
              For everything else — strategy, engineering, AI implementation — the UK contract is fine and
              gets the work shipped faster.
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
            European AI project?
          </h2>
          <p className="text-xl text-white/70 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            Tell us what you&apos;re trying to build, and what your procurement team needs from a vendor.
            We&apos;ll work back from that.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="/contact"
              className="group px-12 py-4 border border-white/30 text-white font-light hover:bg-white hover:text-black transition-all duration-500"
            >
              <span>Start a European conversation</span>
              <div className="w-0 group-hover:w-full h-px bg-white transition-all duration-500 mt-2"></div>
            </a>
            <a
              href="/cross-border"
              className="group px-12 py-4 text-white/70 font-light hover:text-white transition-colors duration-500"
            >
              <span>Cross-border practice</span>
              <div className="w-0 group-hover:w-full h-px bg-white/30 transition-all duration-500 mt-2"></div>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
