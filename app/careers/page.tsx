"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import UnicornBackground from "@/components/UnicornBackground";

const volunteerRoles = [
  {
    title: "Frontend Developer",
    type: "Technical Volunteer",
    description: "Help build beautiful, responsive user interfaces for our client projects and internal tools.",
    skills: [
      "React/Next.js experience",
      "TypeScript knowledge",
      "CSS/Tailwind CSS",
      "UI/UX design sense"
    ],
    commitment: "5-10 hours/week",
    impact: "Directly contribute to client deliverables and gain real-world project experience",
    icon: "01"
  },
  {
    title: "Backend Developer",
    type: "Technical Volunteer",
    description: "Develop robust APIs and server-side solutions that power our applications.",
    skills: [
      "Node.js or Python",
      "Database design (SQL/NoSQL)",
      "API development",
      "Cloud services (AWS/Azure)"
    ],
    commitment: "5-10 hours/week",
    impact: "Build scalable systems and learn enterprise-level architecture",
    icon: "02"
  },
  {
    title: "UI/UX Designer",
    type: "Design Volunteer",
    description: "Create intuitive and visually compelling designs for web and mobile applications.",
    skills: [
      "Figma or Adobe Creative Suite",
      "User research methods",
      "Prototyping",
      "Design systems"
    ],
    commitment: "4-8 hours/week",
    impact: "Shape user experiences and build a professional design portfolio",
    icon: "03"
  },
  {
    title: "DevOps Engineer",
    type: "Technical Volunteer",
    description: "Manage deployment pipelines and infrastructure for our client projects.",
    skills: [
      "Docker/Kubernetes",
      "CI/CD pipelines",
      "Cloud platforms",
      "Infrastructure as Code"
    ],
    commitment: "3-6 hours/week",
    impact: "Learn modern DevOps practices and ensure reliable deployments",
    icon: "04"
  },
  {
    title: "Business Analyst",
    type: "Strategy Volunteer",
    description: "Help analyze client requirements and translate business needs into technical solutions.",
    skills: [
      "Requirements gathering",
      "Process documentation",
      "Stakeholder communication",
      "Project management"
    ],
    commitment: "4-8 hours/week",
    impact: "Bridge business and technology while developing consulting skills",
    icon: "05"
  },
  {
    title: "Content Creator",
    type: "Marketing Volunteer",
    description: "Create engaging content for our blog, social media, and marketing materials.",
    skills: [
      "Technical writing",
      "Social media management",
      "SEO knowledge",
      "Content strategy"
    ],
    commitment: "3-5 hours/week",
    impact: "Build our brand presence and develop your content marketing skills",
    icon: "06"
  }
];

const benefits = [
  {
    title: "Real-World Experience",
    description: "Work on actual client projects and build solutions that make a difference",
    icon: "🚀"
  },
  {
    title: "Mentorship Program",
    description: "Get guidance from experienced professionals in your field",
    icon: "🎯"
  },
  {
    title: "Flexible Schedule",
    description: "Volunteer around your studies or other commitments",
    icon: "⏰"
  },
  {
    title: "Portfolio Building",
    description: "Add impressive projects to your portfolio and resume",
    icon: "📈"
  },
  {
    title: "Networking",
    description: "Connect with industry professionals and fellow volunteers",
    icon: "🤝"
  },
  {
    title: "Skill Development",
    description: "Learn cutting-edge technologies and best practices",
    icon: "💡"
  }
];

