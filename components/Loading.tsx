"use client";
import { useEffect, useState } from "react";

export default function Loading() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      {/* Animated stars */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-twinkle"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 2 + 2}s`
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 text-center">
        {/* Logo or Brand */}
        <div className="mb-8 animate-pulse">
          <h1 className="text-4xl md:text-6xl font-thin text-white tracking-wider">
            TEKK COLLECTIVE
          </h1>
          <div className="w-32 h-px bg-white/30 mx-auto mt-4"></div>
        </div>
        
        {/* Loading Progress */}
        <div className="w-64 h-px bg-white/20 mx-auto mb-4 overflow-hidden">
          <div 
            className="h-full bg-white transition-all duration-300 ease-out"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
        
        <p className="text-white/60 text-sm tracking-wider">
          Loading Experience... {Math.round(Math.min(progress, 100))}%
        </p>
      </div>
    </div>
  );
} 