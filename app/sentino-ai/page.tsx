"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import UnicornBackground from "@/components/UnicornBackground";

const features = [
  {
    title: "Multi-source academic search",
    description:
      "Search across arXiv, PubMed, IEEE Xplore, Semantic Scholar, and other major academic sources from a single interface."
  },
  {
    title: "RAG over research PDFs",
    description:
      "Upload papers and chat with them — citations preserved, with the underlying passages always one click away."
  },
  {
    title: "AI-assisted literature review",
    description:
      "Synthesise findings across dozens of papers, surface conflicts and consensus, and draft review-ready summaries you can edit."
  },
  {
    title: "Built for researchers, not demos",
    description:
      "Validated in real research workflows in partnership with the University of Greater Manchester. Used by researchers globally."
  }
];

export default function SentinoAI() {
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

        <Navbar />

        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <div className="mb-12 animate-scale-in">
            <span className="text-white/40 text-xs font-light tracking-[0.3em] uppercase mb-8 block">
              In-house product
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-thin text-white tracking-wider mb-8">
              <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent animate-text-shimmer bg-[length:200%_100%]">
                SENTINO AI
              </span>
            </h1>
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-px bg-white/30 animate-line-expand"></div>
              <div className="mx-6 w-2 h-2 bg-white/40 rounded-full animate-minimal-pulse"></div>
              <div className="w-16 h-px bg-white/30 animate-line-expand"></div>
            </div>
            <p className="text-xl md:text-2xl text-white/70 font-light tracking-wide max-w-3xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: '0.5s' }}>
              We don&apos;t just consult on AI. We build it.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-slide-up" style={{ animationDelay: '0.7s' }}>
              <a
                href="https://sentinoai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-10 py-3.5 border border-white/30 text-white font-light hover:bg-white hover:text-black transition-all duration-500"
              >
                <span>Visit Sentino AI</span>
                <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
              <a
                href="/contact"
                className="group px-10 py-3.5 text-white/70 font-light hover:text-white transition-colors duration-500"
              >
                <span>Talk to the team that built it</span>
                <div className="w-0 group-hover:w-full h-px bg-white/40 transition-all duration-500 mt-2"></div>
              </a>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center space-y-2">
            <div className="w-px h-16 bg-gradient-to-b from-white/50 to-transparent"></div>
            <div className="w-3 h-3 border border-white/50 rounded-full"></div>
            <span className="text-white/40 text-xs tracking-wider uppercase">What it is</span>
          </div>
        </div>
      </section>

      {/* What it is Section */}
      <section className="py-32 px-6 relative">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-thin text-white mb-12 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent animate-slide-up">
            Academic research, accelerated
          </h2>

          <div className="space-y-8 animate-slide-up text-left md:text-center" style={{ animationDelay: '0.2s' }}>
            <p className="text-xl text-white/70 font-light leading-relaxed">
              Sentino AI is an AI-powered research platform that gives researchers a single interface to
              search, read, and synthesise across the major academic sources — arXiv, PubMed, IEEE Xplore,
              Semantic Scholar, and more.
            </p>
            <p className="text-xl text-white/70 font-light leading-relaxed">
              You can search a question across millions of papers, chat with PDFs you upload, and ask
              the system to draft literature reviews that pull from real, cited sources rather than
              invented ones.
            </p>
            <p className="text-xl text-white/70 font-light leading-relaxed">
              Built and validated in partnership with the University of Greater Manchester, used by
              researchers globally.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 px-6 relative">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20 animate-slide-up">
            <h2 className="text-4xl md:text-6xl font-thin text-white mb-6 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
              Core features
            </h2>
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-px bg-white/30"></div>
              <div className="mx-6 w-2 h-2 bg-white/40 rounded-full"></div>
              <div className="w-16 h-px bg-white/30"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className="bg-black p-12 transition-all duration-500 group relative overflow-hidden border-r border-b border-white/5 hover:border-white/20 animate-scale-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex justify-between items-start mb-8">
                  <span className="text-5xl font-thin text-white/20 group-hover:text-white/40 transition-colors duration-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="w-8 h-px bg-white/20 group-hover:w-16 transition-all duration-500"></div>
                </div>
                <h3 className="text-2xl text-white font-thin mb-4 group-hover:text-white/90 transition-colors duration-500">
                  {feature.title}
                </h3>
                <p className="text-white/60 font-light leading-relaxed group-hover:text-white/70 transition-colors duration-500">
                  {feature.description}
                </p>
                <div className="absolute bottom-4 right-4 w-4 h-4 border-r border-b border-white/10 group-hover:border-white/30 transition-colors duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why it matters for clients */}
      <section className="py-32 px-6 relative">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <span className="text-white/40 text-xs font-light tracking-[0.3em] uppercase mb-6 block">
              Why this matters for our clients
            </span>
            <h2 className="text-3xl md:text-5xl font-thin text-white mb-12 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
              The team that built it is the team you&apos;d work with.
            </h2>
          </div>

          <div className="space-y-6 animate-slide-up">
            <p className="text-lg text-white/70 font-light leading-relaxed">
              Most AI consultancies advise on AI without ever shipping a production AI product themselves.
              The decisions look easy on a slide. They&apos;re not.
            </p>
            <p className="text-lg text-white/70 font-light leading-relaxed">
              Sentino AI is the proof we know what implementation actually involves: the model selection
              tradeoffs, the retrieval quality problems, the cost curves, the evaluation harnesses, the
              user-research loops, the boring infrastructure that makes the impressive bit possible.
            </p>
            <p className="text-lg text-white/70 font-light leading-relaxed">
              When you hire us, you&apos;re hiring the team that learned all of that the hard way — and is
              now ready to compress your AI implementation timeline because of it.
            </p>
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
              Want to ship something like Sentino AI?
            </h2>
            <p className="text-xl text-white/70 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
              Tell us about your AI project. We&apos;ll tell you whether we can help and how.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="/contact"
                className="group px-12 py-4 border border-white/30 text-white font-light hover:bg-white hover:text-black transition-all duration-500"
              >
                <span>Discuss your project</span>
                <div className="w-0 group-hover:w-full h-px bg-white transition-all duration-500 mt-2"></div>
              </a>
              <a
                href="/project"
                className="group px-12 py-4 text-white/70 font-light hover:text-white transition-colors duration-500"
              >
                <span>See our other projects</span>
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
