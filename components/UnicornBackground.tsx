"use client";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    UnicornStudio?: {
      isInitialized: boolean;
      init: () => void;
    };
  }
}

export default function UnicornBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    // Only load the script once
    if (scriptLoadedRef.current) return;
    scriptLoadedRef.current = true;

    if (!window.UnicornStudio) {
      window.UnicornStudio = { isInitialized: false, init: () => {} };
      
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.0/dist/unicornStudio.umd.js";
      script.onload = function () {
        if (window.UnicornStudio && !window.UnicornStudio.isInitialized) {
          window.UnicornStudio.init();
          window.UnicornStudio.isInitialized = true;
        }
      };
      document.head.appendChild(script);
    } else if (!window.UnicornStudio.isInitialized) {
      window.UnicornStudio.init();
      window.UnicornStudio.isInitialized = true;
    }
  }, []);

  return (
    <div 
      ref={containerRef}
      className="unicorn-bg"
    >
      <div 
        data-us-project="F26JfoJhL6uz8mcGEtFd"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
}
