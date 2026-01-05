"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import UnicornBackground from "@/components/UnicornBackground";
import React, { useState } from "react";

function printFormattedDate(date: Date): string {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const monthsOfYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayOfWeek = daysOfWeek[date.getDay()];
  const month = monthsOfYear[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  return `${dayOfWeek}, ${month} ${day}, ${year}`;
}

const date = new Date();
const formattedDate = printFormattedDate(date);

export default function Contact() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    subject: '',
    message: ''
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '7e09478d-d697-405e-b85e-36cb81615d5c',
          ...formData
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ email: '', name: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFocus = (fieldName: string) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

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
            backgroundSize: '50px 50px',
            animation: 'grid-pulse 4s ease-in-out infinite'
          }}></div>
        </div>

        {/* Blurred Background Layer */}
        <div className="absolute inset-0 backdrop-blur-sm bg-black/12"></div>


        <Navbar />

        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <div className="mb-12 animate-scale-in">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-thin text-white tracking-wider mb-8">
              <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent animate-text-shimmer bg-[length:200%_100%]">
                CONNECT
              </span>
            </h1>
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-px bg-white/30 animate-line-expand"></div>
              <div className="mx-6 w-2 h-2 bg-white/40 rounded-full animate-minimal-pulse"></div>
              <div className="w-16 h-px bg-white/30 animate-line-expand"></div>
            </div>
            <p className="text-xl md:text-2xl text-white/70 font-light tracking-wide max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.5s' }}>
              Let's discuss how we can transform your business through technology
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-12 text-white/50 font-light text-sm tracking-wider animate-slide-up" style={{ animationDelay: '1s' }}>
            <span className="animate-text-shimmer bg-gradient-to-r from-white/50 to-white/70 bg-clip-text text-transparent bg-[length:200%_100%]">
              {formattedDate}
            </span>
            <div className="w-px h-4 bg-white/20 hidden md:block animate-line-expand"></div>
            <span className="hover:text-white/70 transition-colors duration-300">Available 24/7</span>
            <div className="w-px h-4 bg-white/20 hidden md:block animate-line-expand"></div>
            <span className="hover:text-white/70 transition-colors duration-300">Global Reach</span>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center space-y-2">
            <div className="w-px h-16 bg-gradient-to-b from-white/50 to-transparent"></div>
            <div className="w-3 h-3 border border-white/50 rounded-full animate-minimal-pulse"></div>
            <span className="text-white/40 text-xs tracking-wider uppercase">Contact</span>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Form Section */}
      <section className="py-32 px-6 relative">
        {/* Section Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-white/10 rounded-full animate-gentle-float"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Enhanced Contact Form */}
            <div className="space-y-8 animate-slide-right">
              <div className="mb-12">
                <h2 className="text-4xl md:text-5xl font-thin text-white mb-6 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
                  Get in Touch
                </h2>
                <div className="w-16 h-px bg-white/30 animate-line-expand"></div>
              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-8"
                noValidate
              >
                {submitStatus === 'success' && (
                  <div className="p-4 border border-green-500/30 bg-green-500/10 text-green-400 rounded" role="alert">
                    <p className="font-light">Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.</p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 border border-red-500/30 bg-red-500/10 text-red-400 rounded" role="alert">
                    <p className="font-light">Sorry, there was an error sending your message. Please try again or contact us directly.</p>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="group relative">
                    <label htmlFor="name" className="sr-only">Full Name</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onFocus={() => handleFocus('name')}
                      onBlur={handleBlur}
                      placeholder="Full Name"
                      required
                      aria-invalid={errors.name ? 'true' : 'false'}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      className={`w-full bg-transparent border-b text-white placeholder-white/40 py-4 focus:outline-none transition-all duration-500 font-light hover:border-white/30 focus-ring ${errors.name ? 'border-red-500/50 focus:border-red-500' : 'border-white/20 focus:border-brand-primary'
                        }`}
                    />
                    <div className={`absolute bottom-0 left-0 h-px transition-all duration-500 ${focusedField === 'name'
                        ? `w-full ${errors.name ? 'bg-red-500' : 'bg-brand-primary'}`
                        : 'w-0'
                      }`}></div>
                    {errors.name && (
                      <p id="name-error" className="text-red-400 text-sm mt-2 font-light" role="alert">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div className="group relative">
                    <label htmlFor="email" className="sr-only">Email Address</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => handleFocus('email')}
                      onBlur={handleBlur}
                      placeholder="Email Address"
                      required
                      aria-invalid={errors.email ? 'true' : 'false'}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      className={`w-full bg-transparent border-b text-white placeholder-white/40 py-4 focus:outline-none transition-all duration-500 font-light hover:border-white/30 focus-ring ${errors.email ? 'border-red-500/50 focus:border-red-500' : 'border-white/20 focus:border-brand-primary'
                        }`}
                    />
                    <div className={`absolute bottom-0 left-0 h-px transition-all duration-500 ${focusedField === 'email'
                        ? `w-full ${errors.email ? 'bg-red-500' : 'bg-brand-primary'}`
                        : 'w-0'
                      }`}></div>
                    {errors.email && (
                      <p id="email-error" className="text-red-400 text-sm mt-2 font-light" role="alert">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="group relative">
                  <label htmlFor="subject" className="sr-only">Subject</label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('subject')}
                    onBlur={handleBlur}
                    placeholder="Subject"
                    required
                    aria-invalid={errors.subject ? 'true' : 'false'}
                    aria-describedby={errors.subject ? 'subject-error' : undefined}
                    className={`w-full bg-transparent border-b text-white placeholder-white/40 py-4 focus:outline-none transition-all duration-500 font-light hover:border-white/30 focus-ring ${errors.subject ? 'border-red-500/50 focus:border-red-500' : 'border-white/20 focus:border-brand-primary'
                      }`}
                  />
                  <div className={`absolute bottom-0 left-0 h-px transition-all duration-500 ${focusedField === 'subject'
                      ? `w-full ${errors.subject ? 'bg-red-500' : 'bg-brand-primary'}`
                      : 'w-0'
                    }`}></div>
                  {errors.subject && (
                    <p id="subject-error" className="text-red-400 text-sm mt-2 font-light" role="alert">
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div className="group relative">
                  <label htmlFor="message" className="sr-only">Tell us about your project</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('message')}
                    onBlur={handleBlur}
                    placeholder="Tell us about your project"
                    required
                    rows={6}
                    aria-invalid={errors.message ? 'true' : 'false'}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    className={`w-full bg-transparent border-b text-white placeholder-white/40 py-4 focus:outline-none transition-all duration-500 font-light resize-none hover:border-white/30 focus-ring ${errors.message ? 'border-red-500/50 focus:border-red-500' : 'border-white/20 focus:border-brand-primary'
                      }`}
                  ></textarea>
                  <div className={`absolute bottom-0 left-0 h-px transition-all duration-500 ${focusedField === 'message'
                      ? `w-full ${errors.message ? 'bg-red-500' : 'bg-brand-primary'}`
                      : 'w-0'
                    }`}></div>
                  {errors.message && (
                    <p id="message-error" className="text-red-400 text-sm mt-2 font-light" role="alert">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`group px-12 py-4 border font-light tracking-wide relative overflow-hidden focus-ring transition-all duration-700 ${isSubmitting
                      ? 'border-white/20 text-white/50 cursor-not-allowed'
                      : 'border-brand-primary/50 bg-brand-gradient text-white hover:bg-brand-secondary hover:border-brand-secondary shadow-brand-glow hover:shadow-lg'
                    }`}
                  aria-describedby="submit-status"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </span>
                  {!isSubmitting && (
                    <div className="absolute inset-0 bg-brand-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                  )}
                </button>
                <div id="submit-status" className="sr-only" aria-live="polite">
                  {isSubmitting ? 'Sending your message...' : submitStatus === 'success' ? 'Message sent successfully!' : submitStatus === 'error' ? 'Error sending message' : ''}
                </div>
              </form>
            </div>

            {/* Enhanced Contact Information */}
            <div className="space-y-12 animate-slide-left">
              <div className="mb-12">
                <h2 className="text-4xl md:text-5xl font-thin text-white mb-6 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
                  Contact Information
                </h2>
                <div className="w-16 h-px bg-white/30 animate-line-expand"></div>
              </div>

              <div className="space-y-12">
                <div className="group relative p-6 border border-white/10 hover:border-white/20 transition-all duration-500 hover:bg-white/2">
                  <h3 className="text-white/50 font-light text-sm tracking-wider uppercase mb-4 group-hover:text-white/70 transition-colors duration-300">
                    Email
                  </h3>
                  <p className="text-white font-light text-xl group-hover:text-white/90 transition-colors duration-300">
                    atanu@tekkcollective.com
                  </p>
                  <div className="w-8 h-px bg-white/20 mt-4 group-hover:w-20 transition-all duration-700"></div>

                  {/* Corner accent */}
                  <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-white/10 group-hover:border-white/30 transition-colors duration-300"></div>
                </div>

                <div className="group relative p-6 border border-white/10 hover:border-white/20 transition-all duration-500 hover:bg-white/2">
                  <h3 className="text-white/50 font-light text-sm tracking-wider uppercase mb-4 group-hover:text-white/70 transition-colors duration-300">
                    Phone
                  </h3>
                  <p className="text-white font-light text-xl group-hover:text-white/90 transition-colors duration-300">
                    +447375433203
                  </p>
                  <div className="w-8 h-px bg-white/20 mt-4 group-hover:w-20 transition-all duration-700"></div>

                  {/* Corner accent */}
                  <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-white/10 group-hover:border-white/30 transition-colors duration-300"></div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Response Time Section */}
      <section className="py-32 px-6 relative">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent animate-line-expand"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent animate-line-expand" style={{ animationDelay: '1s' }}></div>

          {/* Floating response indicators */}
          <div className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-white/5 rounded-full animate-glow-pulse"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="animate-slide-up">
            <h2 className="text-4xl md:text-6xl font-thin text-white mb-8 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
              Quick Response
            </h2>
            <p className="text-white/60 text-xl font-light mb-12 max-w-2xl mx-auto">
              We typically respond to all inquiries within 24 hours. For urgent matters, please call us directly.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { time: "< 1 Hour", label: "Emergency Support", delay: "0s" },
                { time: "< 24 Hours", label: "General Inquiries", delay: "0.2s" },
                { time: "< 48 Hours", label: "Project Proposals", delay: "0.4s" }
              ].map((response, index) => (
                <div key={index} className="text-center group animate-slide-up" style={{ animationDelay: response.delay }}>
                  <div className="text-3xl md:text-4xl font-thin text-white mb-4 group-hover:text-white/80 transition-colors duration-500 bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent animate-text-shimmer bg-[length:200%_100%]">
                    {response.time}
                  </div>
                  <div className="text-white/50 font-light tracking-wider uppercase text-sm group-hover:text-white/70 transition-colors duration-500">
                    {response.label}
                  </div>
                  <div className="w-8 h-px bg-white/20 mx-auto mt-4 group-hover:w-20 transition-all duration-700"></div>

                  {/* Floating indicator */}
                  <div className="absolute -top-2 -right-2 w-2 h-2 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-minimal-pulse"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-6 relative">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <div className="absolute top-1/3 left-1/4 w-20 h-20 border border-white/5 rounded-full animate-gentle-float"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-6xl font-thin text-white mb-6 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-px bg-white/30"></div>
              <div className="mx-6 w-2 h-2 bg-white/40 rounded-full"></div>
              <div className="w-16 h-px bg-white/30"></div>
            </div>
            <p className="text-xl text-white/70 font-light max-w-2xl mx-auto">
              Common questions about our services, process, and how we can help your business
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "What services does Tekk Collective offer?",
                answer: "We provide comprehensive technology consulting services including strategy consulting, custom software development, cloud solutions, data & analytics, cybersecurity, and digital innovation. Our team specializes in helping businesses transform through technology while focusing on measurable business outcomes."
              },
              {
                question: "How long does a typical project take?",
                answer: "Project timelines vary based on scope and complexity. Strategy consulting projects typically take 4-8 weeks, while software development projects range from 8-24 weeks. We provide detailed timelines during our initial consultation and maintain transparent communication throughout the project lifecycle."
              },
              {
                question: "Do you work with startups or just large enterprises?",
                answer: "We work with companies of all sizes, from early-stage startups to Fortune 500 enterprises. Our approach scales to match your needs, budget, and growth stage. We believe great technology solutions should be accessible to businesses at every level."
              },
              {
                question: "What makes Tekk Collective different from other consulting firms?",
                answer: "Our unique combination of technical expertise, design thinking, and business acumen sets us apart. We don't just deliver technology—we ensure it drives real business value. Our team includes experienced developers, designers, and strategists who work collaboratively to solve complex challenges."
              },
              {
                question: "How do you ensure project success?",
                answer: "We use proven methodologies including agile development, regular client communication, milestone-based delivery, and continuous testing. Our 95% project success rate comes from clear expectation setting, transparent processes, and our commitment to delivering measurable results."
              },
              {
                question: "Can you work with our existing team and tools?",
                answer: "Absolutely. We excel at integrating with existing teams and workflows. We can work within your current processes, tools, and methodologies, or help you adopt new ones that better serve your goals. Collaboration and knowledge transfer are core to our approach."
              },
              {
                question: "What if our requirements change during the project?",
                answer: "We embrace change through agile methodologies. When requirements evolve, we work with you to assess the impact and adjust scope, timeline, and resources accordingly. Our flexible approach ensures we deliver what you actually need, not just what was originally specified."
              },
              {
                question: "Do you provide ongoing support after project completion?",
                answer: "Yes, we offer various support packages including maintenance, updates, monitoring, feature enhancements, and technical support. We believe in long-term partnerships and are committed to your continued success beyond project delivery."
              },
              {
                question: "How do you handle data security and confidentiality?",
                answer: "Security and confidentiality are paramount. We sign NDAs, follow industry-standard security practices, implement secure development methodologies, and can work within your existing security frameworks. All intellectual property and work product belongs to you."
              },
              {
                question: "What's the best way to get started?",
                answer: "Start with our free 30-minute consultation where we'll discuss your goals, challenges, and explore how we can help. From there, we can provide a detailed assessment and proposal tailored to your specific needs. Contact us using the form above or email us directly."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-black/30 border border-white/10 p-8 hover:border-white/20 transition-all duration-500 group animate-scale-in" style={{ animationDelay: `${index * 0.05}s` }}>
                <h3 className="text-xl font-light text-white mb-4 group-hover:text-white/90 transition-colors duration-300">
                  {faq.question}
                </h3>
                <p className="text-white/60 font-light leading-relaxed group-hover:text-white/70 transition-colors duration-300">
                  {faq.answer}
                </p>

                {/* Corner accent */}
                <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-white/10 group-hover:border-white/30 transition-colors duration-500"></div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16 animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <p className="text-white/60 font-light mb-6">
              Still have questions? We're here to help.
            </p>
            <a
              href="mailto:atanu@tekkcollective.com"
              className="inline-flex items-center px-8 py-3 border border-white/30 text-white font-light hover:bg-white hover:text-black transition-all duration-500 group"
            >
              <span className="relative z-10">Get in Touch</span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
