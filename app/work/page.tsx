"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import UnicornBackground from "@/components/UnicornBackground";
import { useState, useEffect } from "react";

const projects = [
  {
    id: 1,
    title: "FinTech Revolution",
    client: "GlobalBank Corp",
    category: "Financial Technology",
    year: "2023",
    description: "Complete digital transformation of a traditional banking system serving 2M+ customers.",
    challenge: "Legacy infrastructure couldn't handle modern digital demands and regulatory requirements.",
    solution: "Built cloud-native architecture with AI-powered fraud detection and real-time analytics.",
    results: [
      "300% increase in transaction processing speed",
      "99.9% uptime achievement",
      "50% reduction in operational costs",
      "2M+ users migrated seamlessly"
    ],
    technologies: ["Next.js", "Node.js", "AWS", "AI/ML", "Blockchain"],
    image: "/projects/fintech.jpg",
    featured: true
  },
  {
    id: 2,
    title: "Healthcare Platform",
    client: "MedConnect Inc",
    category: "Healthcare Technology",
    year: "2023",
    description: "Telemedicine platform connecting patients with healthcare providers globally.",
    challenge: "Need for HIPAA-compliant, scalable platform supporting real-time consultations.",
    solution: "Developed secure, real-time video platform with integrated EHR and AI diagnostics.",
    results: [
      "500K+ consultations completed",
      "40% reduction in patient wait times",
      "95% patient satisfaction rate",
      "HIPAA compliance achieved"
    ],
    technologies: ["React", "WebRTC", "Python", "TensorFlow", "Docker"],
    image: "/projects/healthcare.jpg",
    featured: true
  },
  {
    id: 3,
    title: "E-Commerce Revolution",
    client: "RetailForward",
    category: "E-Commerce",
    year: "2022",
    description: "AI-powered e-commerce platform with personalized shopping experiences.",
    challenge: "Traditional e-commerce site with low conversion rates and poor user experience.",
    solution: "Built modern PWA with AI recommendations, AR try-ons, and predictive analytics.",
    results: [
      "250% increase in conversion rates",
      "180% boost in average order value",
      "60% reduction in cart abandonment",
      "1M+ products catalogued"
    ],
    technologies: ["Vue.js", "Python", "TensorFlow", "AR.js", "Elasticsearch"],
    image: "/projects/ecommerce.jpg",
    featured: false
  },
  {
    id: 4,
    title: "Smart City Initiative",
    client: "Metro City Council",
    category: "IoT & Smart Cities",
    year: "2022",
    description: "IoT infrastructure for smart traffic management and environmental monitoring.",
    challenge: "City traffic congestion and air quality monitoring needed real-time solutions.",
    solution: "Deployed IoT sensor network with predictive analytics and automated responses.",
    results: [
      "35% reduction in traffic congestion",
      "Real-time air quality monitoring",
      "20% improvement in emergency response",
      "500+ IoT sensors deployed"
    ],
    technologies: ["IoT", "React", "Node.js", "InfluxDB", "Grafana"],
    image: "/projects/smartcity.jpg",
    featured: false
  },
  {
    id: 5,
    title: "EdTech Platform",
    client: "LearnForward Academy",
    category: "Education Technology",
    year: "2021",
    description: "Adaptive learning platform with AI-powered personalized curricula.",
    challenge: "Traditional education methods weren't meeting diverse student learning needs.",
    solution: "Created adaptive platform with AI tutoring, progress tracking, and gamification.",
    results: [
      "85% improvement in student engagement",
      "70% increase in completion rates",
      "50K+ students using platform",
      "99.8% platform availability"
    ],
    technologies: ["React", "Python", "Django", "TensorFlow", "PostgreSQL"],
    image: "/projects/edtech.jpg",
    featured: false
  },
  {
    id: 6,
    title: "Supply Chain Optimization",
    client: "LogiFlow Systems",
    category: "Supply Chain",
    year: "2021",
    description: "Blockchain-based supply chain tracking with predictive analytics.",
    challenge: "Lack of transparency and inefficiencies in global supply chain operations.",
    solution: "Implemented blockchain tracking with AI-powered demand forecasting and optimization.",
    results: [
      "40% reduction in shipping delays",
      "30% cost savings in logistics",
      "100% supply chain transparency",
      "15+ countries integrated"
    ],
    technologies: ["Blockchain", "React", "Node.js", "Python", "MongoDB"],
    image: "/projects/supply.jpg",
    featured: false
  }
];

const categories = ["All", "Financial Technology", "Healthcare Technology", "E-Commerce", "IoT & Smart Cities", "Education Technology", "Supply Chain"];

