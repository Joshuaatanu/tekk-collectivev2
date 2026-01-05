"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import UnicornBackground from "@/components/UnicornBackground";

const services = [
  {
    title: "Strategy Consulting",
    description: "Digital transformation roadmaps and technology strategy development for sustainable growth.",
    features: [
      "Digital Transformation Planning",
      "Technology Roadmapping",
      "Business Process Optimization",
      "Innovation Workshops"
    ],
    icon: "01",
    color: "from-white/20 to-white/5"
  },
  {
    title: "Software Development",
    description: "Custom software solutions built with modern technologies and best practices.",
    features: [
      "Web Applications",
      "Mobile Applications",
      "API Development",
      "System Integration"
    ],
    icon: "02",
    color: "from-white/15 to-white/5"
  },
  {
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services for modern businesses.",
    features: [
      "Cloud Architecture",
      "Migration Services",
      "DevOps Implementation",
      "Infrastructure Automation"
    ],
    icon: "03",
    color: "from-white/20 to-white/5"
  },
  {
    title: "Data & Analytics",
    description: "Transform your data into actionable insights with advanced analytics solutions.",
    features: [
      "Data Strategy",
      "Business Intelligence",
      "Machine Learning",
      "Data Visualization"
    ],
    icon: "04",
    color: "from-white/15 to-white/5"
  },
  {
    title: "Cybersecurity",
    description: "Comprehensive security frameworks to protect your digital assets.",
    features: [
      "Security Assessment",
      "Compliance Management",
      "Incident Response",
      "Security Training"
    ],
    icon: "05",
    color: "from-white/20 to-white/5"
  },
  {
    title: "Digital Innovation",
    description: "Emerging technology integration and innovation consulting services.",
    features: [
      "AI/ML Integration",
      "IoT Solutions",
      "Blockchain Development",
      "Emerging Tech Advisory"
    ],
    icon: "06",
    color: "from-white/15 to-white/5"
  }
];

