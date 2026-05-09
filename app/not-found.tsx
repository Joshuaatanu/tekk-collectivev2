import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import UnicornBackground from "@/components/UnicornBackground";

export const metadata = {
  title: "Page not found",
  description:
    "The page you're looking for doesn't exist. Head back to the homepage or browse our services, work, or contact pages."
};

export default function NotFound() {
  return (
    <div className="bg-black min-h-screen overflow-hidden">
      <UnicornBackground />
      <section className="relative min-h-screen flex items-center justify-center px-6">
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

        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <div className="mb-12 animate-scale-in">
            <span className="text-white/40 text-xs font-light tracking-[0.3em] uppercase mb-6 block">
              404
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-thin text-white tracking-wider mb-8">
              <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
                Page not found
              </span>
            </h1>
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-px bg-white/30"></div>
              <div className="mx-6 w-2 h-2 bg-white/40 rounded-full"></div>
              <div className="w-16 h-px bg-white/30"></div>
            </div>
            <p className="text-xl md:text-2xl text-white/70 font-light tracking-wide mb-12">
              Whatever you were looking for, it isn&apos;t here. Try one of these instead.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-12">
              <a
                href="/"
                className="group px-6 py-3 border border-white/20 text-white/70 font-light text-sm hover:border-white/40 hover:text-white transition-all duration-300"
              >
                Home
              </a>
              <a
                href="/services"
                className="group px-6 py-3 border border-white/20 text-white/70 font-light text-sm hover:border-white/40 hover:text-white transition-all duration-300"
              >
                Services
              </a>
              <a
                href="/project"
                className="group px-6 py-3 border border-white/20 text-white/70 font-light text-sm hover:border-white/40 hover:text-white transition-all duration-300"
              >
                Projects
              </a>
              <a
                href="/contact"
                className="group px-6 py-3 border border-white/20 text-white/70 font-light text-sm hover:border-white/40 hover:text-white transition-all duration-300"
              >
                Contact
              </a>
            </div>

            <p className="text-sm text-white/40 font-light">
              If you arrived here via a link from somewhere else,
              <a href="mailto:atanu@tekkcollective.com" className="underline hover:text-white/70 ml-1">
                let us know
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