export default function Work() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  // Handle keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedProject) {
        setSelectedProject(null);
      }
    };

    if (selectedProject) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = projects.filter(project => project.featured);

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
              Transformative projects that define the future of technology
            </p>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <div className="flex flex-col items-center space-y-2">
            <div className="w-px h-16 bg-gradient-to-b from-white/50 to-transparent"></div>
            <div className="w-3 h-3 border border-white/50 rounded-full animate-minimal-pulse"></div>
            <span className="text-white/40 text-xs tracking-wider uppercase">Our Projects</span>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-32 px-6 relative">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20 animate-slide-up">
            <h2 className="text-4xl md:text-6xl font-thin text-white mb-6 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-px bg-white/30 animate-line-expand"></div>
              <div className="mx-6 w-2 h-2 bg-white/40 rounded-full animate-minimal-pulse"></div>
              <div className="w-16 h-px bg-white/30 animate-line-expand"></div>
            </div>
            <p className="text-xl text-white/70 font-light max-w-3xl mx-auto">
              Our most impactful and innovative solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/5">
            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                className="bg-black p-16 hover:bg-white/2 transition-all duration-700 group border-r border-b border-white/5 hover:border-white/20 animate-scale-in cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedProject(project.id)}
              >
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <span className="text-white/40 text-sm font-light tracking-wider uppercase">
                      {project.year} • {project.category}
                    </span>
                    <h3 className="text-2xl md:text-3xl text-white font-thin mt-2 mb-4 group-hover:text-white/90 transition-colors duration-500">
                      {project.title}
                    </h3>
                    <p className="text-white/50 font-light mb-2">{project.client}</p>
                  </div>
                  <div className="w-8 h-px bg-white/20 group-hover:w-16 transition-all duration-700"></div>
                </div>

                <p className="text-white/60 font-light leading-relaxed mb-8 text-lg group-hover:text-white/70 transition-colors duration-500">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 border border-white/20 text-white/50 text-xs font-light group-hover:border-white/30 group-hover:text-white/60 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="space-y-3">
                  {project.results.slice(0, 2).map((result, resultIndex) => (
                    <div key={resultIndex} className="flex items-center group-hover:translate-x-2 transition-transform duration-500">
                      <div className="w-2 h-2 bg-white/30 rounded-full mr-4 group-hover:bg-white/50 transition-colors duration-300"></div>
                      <span className="text-white/50 font-light group-hover:text-white/70 transition-colors duration-300 text-sm">
                        {result}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="absolute bottom-6 right-6 text-white/30 group-hover:text-white/50 transition-colors duration-500">
                  <span className="text-xs font-light tracking-wider">VIEW CASE STUDY →</span>
                </div>

                {/* Subtle corner element */}
                <div className="absolute bottom-4 right-4 w-6 h-6 border-r border-b border-white/10 group-hover:border-white/30 transition-colors duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects Section */}
      <section className="py-32 px-6 relative">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <div className="absolute top-1/4 right-1/5 w-20 h-20 bg-white/3 rounded-full animate-subtle-glow"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-6xl font-thin text-white mb-8 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
              All Projects
            </h2>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 border font-light text-sm tracking-wider transition-all duration-300 ${selectedCategory === category
                      ? 'border-white/50 text-white bg-white/10'
                      : 'border-white/20 text-white/60 hover:border-white/40 hover:text-white/80'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="bg-black/50 border border-white/10 p-8 hover:border-white/30 transition-all duration-700 group cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => setSelectedProject(project.id)}
              >
                <div className="mb-6">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-white/40 text-xs font-light tracking-wider uppercase">
                      {project.year}
                    </span>
                    <span className={`w-3 h-3 rounded-full ${project.featured ? 'bg-white/50' : 'bg-white/20'}`}></span>
                  </div>

                  <h3 className="text-xl font-thin text-white mb-2 group-hover:text-white/90 transition-colors duration-500">
                    {project.title}
                  </h3>

                  <p className="text-white/50 font-light text-sm mb-4">{project.client}</p>

                  <p className="text-white/60 font-light leading-relaxed text-sm group-hover:text-white/70 transition-colors duration-500">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1 mb-6">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 border border-white/15 text-white/40 text-xs font-light group-hover:border-white/25 group-hover:text-white/50 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="text-right">
                  <span className="text-white/30 group-hover:text-white/50 transition-colors duration-500 text-xs font-light tracking-wider">
                    VIEW PROJECT →
                  </span>
                </div>

                <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-white/10 group-hover:border-white/30 transition-colors duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          <div className="max-w-4xl w-full bg-black border border-white/20 p-12 relative max-h-[90vh] overflow-y-auto focus-ring">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 text-white/60 hover:text-white text-2xl font-thin focus-ring"
              aria-label="Close project details"
            >
              ×
            </button>

            {(() => {
              const project = projects.find(p => p.id === selectedProject);
              if (!project) return null;

              return (
                <div>
                  <div className="mb-8">
                    <span className="text-white/40 text-sm font-light tracking-wider uppercase">
                      {project.year} • {project.category}
                    </span>
                    <h2 id="project-modal-title" className="text-4xl font-thin text-white mt-2 mb-4">{project.title}</h2>
                    <p className="text-white/60 font-light">{project.client}</p>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-thin text-white mb-4">Overview</h3>
                      <p className="text-white/70 font-light leading-relaxed">{project.description}</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-thin text-white mb-4">Challenge</h3>
                      <p className="text-white/70 font-light leading-relaxed">{project.challenge}</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-thin text-white mb-4">Solution</h3>
                      <p className="text-white/70 font-light leading-relaxed">{project.solution}</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-thin text-white mb-4">Results</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {project.results.map((result, index) => (
                          <div key={index} className="flex items-center">
                            <div className="w-2 h-2 bg-white/40 rounded-full mr-4"></div>
                            <span className="text-white/60 font-light">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-thin text-white mb-4">Technologies</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-4 py-2 border border-white/20 text-white/60 text-sm font-light"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-32 px-6 relative">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="animate-slide-up">
            <h2 className="text-4xl md:text-6xl font-thin text-white mb-8 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
              Ready for Your Project?
            </h2>

            <p className="text-xl text-white/70 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
              Let's create something extraordinary together. Every great project starts with a conversation.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="/contact"
                className="group px-12 py-4 border border-white/30 text-white font-light hover:bg-white hover:text-black transition-all duration-500"
              >
                <span>Start Your Project</span>
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