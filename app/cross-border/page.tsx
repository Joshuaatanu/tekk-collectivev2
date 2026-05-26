"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import UnicornBackground from "@/components/UnicornBackground";

const scenarios = [
  {
    index: "01",
    title: "UK companies entering African markets",
    description:
      "You have a UK product or service and want to launch in Lagos, Accra, or Nairobi. We bring UK-grade strategy and engineering paired with on-the-ground delivery teams who know the market culturally and technically."
  },
  {
    index: "02",
    title: "African companies expanding into the UK or EU",
    description:
      "You&apos;re a Nigerian or West African scale-up that needs UK presence — for fundraising, enterprise sales, or regulatory positioning. We provide the UK contracting entity, the Manchester address, and the go-to-market support."
  },
  {
    index: "03",
    title: "Cross-border AI infrastructure and data",
    description:
      "Data residency, model deployment, and compliance across UK GDPR, NDPR, and emerging AI regulation. We&apos;ve built systems that span both jurisdictions and know where the friction points actually are."
  }
];

const challenges = [
  {
    title: "Data residency",
    description:
      "Where can data sit? Who can access it? What are the cross-border transfer mechanisms? We work this out before the contract is signed, not after the breach."
  },
  {
    title: "Time zones and culture",
    description:
      "WAT and BST overlap by six hours. We&apos;ve built our delivery model around that overlap, with handoff conventions that make async work between London and Lagos feel native."
  },
  {
    title: "Currency and contracting",
    description:
      "We invoice in GBP, EUR, USD, or NGN depending on what makes sense for the engagement. UK Ltd or Nigerian entity contracting available based on procurement requirements."
  },
  {
    title: "Regulatory landscape",
    description:
      "UK GDPR, NDPR, the EU AI Act, sector-specific regulation. We won&apos;t pretend to be solicitors, but we know enough to flag the questions you should be asking."
  }
];

export default function CrossBorder() {
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
            <span className="text-white/40 text-xs font-light tracking-[0.3em] uppercase mb-6 block">
              Practice
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-thin text-white tracking-wider mb-8">
              <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent animate-text-shimmer bg-[length:200%_100%]">
                CROSS-BORDER
              </span>
            </h1>
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-px bg-white/30 animate-line-expand"></div>
              <div className="mx-6 w-2 h-2 bg-white/40 rounded-full animate-minimal-pulse"></div>
              <div className="w-16 h-px bg-white/30 animate-line-expand"></div>
            </div>
            <p className="text-xl md:text-2xl text-white/70 font-light tracking-wide max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.5s' }}>
              When your AI project crosses borders, your team should too.
            </p>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center space-y-2">
            <div className="w-px h-16 bg-gradient-to-b from-white/50 to-transparent"></div>
            <div className="w-3 h-3 border border-white/50 rounded-full"></div>
            <span className="text-white/40 text-xs tracking-wider uppercase">Three scenarios</span>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 relative">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20 animate-slide-up">
            <h2 className="text-4xl md:text-6xl font-thin text-white mb-6 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
              Three scenarios we know well
            </h2>
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-px bg-white/30"></div>
              <div className="mx-6 w-2 h-2 bg-white/40 rounded-full"></div>
              <div className="w-16 h-px bg-white/30"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/5">
            {scenarios.map((s, i) => (
              <div
                key={s.title}
                className="bg-black p-12 transition-all duration-500 group relative overflow-hidden border-r border-b border-white/5 hover:border-white/20 animate-scale-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex justify-between items-start mb-8">
                  <span className="text-5xl font-thin text-white/20 group-hover:text-white/40 transition-colors duration-500">
                    {s.index}
                  </span>
                  <div className="w-8 h-px bg-white/20 group-hover:w-16 transition-all duration-500"></div>
                </div>
                <h3 className="text-xl md:text-2xl text-white font-thin mb-4 group-hover:text-white/90 transition-colors duration-500">
                  {s.title}
                </h3>
                <p className="text-white/60 font-light leading-relaxed group-hover:text-white/70 transition-colors duration-500">
                  {s.description}
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

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <span className="text-white/40 text-xs font-light tracking-[0.3em] uppercase mb-6 block">
              What makes cross-border AI hard
            </span>
            <h2 className="text-3xl md:text-5xl font-thin text-white mb-12 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
              The friction points we&apos;ve already hit.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
            {challenges.map((c, i) => (
              <div
                key={c.title}
                className="bg-black p-10 transition-all duration-500 group relative overflow-hidden border-r border-b border-white/5 hover:border-white/20 animate-scale-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <h3 className="text-xl text-white font-thin mb-3 group-hover:text-white/90 transition-colors duration-500">
                  {c.title}
                </h3>
                <p className="text-white/60 font-light leading-relaxed group-hover:text-white/70 transition-colors duration-500">
                  {c.description}
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
              Why us
            </span>
            <h2 className="text-3xl md:text-5xl font-thin text-white mb-12 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
              Almost no other consultancy can credibly serve all three regions.
            </h2>
          </div>
          <div className="space-y-6">
            <p className="text-lg text-white/70 font-light leading-relaxed">
              UK consultancies that &ldquo;have an Africa practice&rdquo; usually mean a couple of partners
              who flew to Lagos once and a sub-contracted local team they&apos;ve never met. African shops
              that &ldquo;have a London office&rdquo; usually mean a serviced address and a director who
              visits twice a year.
            </p>
            <p className="text-lg text-white/70 font-light leading-relaxed">
              We have founders in Manchester and engineers in Lagos and Abuja, working together on the
              same projects every day. The cross-border practice isn&apos;t a vertical we sell — it&apos;s
              how we operate as a company.
            </p>
            <p className="text-lg text-white/70 font-light leading-relaxed">
              That&apos;s why our existing engagements (Royal Q&apos;s embedded engineering team, the
              University of Greater Manchester partnership integrating Sentino AI into research pipelines)
              are mostly cross-border by nature. The kind of work that doesn&apos;t survive a single
              time-zone team.
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
            Got a cross-border AI project?
          </h2>
          <p className="text-xl text-white/70 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            Tell us where it starts, where it&apos;s going, and what&apos;s in the way. We&apos;ve probably
            already hit at least one version of it.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="/contact"
              className="group px-12 py-4 border border-white/30 text-white font-light hover:bg-white hover:text-black transition-all duration-500"
            >
              <span>Discuss a cross-border project</span>
              <div className="w-0 group-hover:w-full h-px bg-white transition-all duration-500 mt-2"></div>
            </a>
            <a
              href="/regions"
              className="group px-12 py-4 text-white/70 font-light hover:text-white transition-colors duration-500"
            >
              <span>Browse by region</span>
              <div className="w-0 group-hover:w-full h-px bg-white/30 transition-all duration-500 mt-2"></div>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
