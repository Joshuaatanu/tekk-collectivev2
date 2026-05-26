"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);
  const [displayChildren, setDisplayChildren] = useState(children);
  const pathname = usePathname();

  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      setDisplayChildren(children);
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [pathname, children]);

  return (
    <>
      {/* Page Transition Overlay */}
      <div className={`fixed inset-0 z-50 pointer-events-none transition-all duration-500 ${isLoading
          ? 'opacity-100 visible'
          : 'opacity-0 invisible'
        }`}>
        {/* Sliding Panels */}
        <div className={`absolute inset-0 bg-black transform transition-transform duration-700 ease-out ${isLoading ? 'translate-x-0' : 'translate-x-full'
          }`} style={{ transitionDelay: '0ms' }}>
          {/* Static Stars During Transition - using deterministic positions to avoid hydration mismatch */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => {
              // Use index-based deterministic values instead of random
              const size = 1 + (i % 3);
              const left = (i * 17 + 5) % 100;
              const top = (i * 23 + 7) % 100;
              return (
                <div
                  key={i}
                  className="absolute bg-white rounded-full opacity-60"
                  style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    left: `${left}%`,
                    top: `${top}%`,
                  }}
                />
              );
            })}
          </div>

          {/* Loading Content */}
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <div className="mb-6">
                <div className="w-1 h-16 bg-white/60 mx-auto animate-pulse"></div>
              </div>
              <p className="text-white/60 text-sm tracking-wider font-light">
                Transitioning...
              </p>
            </div>
          </div>
        </div>

        {/* Secondary Panel */}
        <div className={`absolute inset-0 bg-black/80 backdrop-blur-sm transform transition-transform duration-500 ease-out ${isLoading ? 'translate-x-0' : 'translate-x-full'
          }`} style={{ transitionDelay: '100ms' }}></div>
      </div>

      {/* Page Content with Fade */}
      <div className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'
        }`}>
        {displayChildren}
      </div>
    </>
  );
} 