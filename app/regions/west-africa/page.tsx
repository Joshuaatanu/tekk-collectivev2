"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import UnicornBackground from "@/components/UnicornBackground";

const offerings = [
  {
    index: "01",
    title: "Engineering teams in Lagos and Abuja",
    description:
      "Senior AI, frontend, backend, and cloud engineers based locally. Embedded engagements (we operate as your in-house AI team) and project-based work both available."
  },
  {
    index: "02",
    title: "Real African AI infrastructure",
    description:
      "Affordable Raspberry Pi micro-cloud architecture for startups that need realistic cloud testbeds without realistic cloud bills. Deployed in production for a Nigerian startup."
  },
  {
    index: "03",
    title: "Local legal and regulatory AI",
    description:
      "GAVL is our open legal AI foundation model fine-tuned for Nigerian law — constitutional chatbot, contract generator, and document analysis. Designed for pan-African expansion."
  }
];

export default function WestAfricaRegion() {
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
              Region · West Africa
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-thin text-white tracking-wider mb-8">
              <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent animate-text-shimmer bg-[length:200%_100%]">
                WEST AFRICA
              </span>
            </h1>
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-px bg-white/30 animate-line-expand"></div>
              <div className="mx-6 w-2 h-2 bg-white/40 rounded-full animate-minimal-pulse"></div>
              <div className="w-16 h-px bg-white/30 animate-line-expand"></div>
            </div>
            <p className="text-xl md:text-2xl text-white/70 font-light tracking-wide max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.5s' }}>
              AI consultancy with international standards, built locally.
            </p>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center space-y-2">
            <div className="w-px h-16 bg-gradient-to-b from-white/50 to-transparent"></div>
            <div className="w-3 h-3 border border-white/50 rounded-full"></div>
            <span className="text-white/40 text-xs tracking-wider uppercase">What we offer in-region</span>
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
            {offerings.map((o, i) => (
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
              In-region partnerships
            </span>
            <h2 className="text-3xl md:text-5xl font-thin text-white mb-12 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
              We&apos;re embedded, not parachuted in.
            </h2>
          </div>
          <div className="space-y-6">
            <p className="text-lg text-white/70 font-light leading-relaxed">
              We operate as Royal Q&apos;s in-house AI engineering team — strategic AI and Cloud partner across
              all major projects, with ongoing responsibility for product maintenance and cloud
              optimization. That kind of engagement only works if your team is in the time zone, in the
              culture, and in the WhatsApp groups.
            </p>
            <p className="text-lg text-white/70 font-light leading-relaxed">
              Our talent partnership with Campus Colab sources graduates through bootcamps and university
              programs and places them with leading tech companies. The Nigerian engineering ecosystem
              isn&apos;t a delivery convenience — it&apos;s a market we&apos;re building in.
            </p>
            <p className="text-lg text-white/70 font-light leading-relaxed">
              For UK and European clients entering African markets, that local presence is the difference
              between a launch that lands and one that quietly evaporates.
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
            African AI project?
          </h2>
          <p className="text-xl text-white/70 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            Whether you&apos;re a Nigerian scale-up, a UK firm entering an African market, or anywhere in
            between, tell us what you&apos;re building.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="/contact"
              className="group px-12 py-4 border border-white/30 text-white font-light hover:bg-white hover:text-black transition-all duration-500"
            >
              <span>Start a West Africa conversation</span>
              <div className="w-0 group-hover:w-full h-px bg-white transition-all duration-500 mt-2"></div>
            </a>
            <a
              href="/work"
              className="group px-12 py-4 text-white/70 font-light hover:text-white transition-colors duration-500"
            >
              <span>See our partnerships</span>
              <div className="w-0 group-hover:w-full h-px bg-white/30 transition-all duration-500 mt-2"></div>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