export default function Services() {
  return (
    <div className="bg-black min-h-screen overflow-hidden">
      <UnicornBackground />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Dynamic Background Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        {/* Blurred Background Layer */}
        <div className="absolute inset-0 backdrop-blur-sm bg-black/15"></div>


        <Navbar />

        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <div className="mb-12 animate-scale-in">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-thin text-white tracking-wider mb-8">
              <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent animate-text-shimmer bg-[length:200%_100%]">
                SERVICES
              </span>
            </h1>
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-px bg-white/30 animate-line-expand"></div>
              <div className="mx-6 w-2 h-2 bg-white/40 rounded-full animate-minimal-pulse"></div>
              <div className="w-16 h-px bg-white/30 animate-line-expand"></div>
            </div>
            <p className="text-xl md:text-2xl text-white/70 font-light tracking-wide max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.5s' }}>
              Comprehensive technology solutions designed to accelerate your digital transformation journey
            </p>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center space-y-2">
            <div className="w-px h-16 bg-gradient-to-b from-white/50 to-transparent"></div>
            <div className="w-3 h-3 border border-white/50 rounded-full animate-minimal-pulse"></div>
            <span className="text-white/40 text-xs tracking-wider uppercase">Explore</span>
          </div>
        </div>
      </section>

      {/* Enhanced Services Grid */}
      <section className="py-32 px-6 relative">
        {/* Section Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </div>
        {/* Background Blur Layer */}
        <div className="absolute inset-0 backdrop-blur-[1px] bg-black/8"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/5">
            {services.map((service, index) => (
              <div key={index} className="bg-black p-16 hover:bg-white/2 transition-all duration-700 group border-r border-b border-white/5 hover:border-white/20 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex justify-between items-start mb-12">
                  <span className="text-5xl font-thin text-white/20 group-hover:text-white/40 transition-colors duration-500 animate-text-shimmer bg-gradient-to-r from-white/20 to-white/40 bg-clip-text text-transparent bg-[length:200%_100%]">
                    {service.icon}
                  </span>
                  <div className="w-8 h-px bg-white/20 group-hover:w-20 transition-all duration-700 animate-line-expand"></div>
                </div>

                <h3 className="text-3xl md:text-4xl text-white font-thin mb-4 group-hover:text-white/90 transition-colors duration-500">
                  {service.title}
                </h3>

                <p className="text-white/60 font-light leading-relaxed mb-8 text-lg group-hover:text-white/70 transition-colors duration-500">
                  {service.description}
                </p>

                <div className="mb-8">
                  <h4 className="text-white/80 font-light text-sm tracking-wider uppercase mb-4 group-hover:text-white/90 transition-colors duration-500">
                    Key Services
                  </h4>
                </div>

                <div className="space-y-4">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center group-hover:translate-x-2 transition-transform duration-500 animate-slide-left" style={{ transitionDelay: `${featureIndex * 50}ms`, animationDelay: `${(index * 0.1) + (featureIndex * 0.05)}s` }}>
                      <div className="w-2 h-2 bg-white/30 rounded-full mr-4 group-hover:bg-white/50 transition-colors duration-300"></div>
                      <span className="text-white/50 font-light group-hover:text-white/70 transition-colors duration-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Hover overlay effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}></div>

                {/* Interactive corner element */}
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r border-b border-white/10 group-hover:border-white/30 transition-colors duration-500 group-hover:scale-110 transform transition-transform duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Process Section */}
      <section className="py-32 px-6 relative">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>

          {/* Floating process indicators */}
          <div className="absolute bottom-1/4 right-1/4 w-12 h-12 bg-white/5 rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20 animate-slide-up">
            <h2 className="text-4xl md:text-6xl font-thin text-white mb-6 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
              Our Process
            </h2>
            <div className="w-16 h-px bg-white/30 mx-auto animate-line-expand"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your business needs and challenges", delay: "0s" },
              { step: "02", title: "Strategy", desc: "Developing tailored solutions and roadmaps", delay: "0.2s" },
              { step: "03", title: "Implementation", desc: "Executing solutions with precision and care", delay: "0.4s" },
              { step: "04", title: "Optimization", desc: "Continuous improvement and support", delay: "0.6s" }
            ].map((process, index) => (
              <div key={index} className="text-center group animate-slide-up" style={{ animationDelay: process.delay }}>
                <div className="relative mb-8">
                  <div className="text-6xl font-thin text-white/20 group-hover:text-white/40 transition-colors duration-500 bg-gradient-to-b from-white/20 to-white/40 bg-clip-text text-transparent animate-text-shimmer bg-[length:200%_100%]">
                    {process.step}
                  </div>
                  {/* Connection line to next step */}
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 left-full w-16 h-px bg-white/10 group-hover:bg-white/20 transition-colors duration-500 animate-line-expand" style={{ animationDelay: `${index * 0.2}s` }}></div>
                  )}
                </div>
                <h3 className="text-xl text-white font-light mb-4 group-hover:text-white/90 transition-colors duration-300">{process.title}</h3>
                <p className="text-white/50 font-light leading-relaxed group-hover:text-white/70 transition-colors duration-300">{process.desc}</p>
                <div className="w-8 h-px bg-white/20 mx-auto mt-6 group-hover:w-16 transition-all duration-700"></div>

                {/* Floating indicator */}
                <div className="absolute -top-4 -right-4 w-3 h-3 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-minimal-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-32 px-6 relative">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
          <div className="absolute bottom-1/4 left-1/4 w-16 h-16 border border-white/15 rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="animate-scale-in">
            <h2 className="text-4xl md:text-6xl font-thin text-white mb-8 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
              Start Your Project
            </h2>
            <p className="text-white/60 text-xl font-light mb-12 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.3s' }}>
              Ready to transform your business with cutting-edge technology solutions?
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <a
                href="/contact"
                className="group px-12 py-4 border border-white/30 text-white hover:bg-white hover:text-black transition-all duration-700 font-light tracking-wide relative overflow-hidden inline-block"
              >
                <span className="relative z-10">Schedule Consultation</span>
                <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
              </a>
              <a
                href="/documents/service-guide.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors duration-500 underline underline-offset-4 font-light group inline-block"
              >
                <span>View Service Guide</span>
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