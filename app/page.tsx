/* eslint-disable @next/next/no-img-element */
"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const homeServices = [
  {
    index: "01",
    title: "AI Implementation",
    description:
      "LLM and generative AI integration, agents and workflow automation, RAG systems, and AI strategy that ships."
  },
  {
    index: "02",
    title: "Custom Software Development",
    description:
      "Web, mobile, APIs, and the cloud architecture that holds it together. The product surface around your AI."
  },
  {
    index: "03",
    title: "Data & Analytics",
    description:
      "Pipelines, infrastructure, ML models, and the dashboards that make your data legible to the business."
  }
];

export default function Home() {
  return (
    <div className="bg-black min-h-screen overflow-hidden" role="main" aria-label="Tekk Collective Homepage">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Subtle Background Grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}></div>
        </div>

        {/* Blurred Background Layer */}
        <div className="absolute inset-0 backdrop-blur-[2px] bg-black/10"></div>


        <Navbar />

        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <div className="mb-12 animate-scale-in">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-thin text-white tracking-wider mb-8">
              <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent animate-text-shimmer bg-[length:200%_100%]">
                TEKK COLLECTIVE
              </span>
            </h1>
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-px bg-white/30"></div>
              <div className="mx-6 w-2 h-2 bg-white/40 rounded-full"></div>
              <div className="w-16 h-px bg-white/30"></div>
            </div>
            <p className="text-xl md:text-2xl text-white/70 font-light tracking-wide max-w-3xl mx-auto mb-6">
              Practical AI for businesses in the UK and Africa. We design, deploy, and ship intelligent systems for the teams that need them.
            </p>
            <p className="text-sm text-white/40 font-light tracking-[0.3em] uppercase mb-12">
              Manchester · Lagos · Abuja
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="/contact"
                className="group px-10 py-3.5 border border-white/30 text-white font-light hover:bg-white hover:text-black transition-all duration-500"
                aria-label="Start a conversation with Tekk Collective"
              >
                <span>Start a conversation</span>
                <div className="w-0 group-hover:w-full h-px bg-white transition-all duration-500 mt-2"></div>
              </a>
              <a
                href="/sentino-ai"
                className="group px-10 py-3.5 text-white/70 font-light hover:text-white transition-colors duration-500"
                aria-label="Learn about Sentino AI, our in-house academic research platform"
              >
                <span>Meet Sentino AI →</span>
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
            <span className="text-white/40 text-xs tracking-wider uppercase">Explore</span>
          </div>
        </div>
      </section>

      {/* What we do Section */}
      <section className="py-32 px-6 relative">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-thin text-white mb-6 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
              What we do
            </h2>
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-px bg-white/30"></div>
              <div className="mx-6 w-2 h-2 bg-white/40 rounded-full"></div>
              <div className="w-16 h-px bg-white/30"></div>
            </div>
            <p className="text-lg text-white/60 font-light max-w-2xl mx-auto leading-relaxed">
              AI implementation, custom software, and the data foundations that support them.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/5">
            {homeServices.map((service, i) => (
              <div
                key={service.title}
                className="bg-black p-12 transition-all duration-500 group relative overflow-hidden border-r border-b border-white/5 hover:border-white/20 animate-scale-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex justify-between items-start mb-10">
                  <span className="text-5xl font-thin text-white/20 group-hover:text-white/40 transition-colors duration-500">
                    {service.index}
                  </span>
                  <div className="w-8 h-px bg-white/20 group-hover:w-20 transition-all duration-500"></div>
                </div>

                <h3 className="text-2xl md:text-3xl text-white font-thin mb-6 group-hover:text-white/90 transition-colors duration-500">
                  {service.title}
                </h3>

                <p className="text-white/60 font-light leading-relaxed mb-8 group-hover:text-white/70 transition-colors duration-500">
                  {service.description}
                </p>

                <a
                  href="/services"
                  className="inline-flex items-center text-white/50 font-light text-sm tracking-wider hover:text-white/80 transition-colors duration-300"
                >
                  <span>Learn more</span>
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>

                <div className="absolute bottom-4 right-4 w-6 h-6 border-r border-b border-white/10 group-hover:border-white/30 transition-colors duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work — Sentino AI */}
      <section className="py-32 px-6 relative">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up">
              <span className="text-white/40 text-xs font-light tracking-[0.3em] uppercase mb-6 block">
                Featured work
              </span>
              <h2 className="text-4xl md:text-5xl font-thin text-white mb-6 leading-tight">
                We don&apos;t just consult on AI.<br />
                <span className="text-white/70">We build it.</span>
              </h2>
              <p className="text-lg text-white/60 font-light leading-relaxed mb-8">
                Sentino AI is our in-house academic research platform — multi-source search across arXiv, PubMed, IEEE Xplore, and more, with RAG-based chat over research PDFs. Built and validated in partnership with the University of Greater Manchester.
              </p>
              <p className="text-white/50 font-light leading-relaxed mb-10">
                When you hire us, you&apos;re hiring a team that has shipped a production AI product — not one that&apos;s only talked about it.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <a
                  href="https://sentinoai.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center px-8 py-3 border border-white/30 text-white font-light hover:bg-white hover:text-black transition-all duration-500"
                >
                  <span>Visit Sentino AI</span>
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
                <a
                  href="/project"
                  className="group inline-flex items-center px-8 py-3 text-white/70 font-light hover:text-white transition-colors duration-500"
                >
                  <span>View all projects</span>
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-brand-primary/10 via-white/5 to-transparent border border-white/10 rounded-lg flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: `
                    linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
                  `,
                  backgroundSize: '24px 24px'
                }}></div>
                <div className="text-center relative z-10 px-8">
                  <div className="text-6xl md:text-7xl font-thin text-white tracking-wider mb-4">
                    Sentino AI
                  </div>
                  <div className="text-white/40 text-sm font-light tracking-[0.2em] uppercase">
                    Academic research, accelerated
                  </div>
                </div>
                <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-white/20"></div>
                <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-white/20"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-white/20"></div>
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-white/20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 px-6 relative">
        {/* Subtle Section Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-thin text-white mb-6 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
              Voices
            </h2>
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-px bg-white/30"></div>
              <div className="mx-6 w-2 h-2 bg-white/40 rounded-full"></div>
              <div className="w-16 h-px bg-white/30"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/5">
            <div className="glass-card p-12 transition-all duration-300 group rounded-lg relative overflow-hidden">
              <div className="flex items-center mb-8">
                <img src="images/Dawn.svg" alt="RoyalQ Assistant" className="w-12 h-12 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <h4 className="text-white font-light">RoyalQ Assistant</h4>
                  <span className="text-white/40 text-sm font-light">Partner · Financial Technology</span>
                </div>
              </div>
              <p className="text-white/60 font-light leading-relaxed group-hover:text-white/70 transition-colors duration-500">
                &ldquo;Tekk Collective has completely transformed our online presence and elevated our brand with their exceptional work. Their attention to detail is unmatched.&rdquo;
              </p>

              {/* Subtle corner element */}
              <div className="absolute bottom-4 right-4 w-4 h-4 border-r border-b border-white/10 group-hover:border-white/30 transition-colors duration-500"></div>
            </div>

            <div className="glass-card p-12 transition-all duration-700 group rounded-lg relative overflow-hidden animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center mb-8">
                <img src="images/Portal.svg" alt="Emperico Works" className="w-12 h-12 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <h4 className="text-white font-light">Emperico Works</h4>
                  <span className="text-white/40 text-sm font-light">Enterprise Solutions</span>
                </div>
              </div>
              <p className="text-white/60 font-light leading-relaxed group-hover:text-white/70 transition-colors duration-500">
                &ldquo;Their minimalist design philosophy and technical expertise were a game-changer for our startup&rsquo;s success. We couldn&rsquo;t be happier with the results.&rdquo;
              </p>

              {/* Subtle corner element */}
              <div className="absolute bottom-4 right-4 w-4 h-4 border-r border-b border-white/10 group-hover:border-white/30 transition-colors duration-500"></div>
            </div>

            <div className="glass-card p-12 transition-all duration-700 group rounded-lg relative overflow-hidden animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center mb-8">
                <img src="images/Transparency.svg" alt="TechFlow Solutions" className="w-12 h-12 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <h4 className="text-white font-light">TechFlow Solutions</h4>
                  <span className="text-white/40 text-sm font-light">Cloud Infrastructure</span>
                </div>
              </div>
              <p className="text-white/60 font-light leading-relaxed group-hover:text-white/70 transition-colors duration-500">
                &ldquo;Working with Tekk Collective was a seamless experience from start to finish. Their team delivered beyond our expectations and on time.&rdquo;
              </p>

              {/* Subtle corner element */}
              <div className="absolute bottom-4 right-4 w-4 h-4 border-r border-b border-white/10 group-hover:border-white/30 transition-colors duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 px-6 relative">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-thin text-white mb-6 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
              Got an AI project?
            </h2>
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-px bg-white/30"></div>
              <div className="mx-6 w-2 h-2 bg-white/40 rounded-full"></div>
              <div className="w-16 h-px bg-white/30"></div>
            </div>
            <p className="text-xl text-white/70 font-light max-w-3xl mx-auto leading-relaxed">
              Tell us what you&apos;re trying to build. We&apos;ll tell you whether we can help and how.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12">
            <a
              href="/contact"
              className="group px-12 py-4 border border-brand-primary/50 bg-brand-gradient text-white font-light hover:bg-brand-secondary hover:border-brand-secondary transition-all duration-500 focus-ring shadow-brand-glow hover:shadow-lg"
              aria-label="Start a conversation with Tekk Collective"
            >
              <span>Start a conversation</span>
              <div className="w-0 group-hover:w-full h-px bg-white transition-all duration-500 mt-2"></div>
            </a>
            <a
              href="/services"
              className="group px-12 py-4 text-white/70 font-light hover:text-brand-accent transition-colors duration-500 focus-ring"
              aria-label="Explore our AI consulting services"
            >
              <span>Explore Services</span>
              <div className="w-0 group-hover:w-full h-px bg-brand-accent transition-all duration-500 mt-2"></div>
            </a>
          </div>
        </div>
      </section>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Tekk Collective",
            "url": "https://tekkcollective.com",
            "logo": "https://tekkcollective.com/tekk-collective-logo.svg",
            "description": "AI consultancy that designs, deploys, and builds intelligent systems for teams across the UK and Africa.",
            "founder": [
              { "@type": "Person", "name": "Joshua Atanu" },
              { "@type": "Person", "name": "Oyinkansola Soleye" }
            ],
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Manchester",
              "addressCountry": "GB"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "email": "atanu@tekkcollective.com",
              "telephone": "+447375433203",
              "contactType": "customer service"
            },
            "sameAs": [
              "https://linkedin.com/company/tekk-collective",
              "https://twitter.com/tekkcollective"
            ],
            "services": [
              "AI Implementation",
              "Custom Software Development",
              "Data & Analytics"
            ]
          })
        }}
      />

      <Footer />
    </div>
  );
}
