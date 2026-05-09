"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import UnicornBackground from "@/components/UnicornBackground";

const projects = [
  {
    index: "01",
    name: "Sentino AI",
    tagline: "AI-powered academic research platform",
    description:
      "Multi-source academic search across arXiv, PubMed, IEEE Xplore and more, with RAG-based chat over research PDFs. Built and validated in partnership with the University of Greater Manchester.",
    stack: ["LLMs", "RAG", "Next.js", "Vector search"],
    link: "https://sentinoai.com",
    linkLabel: "Visit Sentino AI"
  },
  {
    index: "02",
    name: "GAVL",
    tagline: "Legal AI foundation model for Nigerian law",
    description:
      "An open legal AI foundation model fine-tuned for Nigerian law and designed for pan-African expansion. Powers a constitutional chatbot, contract generator, and document analysis tooling for legal compliance.",
    stack: ["Foundation models", "Fine-tuning", "Legal AI", "RAG"],
    link: null,
    linkLabel: null
  },
  {
    index: "03",
    name: "YALP",
    tagline: "Eval-first LLM platform for AI engineers",
    description:
      "Multi-model playground with prompt versioning, cost tracking, and a built-in RAG builder. Designed for teams shipping LLM features who need to evaluate models without vendor lock-in.",
    stack: ["Go", "PostgreSQL", "Docker", "SSE", "Grafana"],
    link: null,
    linkLabel: null
  },
  {
    index: "04",
    name: "Raspberry Pi Micro-Cloud",
    tagline: "Affordable cloud infrastructure for African startups",
    description:
      "Docker-based micro-cloud running on Raspberry Pi 4 clusters. Deployed for a Nigerian startup to simulate cloud deployments locally and substantially reduce infrastructure testing cost.",
    stack: ["Docker", "Raspberry Pi 4", "Linux", "Edge compute"],
    link: null,
    linkLabel: null
  }
];

export default function Projects() {
  return (
    <div className="bg-black min-h-screen overflow-hidden">
      <UnicornBackground />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Dynamic Background Grid */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            animation: 'grid-pulse 5s ease-in-out infinite'
          }}></div>
        </div>

        <Navbar />

        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <div className="mb-12 animate-scale-in">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-thin text-white tracking-wider mb-8">
              <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent animate-text-shimmer bg-[length:200%_100%]">
                PROJECTS
              </span>
            </h1>
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-px bg-white/30 animate-line-expand"></div>
              <div className="mx-6 w-2 h-2 bg-white/40 rounded-full animate-minimal-pulse"></div>
              <div className="w-16 h-px bg-white/30 animate-line-expand"></div>
            </div>
            <p className="text-xl md:text-2xl text-white/70 font-light tracking-wide max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.5s' }}>
              We don&apos;t just consult on AI. We build it.
            </p>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center space-y-2">
            <div className="w-px h-16 bg-gradient-to-b from-white/50 to-transparent"></div>
            <div className="w-3 h-3 border border-white/50 rounded-full animate-minimal-pulse"></div>
            <span className="text-white/40 text-xs tracking-wider uppercase">Discover</span>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-32 px-6 relative">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20 animate-slide-up">
            <h2 className="text-4xl md:text-6xl font-thin text-white mb-6 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
              What we&apos;re building
            </h2>
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-px bg-white/30"></div>
              <div className="mx-6 w-2 h-2 bg-white/40 rounded-full"></div>
              <div className="w-16 h-px bg-white/30"></div>
            </div>
            <p className="text-lg text-white/60 font-light max-w-2xl mx-auto leading-relaxed">
              The products and platforms our team has shipped or is shipping. The same engineering and AI capability we bring to client work.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/5">
            {projects.map((project, i) => (
              <div
                key={project.name}
                className="bg-black p-12 lg:p-16 transition-all duration-500 group relative overflow-hidden border-r border-b border-white/5 hover:border-white/20 animate-scale-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex justify-between items-start mb-10">
                  <span className="text-5xl font-thin text-white/20 group-hover:text-white/40 transition-colors duration-500">
                    {project.index}
                  </span>
                  <div className="w-8 h-px bg-white/20 group-hover:w-20 transition-all duration-500"></div>
                </div>

                <h3 className="text-3xl md:text-4xl text-white font-thin mb-3 group-hover:text-white/90 transition-colors duration-500">
                  {project.name}
                </h3>
                <p className="text-white/50 font-light text-sm tracking-wide uppercase mb-6 group-hover:text-white/60 transition-colors duration-500">
                  {project.tagline}
                </p>

                <p className="text-white/60 font-light leading-relaxed mb-8 group-hover:text-white/70 transition-colors duration-500">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 border border-white/20 text-white/50 text-xs font-light group-hover:border-white/30 group-hover:text-white/60 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-white/70 font-light text-sm tracking-wider hover:text-white transition-colors duration-300"
                  >
                    <span>{project.linkLabel}</span>
                    <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </a>
                ) : (
                  <a
                    href="/contact"
                    className="inline-flex items-center text-white/50 font-light text-sm tracking-wider hover:text-white/80 transition-colors duration-300"
                  >
                    <span>Ask us about it</span>
                    <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </a>
                )}

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
              Want something like this built?
            </h2>

            <p className="text-xl text-white/70 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
              The team behind these projects is the team you&apos;d work with. Tell us what you&apos;re trying to ship.
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
