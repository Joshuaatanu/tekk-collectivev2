"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import UnicornBackground from "@/components/UnicornBackground";

const projects = [
  {
    id: 1,
    title: "FinTech Platform",
    category: "Financial Technology",
    description: "Complete digital banking solution with real-time analytics and AI-powered insights.",
    year: "2024",
    technologies: ["React", "Node.js", "AWS", "AI/ML"],
    impact: "40% cost reduction",
    color: "from-white/20 to-white/5"
  },
  {
    id: 2,
    title: "Healthcare Analytics",
    category: "Healthcare Technology",
    description: "Advanced patient data analytics platform improving healthcare outcomes.",
    year: "2023",
    technologies: ["Python", "TensorFlow", "Azure", "React"],
    impact: "300% efficiency gain",
    color: "from-white/15 to-white/5"
  },
  {
    id: 3,
    title: "Supply Chain Optimization",
    category: "Enterprise Solutions",
    description: "AI-driven supply chain management system reducing costs by 40%.",
    year: "2024",
    technologies: ["Java", "Spring", "Kubernetes", "ML"],
    impact: "60% faster delivery",
    color: "from-white/20 to-white/5"
  },
  {
    id: 4,
    title: "Smart City Infrastructure",
    category: "IoT Solutions",
    description: "Integrated IoT platform for urban infrastructure management and monitoring.",
    year: "2023",
    technologies: ["IoT", "Edge Computing", "React", "MongoDB"],
    impact: "50% energy savings",
    color: "from-white/15 to-white/5"
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

        {/* Enhanced Abstract Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-24 left-20 w-20 h-20 border border-white/10 rotate-12 animate-morph"></div>
          <div className="absolute top-40 right-16 w-2 h-24 bg-gradient-to-b from-white/20 to-transparent animate-line-expand"></div>
          <div className="absolute bottom-40 left-1/4 w-12 h-12 border-2 border-white/15 animate-particle-float"></div>
          <div className="absolute top-1/3 right-1/4 w-28 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-line-expand" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-24 right-32 w-16 h-16 border border-white/10 rounded-full animate-glow-pulse"></div>

          {/* Additional dynamic elements */}
          <div className="absolute top-1/2 left-1/6 w-6 h-6 bg-white/15 rounded-full animate-particle-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-1/3 right-1/3 w-24 h-24 border border-white/5 animate-geometric-rotate"></div>
          <div className="absolute top-2/3 left-2/3 w-8 h-8 border border-white/10 animate-border-dance"></div>
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
              Showcasing innovative solutions that drive digital transformation across industries
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

      {/* Enhanced Projects Grid */}
      <section className="py-32 px-6 relative">
        {/* Section Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          <div className="absolute top-1/2 left-1/4 w-32 h-32 border border-white/5 rotate-45 animate-geometric-rotate"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-white/10 rounded-full animate-border-dance"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/5">
            {projects.map((project, index) => (
              <div key={project.id} className="bg-black p-16 hover:bg-white/2 transition-all duration-700 group border-r border-b border-white/5 hover:border-white/20 animate-scale-in relative overflow-hidden" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="flex justify-between items-start mb-8">
                  <span className="text-white/30 text-sm font-mono tracking-wider group-hover:text-white/50 transition-colors duration-500 animate-text-shimmer bg-gradient-to-r from-white/30 to-white/50 bg-clip-text text-transparent bg-[length:200%_100%]">
                    {project.year}
                  </span>
                  <span className="text-white/30 text-sm font-mono tracking-wider group-hover:text-white/50 transition-colors duration-500">
                    0{index + 1}
                  </span>
                </div>

                <div className="mb-8">
                  <h3 className="text-3xl md:text-4xl text-white font-thin mb-4 group-hover:text-white/90 transition-colors duration-500">
                    {project.title}
                  </h3>
                  <p className="text-white/50 font-light text-sm tracking-wider uppercase mb-6 group-hover:text-white/70 transition-colors duration-300">
                    {project.category}
                  </p>
                  <p className="text-white/60 font-light leading-relaxed text-lg group-hover:text-white/70 transition-colors duration-500">
                    {project.description}
                  </p>
                </div>

                {/* Impact metric */}
                <div className="mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-slide-up">
                  <div className="text-2xl font-thin text-white/80 mb-2">{project.impact}</div>
                  <div className="w-12 h-px bg-white/30"></div>
                </div>

                <div className="flex flex-wrap gap-3 mb-8">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 border border-white/20 text-white/50 text-sm font-light hover:border-white/40 hover:text-white/70 transition-all duration-300 animate-slide-left" style={{ animationDelay: `${(index * 0.15) + (techIndex * 0.05)}s` }}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <button className="text-white/70 hover:text-white transition-colors duration-500 underline underline-offset-4 font-light group/btn">
                    <span>View Case Study</span>
                    <div className="w-0 group-hover/btn:w-full h-px bg-white transition-all duration-500 mt-1"></div>
                  </button>
                  <div className="w-8 h-px bg-white/20 group-hover:w-20 transition-all duration-700 animate-line-expand"></div>
                </div>

                {/* Hover overlay effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}></div>

                {/* Interactive corner element */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-white/10 group-hover:border-white/30 transition-colors duration-500 group-hover:scale-110 transform transition-transform duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Capabilities Section */}
      <section className="py-32 px-6 relative">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent animate-line-expand"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent animate-line-expand" style={{ animationDelay: '1s' }}></div>

          {/* Floating capability indicators */}
          <div className="absolute top-1/4 left-1/4 w-20 h-20 border border-white/5 animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-white/5 rounded-full animate-glow-pulse"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20 animate-slide-up">
            <h2 className="text-4xl md:text-6xl font-thin text-white mb-6 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
              Our Capabilities
            </h2>
            <div className="w-16 h-px bg-white/30 mx-auto animate-line-expand"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-16">
            {[
              { metric: "150+", label: "Projects Delivered", delay: "0s" },
              { metric: "50+", label: "Enterprise Clients", delay: "0.2s" },
              { metric: "99.9%", label: "Uptime Achieved", delay: "0.4s" },
              { metric: "40%", label: "Average Cost Reduction", delay: "0.6s" }
            ].map((stat, index) => (
              <div key={index} className="text-center group animate-slide-up" style={{ animationDelay: stat.delay }}>
                <div className="text-4xl md:text-6xl font-thin text-white mb-4 group-hover:text-white/80 transition-colors duration-500 bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent animate-text-shimmer bg-[length:200%_100%]">
                  {stat.metric}
                </div>
                <div className="text-white/50 font-light tracking-wider uppercase text-sm group-hover:text-white/70 transition-colors duration-500">
                  {stat.label}
                </div>
                <div className="w-8 h-px bg-white/20 mx-auto mt-4 group-hover:w-20 transition-all duration-700"></div>

                {/* Floating indicator */}
                <div className="absolute -top-2 -right-2 w-2 h-2 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-minimal-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Technologies Section */}
      <section className="py-32 px-6 relative">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent animate-line-expand"></div>
          <div className="absolute top-1/4 right-1/4 w-24 h-24 border border-white/5 animate-morph"></div>
          <div className="absolute bottom-1/4 left-1/4 w-16 h-16 border border-white/10 rounded-full animate-glow-pulse"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20 animate-slide-up">
            <h2 className="text-4xl md:text-6xl font-thin text-white mb-6 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
              Technologies
            </h2>
            <div className="w-16 h-px bg-white/30 mx-auto animate-line-expand"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              "React", "Node.js", "Python", "AWS", "Kubernetes", "TensorFlow",
              "Azure", "MongoDB", "PostgreSQL", "Docker", "GraphQL", "TypeScript"
            ].map((tech, index) => (
              <div key={index} className="text-center p-6 border border-white/10 hover:border-white/30 transition-all duration-500 group animate-scale-in hover:bg-white/2 relative overflow-hidden" style={{ animationDelay: `${index * 0.05}s` }}>
                <div className="text-white/60 font-light group-hover:text-white/80 transition-colors duration-500 relative z-10">
                  {tech}
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Corner accent */}
                <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-white/10 group-hover:border-white/30 transition-colors duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-32 px-6 relative">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent animate-line-expand"></div>
          <div className="absolute top-1/4 right-1/4 w-20 h-20 border border-white/10 animate-particle-float"></div>
          <div className="absolute bottom-1/4 left-1/4 w-16 h-16 border border-white/15 rounded-full animate-glow-pulse"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="animate-scale-in">
            <h2 className="text-4xl md:text-6xl font-thin text-white mb-8 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
              Start Your Project
            </h2>
            <p className="text-white/60 text-xl font-light mb-12 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.3s' }}>
              Ready to bring your vision to life with innovative technology solutions?
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <a
                href="/contact"
                className="group px-12 py-4 border border-white/30 text-white hover:bg-white hover:text-black transition-all duration-700 font-light tracking-wide relative overflow-hidden inline-block"
              >
                <span className="relative z-10">Discuss Your Project</span>
                <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
              </a>
              <a
                href="/work"
                className="text-white/70 hover:text-white transition-colors duration-500 underline underline-offset-4 font-light group inline-block"
              >
                <span>View All Projects</span>
                <div className="w-0 group-hover:w-full h-px bg-white transition-all duration-500 mt-2"></div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
