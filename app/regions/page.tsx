"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import UnicornBackground from "@/components/UnicornBackground";

const regions = [
  {
    index: "01",
    name: "United Kingdom",
    href: "/regions/uk",
    summary:
      "AI consultancy for UK businesses, headquartered in Manchester. Senior AI expertise without London rates."
  },
  {
    index: "02",
    name: "Europe",
    href: "/regions/europe",
    summary:
      "UK-quality AI consulting for European clients, contracted via our UK Ltd. EUR-friendly, no Brexit friction."
  },
  {
    index: "03",
    name: "West Africa",
    href: "/regions/west-africa",
    summary:
      "AI consultancy with international standards, built locally. Lagos and Abuja engineering teams; embedded partnerships."
  }
];

export default function Regions() {
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
            backgroundSize: '70px 70px'
          }}></div>
        </div>

        <Navbar />

        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <div className="mb-12 animate-scale-in">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-thin text-white tracking-wider mb-8">
              <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent animate-text-shimmer bg-[length:200%_100%]">
                REGIONS
              </span>
            </h1>
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-px bg-white/30 animate-line-expand"></div>
              <div className="mx-6 w-2 h-2 bg-white/40 rounded-full animate-minimal-pulse"></div>
              <div className="w-16 h-px bg-white/30 animate-line-expand"></div>
            </div>
            <p className="text-xl md:text-2xl text-white/70 font-light tracking-wide max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.5s' }}>
              We work across three regions, with native presence in each.
            </p>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center space-y-2">
            <div className="w-px h-16 bg-gradient-to-b from-white/50 to-transparent"></div>
            <div className="w-3 h-3 border border-white/50 rounded-full"></div>
            <span className="text-white/40 text-xs tracking-wider uppercase">Pick a region</span>
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
            {regions.map((r, i) => (
              <a
                key={r.name}
                href={r.href}
                className="bg-black p-12 transition-all duration-500 group relative overflow-hidden border-r border-b border-white/5 hover:border-white/20 animate-scale-in block"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex justify-between items-start mb-10">
                  <span className="text-5xl font-thin text-white/20 group-hover:text-white/40 transition-colors duration-500">
                    {r.index}
                  </span>
                  <div className="w-8 h-px bg-white/20 group-hover:w-20 transition-all duration-500"></div>
                </div>

                <h3 className="text-2xl md:text-3xl text-white font-thin mb-6 group-hover:text-white/90 transition-colors duration-500">
                  {r.name}
                </h3>

                <p className="text-white/60 font-light leading-relaxed mb-10 group-hover:text-white/70 transition-colors duration-500">
                  {r.summary}
                </p>

                <span className="inline-flex items-center text-white/50 font-light text-sm tracking-wider group-hover:text-white/80 transition-colors duration-300">
                  Visit page
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>

                <div className="absolute bottom-4 right-4 w-6 h-6 border-r border-b border-white/10 group-hover:border-white/30 transition-colors duration-500"></div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 relative">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-thin text-white mb-6 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
            Working across regions?
          </h2>
          <p className="text-lg text-white/70 font-light mb-10 max-w-2xl mx-auto leading-relaxed">
            Most of our work crosses at least two of these regions. Our cross-border practice is the moat.
          </p>
          <a
            href="/cross-border"
            className="group inline-flex items-center px-10 py-3.5 border border-white/30 text-white font-light hover:bg-white hover:text-black transition-all duration-500"
          >
            <span>See our cross-border practice</span>
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
