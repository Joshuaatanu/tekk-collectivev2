"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Enterprise Software Development",
    excerpt: "Exploring how artificial intelligence is revolutionizing enterprise software development processes and what it means for businesses in 2024.",
    content: "As we advance into 2024, artificial intelligence continues to reshape the landscape of enterprise software development...",
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
    content: "Cloud-native architecture has become the gold standard for modern applications...",
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
    content: "User experience design in 2024 goes far beyond visual appeal...",
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
                <Typewriter
                  words={['INSIGHTS']}
                  loop={1}
                  cursor
                  cursorStyle='|'
                  typeSpeed={120}
                  deleteSpeed={80}
                />
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
                  className={`px-6 py-2 border font-light text-sm tracking-wider transition-all duration-300 ${
                    selectedCategory === category
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
                    <p className="text-white/70 font-light leading-relaxed">
                      {post.content}
                    </p>
                    
                    {/* Placeholder for full article content */}
                    <div className="mt-8 p-6 border border-white/10 bg-white/2">
                      <p className="text-white/60 font-light text-center">
                        Full article content would be loaded here from your CMS or markdown files.
                      </p>
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