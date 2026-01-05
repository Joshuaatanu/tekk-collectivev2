"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import UnicornBackground from "@/components/UnicornBackground";
import { useState } from "react";
import ReactMarkdown from "react-markdown";

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Enterprise Software Development",
    excerpt: "Exploring how artificial intelligence is revolutionizing enterprise software development processes and what it means for businesses in 2024.",
    content: `As we advance into 2024, artificial intelligence continues to reshape the landscape of enterprise software development in ways that seemed impossible just a few years ago. From automated code generation to intelligent testing frameworks, AI is becoming an indispensable partner in the development process.

## The Current State of AI in Development

Today's AI tools are far beyond simple autocomplete features. GitHub Copilot, ChatGPT, and similar platforms are now capable of generating entire functions, debugging complex issues, and even architecting system designs. We've seen productivity increases of 30-50% in our client projects when AI tools are properly integrated into the development workflow.

## Key Areas of Impact

**Code Generation and Optimization**: AI can now generate boilerplate code, implement common patterns, and even optimize existing code for better performance. This allows developers to focus on higher-level problem-solving and creative solutions.

**Automated Testing**: AI-powered testing tools can generate comprehensive test cases, identify edge cases that human testers might miss, and continuously adapt testing strategies based on code changes.

**Bug Detection and Resolution**: Machine learning models trained on millions of code repositories can identify potential bugs, security vulnerabilities, and performance bottlenecks before they reach production.

## The Business Impact

For enterprise clients, the integration of AI in software development translates to faster time-to-market, reduced development costs, and higher-quality software products. We've observed that teams using AI-assisted development tools can deliver features 40% faster while maintaining or improving code quality.

## Looking Ahead

The future promises even more sophisticated AI integration. We anticipate seeing AI systems that can understand business requirements and automatically generate entire application architectures, self-healing code that adapts to changing conditions, and intelligent deployment systems that optimize performance in real-time.

However, the human element remains crucial. AI excels at pattern recognition and automation, but creative problem-solving, strategic thinking, and understanding complex business contexts still require human expertise. The most successful development teams will be those that effectively combine AI capabilities with human creativity and judgment.`,
    author: "Joshua Atanu",
    authorRole: "Founder & CEO",
    publishDate: "March 15, 2024",
    readTime: "8 min read",
    category: "AI & Machine Learning",
    tags: ["AI", "Enterprise", "Software Development", "Innovation"],
    featured: true,
    image: "/blog/ai-enterprise.jpg",
    slug: "future-ai-enterprise-software-development"
  },
  {
    id: 2,
    title: "Cloud-Native Architecture: Building for Scale",
    excerpt: "A comprehensive guide to implementing cloud-native architectures that can scale with your business growth and demands.",
    content: `Cloud-native architecture has become the gold standard for modern applications, but implementing it correctly requires careful planning and understanding of core principles. In this comprehensive guide, we'll explore how to build systems that can scale seamlessly with your business growth.

## Understanding Cloud-Native Principles

Cloud-native isn't just about moving to the cloud—it's about designing applications specifically to leverage cloud computing advantages. The key principles include:

**Microservices Architecture**: Breaking down monolithic applications into smaller, independent services that can be developed, deployed, and scaled independently.

**Containerization**: Using containers to package applications with their dependencies, ensuring consistency across different environments.

**DevOps Integration**: Implementing continuous integration and continuous deployment (CI/CD) pipelines for rapid, reliable releases.

**Infrastructure as Code**: Managing infrastructure through code, enabling version control, testing, and automation of infrastructure changes.

## The Scalability Advantage

One of the most significant benefits of cloud-native architecture is its ability to scale dynamically. Unlike traditional architectures that require manual intervention and often over-provisioning, cloud-native systems can automatically adjust resources based on demand.

We recently implemented a cloud-native solution for an e-commerce client that experienced 10x traffic during Black Friday. The system automatically scaled from 5 to 50 instances during peak traffic and scaled back down afterward, resulting in 60% cost savings compared to their previous architecture.

## Key Components for Success

**Container Orchestration**: Kubernetes has become the de facto standard for container orchestration, providing automated deployment, scaling, and management of containerized applications.

**Service Mesh**: Tools like Istio provide communication infrastructure between microservices, handling load balancing, service discovery, and security.

**Observability**: Comprehensive monitoring, logging, and tracing are essential for managing distributed systems effectively.

## Implementation Strategy

**Phase 1: Assessment and Planning**
- Evaluate current architecture and identify components suitable for migration
- Define service boundaries and data ownership
- Plan the migration strategy (strangler fig pattern vs. big bang)

**Phase 2: Core Infrastructure**
- Set up container orchestration platform
- Implement CI/CD pipelines
- Establish monitoring and logging infrastructure

**Phase 3: Service Migration**
- Start with stateless services
- Implement database per service pattern
- Gradually migrate complex, stateful services

**Phase 4: Optimization**
- Fine-tune auto-scaling policies
- Implement advanced deployment strategies (blue-green, canary)
- Optimize costs and performance

## Common Pitfalls to Avoid

**Distributed Monolith**: Creating too many fine-grained services that are tightly coupled defeats the purpose of microservices architecture.

**Data Consistency Challenges**: Managing transactions across multiple services requires careful design and often eventual consistency patterns.

**Operational Complexity**: Cloud-native systems require sophisticated monitoring, debugging, and operational practices.

## The Business Impact

Organizations that successfully implement cloud-native architectures typically see:
- 50-70% reduction in time-to-market for new features
- 40-60% cost savings through efficient resource utilization
- 99.9%+ availability through resilient, self-healing systems
- Improved developer productivity and job satisfaction

The journey to cloud-native architecture is complex but rewarding. Success requires not just technical changes but also cultural shifts toward DevOps practices, continuous learning, and embracing failure as a learning opportunity.`,
    author: "Olaoluwa Olagun",
    authorRole: "Chief Technology Officer",
    publishDate: "March 10, 2024",
    readTime: "12 min read",
    category: "Cloud Computing",
    tags: ["Cloud", "Architecture", "Scalability", "DevOps"],
    featured: true,
    image: "/blog/cloud-native.jpg",
    slug: "cloud-native-architecture-building-scale"
  },
  {
    id: 3,
    title: "UX Design Trends Shaping 2024: Beyond Aesthetics",
    excerpt: "Discover the UX design trends that are defining 2024, focusing on functionality, accessibility, and user-centered experiences.",
    content: `User experience design in 2024 goes far beyond visual appeal. As digital products become increasingly central to how we work, shop, and connect, the focus has shifted to creating truly inclusive, functional, and meaningful experiences. Here are the key trends shaping UX design this year.

## Accessibility-First Design

The most significant trend we're seeing is the shift from treating accessibility as an afterthought to making it a core design principle. This isn't just about compliance—it's about creating better experiences for everyone.

**Universal Design Principles**: Designing for users with disabilities often results in better experiences for all users. Features like clear visual hierarchy, consistent navigation, and descriptive alt text benefit everyone.

**Inclusive Color Schemes**: Moving beyond simple contrast ratios to consider color blindness, light sensitivity, and cultural color associations.

**Voice and Alternative Interfaces**: Designing for voice commands, gesture control, and other alternative input methods.

## Emotional Intelligence in Design

2024 has seen a growing emphasis on designing for emotional well-being and mental health.

**Micro-Interactions with Purpose**: Small animations and feedback that not only delight but also reduce anxiety and provide clear system status.

**Calm Design**: Reducing cognitive load through simplified interfaces, strategic use of white space, and mindful information architecture.

**Personalization with Privacy**: Tailoring experiences to individual needs while respecting user privacy and data preferences.

## AI-Augmented Design Processes

Artificial intelligence is transforming how we approach UX design, but not in the way many predicted.

**Intelligent User Research**: AI tools help analyze user feedback, identify patterns in user behavior, and generate insights from large datasets.

**Automated Accessibility Testing**: AI-powered tools can identify accessibility issues early in the design process, making inclusive design more achievable.

**Predictive UX**: Using machine learning to anticipate user needs and proactively surface relevant content or functionality.

## Sustainable and Ethical Design

Environmental and social responsibility are becoming key considerations in UX design decisions.

**Digital Carbon Footprint**: Designing lightweight interfaces that reduce energy consumption and data usage.

**Ethical Persuasion**: Moving away from dark patterns and addictive design toward interfaces that respect user autonomy and time.

**Inclusive Representation**: Ensuring diverse representation in imagery, language, and design assumptions.

## The Rise of Spatial Computing

With the growing adoption of AR/VR technologies, spatial design principles are entering mainstream UX.

**3D Interface Elements**: Incorporating depth, shadow, and spatial relationships in traditional 2D interfaces.

**Gesture-Based Navigation**: Designing for natural hand movements and spatial interactions.

**Context-Aware Interfaces**: Adapting interfaces based on physical environment and user context.

## Data-Driven Personalization

Personalization has evolved from simple name insertion to sophisticated, context-aware experiences.

**Behavioral Adaptation**: Interfaces that learn from user behavior and adapt accordingly.

**Progressive Disclosure**: Revealing information and functionality based on user expertise and context.

**Cultural Sensitivity**: Personalizing experiences based on cultural context and preferences.

## Practical Implementation

At Tekk Collective, we've implemented these trends across client projects with remarkable results:

- A healthcare app saw 40% improved accessibility scores and 25% increased user engagement after implementing inclusive design principles
- An e-commerce platform reduced bounce rates by 30% through emotional design and micro-interactions
- A B2B software solution improved user satisfaction by 50% through AI-augmented personalization

## Looking Forward

The future of UX design lies in creating experiences that are not just usable, but meaningful, inclusive, and sustainable. As designers, we have the responsibility to shape digital experiences that enhance human potential rather than exploit human psychology.

The trends of 2024 represent a maturation of the UX field—moving beyond surface-level aesthetics to address fundamental questions about how technology can serve humanity better.`,
    author: "Oyinkansola Soleye",
    authorRole: "Lead UI/UX Designer",
    publishDate: "March 8, 2024",
    readTime: "6 min read",
    category: "Design & UX",
    tags: ["UX Design", "Trends", "Accessibility", "User Research"],
    featured: false,
    image: "/blog/ux-trends-2024.jpg",
    slug: "ux-design-trends-2024-beyond-aesthetics"
  },
  {
    id: 4,
    title: "Digital Transformation Success Stories: Real-World Impact",
    excerpt: "Case studies from our recent digital transformation projects, showcasing measurable business impact and lessons learned.",
    content: "Digital transformation isn't just about technology—it's about fundamental business change...",
    author: "Joshua Atanu",
    authorRole: "Founder & CEO",
    publishDate: "March 5, 2024",
    readTime: "10 min read",
    category: "Case Studies",
    tags: ["Digital Transformation", "Case Study", "Business Impact", "Strategy"],
    featured: false,
    image: "/blog/digital-transformation.jpg",
    slug: "digital-transformation-success-stories"
  },
  {
    id: 5,
    title: "Cybersecurity in the Age of Remote Work",
    excerpt: "Essential cybersecurity strategies for protecting your business in an increasingly remote and distributed work environment.",
    content: "The shift to remote work has fundamentally changed the cybersecurity landscape...",
    author: "Olaoluwa Olagun",
    authorRole: "Chief Technology Officer",
    publishDate: "March 1, 2024",
    readTime: "9 min read",
    category: "Security",
    tags: ["Cybersecurity", "Remote Work", "Data Protection", "Risk Management"],
    featured: false,
    image: "/blog/cybersecurity-remote.jpg",
    slug: "cybersecurity-age-remote-work"
  },
  {
    id: 6,
    title: "Building Inclusive Digital Products: A Designer's Guide",
    excerpt: "Practical strategies for creating digital products that are accessible and inclusive for users of all abilities and backgrounds.",
    content: "Inclusive design is not just a moral imperative—it's a business advantage...",
    author: "Oyinkansola Soleye",
    authorRole: "Lead UI/UX Designer",
    publishDate: "February 28, 2024",
    readTime: "7 min read",
    category: "Design & UX",
    tags: ["Inclusive Design", "Accessibility", "User Experience", "Diversity"],
    featured: false,
    image: "/blog/inclusive-design.jpg",
    slug: "building-inclusive-digital-products-guide"
  }
];