export default function Careers() {
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
            backgroundSize: '70px 70px'
          }}></div>
        </div>

        {/* Enhanced Abstract Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-32 w-1 h-32 bg-gradient-to-b from-white/20 to-transparent animate-line-expand"></div>
          <div className="absolute bottom-32 left-1/4 w-24 h-24 border border-white/10 rounded-full animate-glow-pulse"></div>
          <div className="absolute top-1/2 right-20 w-32 h-1 bg-gradient-to-r from-transparent via-white/25 to-transparent animate-line-expand" style={{ animationDelay: '1s' }}></div>

          {/* Additional floating elements */}
          <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-white/10 rounded-full animate-particle-float"></div>
          <div className="absolute bottom-1/4 right-1/3 w-16 h-16 border border-white/5 rounded-full animate-subtle-glow"></div>
        </div>

        <Navbar />

        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <div className="mb-12 animate-scale-in">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-thin text-white tracking-wider mb-8">
              <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent animate-text-shimmer bg-[length:200%_100%]">
                VOLUNTEERS
              </span>
            </h1>
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-px bg-white/30 animate-line-expand"></div>
              <div className="mx-6 w-2 h-2 bg-white/40 rounded-full animate-minimal-pulse"></div>
              <div className="w-16 h-px bg-white/30 animate-line-expand"></div>
            </div>
            <p className="text-xl md:text-2xl text-white/70 font-light tracking-wide max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.5s' }}>
              Join our mission to transform businesses through technology while building your career
            </p>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <div className="flex flex-col items-center space-y-2">
            <div className="w-px h-16 bg-gradient-to-b from-white/50 to-transparent"></div>
            <div className="w-3 h-3 border border-white/50 rounded-full animate-minimal-pulse"></div>
            <span className="text-white/40 text-xs tracking-wider uppercase">Opportunities</span>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-32 px-6 relative">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-thin text-white mb-12 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent animate-slide-up">
            Why Volunteer With Us?
          </h2>

          <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-xl text-white/70 font-light leading-relaxed">
              At Tekk Collective, we believe in nurturing the next generation of tech professionals. Our volunteer program
              offers you the opportunity to work on real client projects, gain valuable experience, and make a meaningful
              impact while building your career.
            </p>

            <p className="text-xl text-white/70 font-light leading-relaxed">
              Whether you're a student looking to gain practical experience, a career changer wanting to build a portfolio,
              or a professional seeking to give back to the community, our volunteer opportunities provide the perfect
              platform to grow your skills and network.
            </p>

            <div className="flex items-center justify-center mt-12">
              <div className="w-16 h-px bg-white/30"></div>
              <div className="mx-6 w-2 h-2 bg-white/40 rounded-full"></div>
              <div className="w-16 h-px bg-white/30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-32 px-6 relative">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <div className="absolute top-1/3 right-1/4 w-18 h-18 bg-white/3 rounded-full animate-subtle-glow"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20 animate-slide-up">
            <h2 className="text-4xl md:text-6xl font-thin text-white mb-6 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
              What You'll Gain
            </h2>
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-px bg-white/30"></div>
              <div className="mx-6 w-2 h-2 bg-white/40 rounded-full"></div>
              <div className="w-16 h-px bg-white/30"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-black/50 border border-white/10 p-8 hover:border-white/30 transition-all duration-700 group animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-center">
                  <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-thin text-white mb-4 group-hover:text-white/90 transition-colors duration-500">
                    {benefit.title}
                  </h3>
                  <p className="text-white/60 font-light leading-relaxed group-hover:text-white/70 transition-colors duration-500">
                    {benefit.description}
                  </p>
                </div>

                <div className="absolute bottom-4 right-4 w-4 h-4 border-r border-b border-white/10 group-hover:border-white/30 transition-colors duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Roles Section */}
      <section className="py-32 px-6 relative">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
          <div className="absolute bottom-1/4 left-1/4 w-24 h-24 border border-white/10 rounded-full animate-gentle-float"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20 animate-slide-up">
            <h2 className="text-4xl md:text-6xl font-thin text-white mb-6 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
              Volunteer Opportunities
            </h2>
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-px bg-white/30"></div>
              <div className="mx-6 w-2 h-2 bg-white/40 rounded-full"></div>
              <div className="w-16 h-px bg-white/30"></div>
            </div>
            <p className="text-xl text-white/70 font-light max-w-3xl mx-auto">
              Choose from various roles that match your skills and interests
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {volunteerRoles.map((role, index) => (
              <div key={index} className="bg-black/30 border border-white/10 p-8 hover:border-white/20 transition-all duration-700 group animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex justify-between items-start mb-6">
                  <span className="text-4xl font-thin text-white/20 group-hover:text-white/40 transition-colors duration-500 animate-text-shimmer bg-gradient-to-r from-white/20 to-white/40 bg-clip-text text-transparent bg-[length:200%_100%]">
                    {role.icon}
                  </span>
                  <span className="text-xs text-white/50 font-light tracking-wider uppercase px-3 py-1 border border-white/20 rounded-full">
                    {role.type}
                  </span>
                </div>

                <h3 className="text-2xl text-white font-thin mb-3 group-hover:text-white/90 transition-colors duration-500">
                  {role.title}
                </h3>

                <p className="text-white/60 font-light leading-relaxed mb-6 group-hover:text-white/70 transition-colors duration-500">
                  {role.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-white/80 font-light text-sm tracking-wider uppercase mb-3 group-hover:text-white/90 transition-colors duration-500">
                    Skills Needed
                  </h4>
                  <div className="space-y-2">
                    {role.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center group-hover:translate-x-2 transition-transform duration-500" style={{ transitionDelay: `${skillIndex * 50}ms` }}>
                        <div className="w-2 h-2 bg-white/30 rounded-full mr-3 group-hover:bg-white/50 transition-colors duration-300"></div>
                        <span className="text-white/50 font-light group-hover:text-white/70 transition-colors duration-300">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div>
                    <h5 className="text-white/70 font-light text-xs tracking-wider uppercase mb-2">Time Commitment</h5>
                    <p className="text-white/80 font-light">{role.commitment}</p>
                  </div>
                  <div>
                    <h5 className="text-white/70 font-light text-xs tracking-wider uppercase mb-2">Impact</h5>
                    <p className="text-white/60 font-light text-sm leading-relaxed">{role.impact}</p>
                  </div>
                </div>

                {/* Interactive corner element */}
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r border-b border-white/10 group-hover:border-white/30 transition-colors duration-500 group-hover:scale-110 transform transition-transform duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-32 px-6 relative">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20 animate-slide-up">
            <h2 className="text-4xl md:text-6xl font-thin text-white mb-6 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
              How to Apply
            </h2>
            <div className="w-16 h-px bg-white/30 mx-auto animate-line-expand"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { step: "01", title: "Submit Application", desc: "Fill out our volunteer application form with your background and interests", delay: "0s" },
              { step: "02", title: "Initial Interview", desc: "Have a casual conversation with our team about your goals and availability", delay: "0.2s" },
              { step: "03", title: "Start Contributing", desc: "Get matched with projects and begin making an impact immediately", delay: "0.4s" }
            ].map((process, index) => (
              <div key={index} className="text-center group animate-slide-up" style={{ animationDelay: process.delay }}>
                <div className="relative mb-8">
                  <div className="text-6xl font-thin text-white/20 group-hover:text-white/40 transition-colors duration-500 bg-gradient-to-b from-white/20 to-white/40 bg-clip-text text-transparent animate-text-shimmer bg-[length:200%_100%]">
                    {process.step}
                  </div>
                  {/* Connection line to next step */}
                  {index < 2 && (
                    <div className="hidden md:block absolute top-1/2 left-full w-16 h-px bg-white/10 group-hover:bg-white/20 transition-colors duration-500 animate-line-expand" style={{ animationDelay: `${index * 0.2}s` }}></div>
                  )}
                </div>
                <h3 className="text-xl text-white font-light mb-4 group-hover:text-white/90 transition-colors duration-300">{process.title}</h3>
                <p className="text-white/50 font-light leading-relaxed group-hover:text-white/70 transition-colors duration-300">{process.desc}</p>
                <div className="w-8 h-px bg-white/20 mx-auto mt-6 group-hover:w-16 transition-all duration-700"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 relative">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
          <div className="absolute bottom-1/4 left-1/4 w-16 h-16 border border-white/15 rounded-full animate-glow-pulse"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="animate-scale-in">
            <h2 className="text-4xl md:text-6xl font-thin text-white mb-8 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
              Ready to Get Started?
            </h2>
            <p className="text-white/60 text-xl font-light mb-12 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.3s' }}>
              Join our community of passionate volunteers and start building your future in tech today.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <a
                href="/contact"
                className="group px-12 py-4 border border-white/30 text-white hover:bg-white hover:text-black transition-all duration-700 font-light tracking-wide relative overflow-hidden inline-block"
              >
                <span className="relative z-10">Apply Now</span>
                <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
              </a>
              <a
                href="/about"
                className="text-white/70 hover:text-white transition-colors duration-500 underline underline-offset-4 font-light group inline-block"
              >
                <span>Learn More About Us</span>
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