const categories = [
  "All",
  "AI & Machine Learning",
  "Cloud Computing",
  "Design & UX",
  "Case Studies",
  "Security",
  "Digital Transformation"
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPost, setSelectedPost] = useState<number | null>(null);

  const filteredPosts = selectedCategory === "All"
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.slice(0, 3);

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
            backgroundSize: '80px 80px',
            animation: 'grid-pulse 8s ease-in-out infinite'
          }}></div>
        </div>

        {/* Minimal Abstract Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/5 w-16 h-16 border border-white/5 animate-subtle-morph"></div>
          <div className="absolute bottom-1/3 left-1/5 w-12 h-12 border border-white/5 rounded-full animate-gentle-float"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent animate-line-expand" style={{ animationDelay: '2s' }}></div>
        </div>

        <Navbar />

        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <div className="mb-12 animate-scale-in">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-thin text-white tracking-wider mb-8">
              <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent animate-text-shimmer bg-[length:200%_100%]">
                INSIGHTS
              </span>
            </h1>
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-px bg-white/30 animate-line-expand"></div>
              <div className="mx-6 w-2 h-2 bg-white/40 rounded-full animate-minimal-pulse"></div>
              <div className="w-16 h-px bg-white/30 animate-line-expand"></div>
            </div>
            <p className="text-xl md:text-2xl text-white/70 font-light tracking-wide max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.5s' }}>
              Thought leadership in technology, design, and digital transformation
            </p>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <div className="flex flex-col items-center space-y-2">
            <div className="w-px h-16 bg-gradient-to-b from-white/50 to-transparent"></div>
            <div className="w-3 h-3 border border-white/50 rounded-full animate-minimal-pulse"></div>
            <span className="text-white/40 text-xs tracking-wider uppercase">Latest Insights</span>
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="py-32 px-6 relative">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20 animate-slide-up">
            <h2 className="text-4xl md:text-6xl font-thin text-white mb-6 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
              Featured Articles
            </h2>
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-px bg-white/30 animate-line-expand"></div>
              <div className="mx-6 w-2 h-2 bg-white/40 rounded-full animate-minimal-pulse"></div>
              <div className="w-16 h-px bg-white/30 animate-line-expand"></div>
            </div>
            <p className="text-xl text-white/70 font-light max-w-3xl mx-auto">
              Deep dives into the technologies and strategies shaping the future
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/5">
            {featuredPosts.map((post, index) => (
              <div
                key={post.id}
                className="bg-black p-16 hover:bg-white/2 transition-all duration-700 group border-r border-b border-white/5 hover:border-white/20 animate-scale-in cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedPost(post.id)}
              >
                <div className="flex justify-between items-start mb-6">
                  <span className="text-white/40 text-sm font-light tracking-wider uppercase">
                    {post.publishDate} • {post.category}
                  </span>
                  <div className="w-8 h-px bg-white/20 group-hover:w-16 transition-all duration-700"></div>
                </div>

                <h3 className="text-2xl md:text-3xl text-white font-thin mb-4 group-hover:text-white/90 transition-colors duration-500 leading-tight">
                  {post.title}
                </h3>

                <p className="text-white/60 font-light leading-relaxed mb-8 text-lg group-hover:text-white/70 transition-colors duration-500">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white/60 font-light mr-3">
                      {post.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="text-white/70 font-light text-sm">{post.author}</p>
                      <p className="text-white/40 font-light text-xs">{post.authorRole}</p>
                    </div>
                  </div>
                  <span className="text-white/40 text-sm font-light">{post.readTime}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 border border-white/20 text-white/50 text-xs font-light group-hover:border-white/30 group-hover:text-white/60 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="absolute bottom-6 right-6 text-white/30 group-hover:text-white/50 transition-colors duration-500">
                  <span className="text-xs font-light tracking-wider">READ MORE →</span>
                </div>

                {/* Subtle corner element */}
                <div className="absolute bottom-4 right-4 w-6 h-6 border-r border-b border-white/10 group-hover:border-white/30 transition-colors duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts Section */}
      <section className="py-32 px-6 relative">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <div className="absolute top-1/4 left-1/5 w-20 h-20 bg-white/3 rounded-full animate-subtle-glow"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-6xl font-thin text-white mb-8 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
              Latest Insights
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
            {filteredPosts.map((post, index) => (
              <div
                key={post.id}
                className="bg-black/50 border border-white/10 p-8 hover:border-white/30 transition-all duration-700 group cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => setSelectedPost(post.id)}
              >
                <div className="mb-6">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-white/40 text-xs font-light tracking-wider uppercase">
                      {post.publishDate}
                    </span>
                    <span className={`w-3 h-3 rounded-full ${post.featured ? 'bg-white/50' : 'bg-white/20'}`}></span>
                  </div>

                  <h3 className="text-xl font-thin text-white mb-3 group-hover:text-white/90 transition-colors duration-500 leading-tight">
                    {post.title}
                  </h3>

                  <p className="text-white/60 font-light leading-relaxed text-sm group-hover:text-white/70 transition-colors duration-500 mb-4">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-white/40 text-xs font-light">{post.category}</span>
                    <span className="text-white/40 text-xs font-light">{post.readTime}</span>
                  </div>

                  <div className="flex items-center mb-4">
                    <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center text-white/60 font-light mr-2 text-xs">
                      {post.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="text-white/50 text-xs font-light">{post.author}</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-white/30 group-hover:text-white/50 transition-colors duration-500 text-xs font-light tracking-wider">
                    READ ARTICLE →
                  </span>
                </div>

                <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-white/10 group-hover:border-white/30 transition-colors duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Article Modal */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center p-6 overflow-y-auto">
          <div className="max-w-4xl w-full bg-black border border-white/20 p-12 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-6 right-6 text-white/60 hover:text-white text-2xl font-thin"
            >
              ×
            </button>

            {(() => {
              const post = blogPosts.find(p => p.id === selectedPost);
              if (!post) return null;

              return (
                <article>
                  <header className="mb-8">
                    <span className="text-white/40 text-sm font-light tracking-wider uppercase">
                      {post.publishDate} • {post.category}
                    </span>
                    <h1 className="text-4xl font-thin text-white mt-2 mb-4 leading-tight">{post.title}</h1>

                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white/60 font-light mr-4">
                          {post.author.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <p className="text-white/70 font-light">{post.author}</p>
                          <p className="text-white/40 font-light text-sm">{post.authorRole}</p>
                        </div>
                      </div>
                      <span className="text-white/40 text-sm font-light">{post.readTime}</span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {post.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 border border-white/20 text-white/50 text-sm font-light"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </header>

                  <div className="prose prose-invert max-w-none">
                    <p className="text-white/70 font-light leading-relaxed text-lg mb-6">
                      {post.excerpt}
                    </p>
                    <div className="markdown-content text-white/70 font-light leading-relaxed">
                      <ReactMarkdown
                        components={{
                          h1: ({ children }) => <h1 className="text-3xl font-thin text-white mt-10 mb-6 border-b border-white/20 pb-3">{children}</h1>,
                          h2: ({ children }) => <h2 className="text-2xl font-thin text-white mt-8 mb-4 border-l-2 border-white/30 pl-4">{children}</h2>,
                          h3: ({ children }) => <h3 className="text-xl font-light text-white/90 mt-6 mb-3">{children}</h3>,
                          h4: ({ children }) => <h4 className="text-lg font-light text-white/80 mt-4 mb-2">{children}</h4>,
                          p: ({ children }) => <p className="text-white/70 font-light leading-relaxed mb-4">{children}</p>,
                          strong: ({ children }) => <strong className="text-white/90 font-normal">{children}</strong>,
                          em: ({ children }) => <em className="text-white/80 italic">{children}</em>,
                          ul: ({ children }) => <ul className="list-none space-y-2 mb-6 pl-0">{children}</ul>,
                          ol: ({ children }) => <ol className="list-none space-y-2 mb-6 pl-0">{children}</ol>,
                          li: ({ children }) => (
                            <li className="text-white/70 font-light leading-relaxed relative pl-6 mb-2">
                              <span className="absolute left-0 top-0 text-white/40 font-light">•</span>
                              {children}
                            </li>
                          ),
                          blockquote: ({ children }) => (
                            <blockquote className="border-l-2 border-white/30 pl-6 py-2 my-6 bg-white/5 rounded-r">
                              <div className="text-white/60 italic">{children}</div>
                            </blockquote>
                          ),
                          code: ({ children }) => <code className="bg-white/10 px-2 py-1 rounded text-white/80 text-sm font-mono">{children}</code>,
                          pre: ({ children }) => <pre className="bg-white/5 border border-white/10 rounded p-4 my-6 overflow-x-auto text-sm">{children}</pre>,
                          hr: () => <hr className="border-white/20 my-8" />,
                          a: ({ href, children }) => (
                            <a href={href} className="text-white/80 underline hover:text-white transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                              {children}
                            </a>
                          )
                        }}
                      >
                        {post.content}
                      </ReactMarkdown>
                    </div>
                  </div>
                </article>
              );
            })()}
          </div>
        </div>
      )}

      {/* Newsletter Signup Section */}
      <section className="py-32 px-6 relative">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="animate-slide-up">
            <h2 className="text-4xl md:text-6xl font-thin text-white mb-8 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
              Stay Updated
            </h2>

            <p className="text-xl text-white/70 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
              Get the latest insights on technology, design, and digital transformation delivered to your inbox.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-transparent border border-white/30 text-white placeholder-white/50 focus:border-white/60 transition-colors duration-300"
              />
              <button className="px-8 py-3 border border-white/30 text-white font-light hover:bg-white hover:text-black transition-all duration-500">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 