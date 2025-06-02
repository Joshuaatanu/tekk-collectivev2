"use client";
import { useEffect, useRef } from "react";

export default function StarryBackground() {
  const starryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createStars = () => {
      if (!starryRef.current) return;
      
      const starCount = 100; // Increased for all pages
      for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        const size = Math.random() * 3 + 0.5; // Varied sizes
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 4}s`;
        star.style.animationDuration = `${Math.random() * 3 + 2}s`;
        
        starryRef.current.appendChild(star);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!starryRef.current) return;
      
      const stars = starryRef.current.querySelectorAll('.star');
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Calculate mouse position as percentage from center
      const mouseX = (clientX / innerWidth - 0.5);
      const mouseY = (clientY / innerHeight - 0.5);
      
      stars.forEach((star: Element, index: number) => {
        const htmlStar = star as HTMLElement;
        
        // Different layers move at different speeds
        const layer = index % 4;
        const speed = (layer + 1) * 0.3;
        const maxMove = 15 + (layer * 5);
        
        const x = mouseX * speed * maxMove;
        const y = mouseY * speed * maxMove;
        
        htmlStar.style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    const handleResize = () => {
      // Recalculate star positions on resize
      if (!starryRef.current) return;
      const stars = starryRef.current.querySelectorAll('.star');
      stars.forEach((star: Element) => {
        const htmlStar = star as HTMLElement;
        htmlStar.style.left = `${Math.random() * 100}%`;
        htmlStar.style.top = `${Math.random() * 100}%`;
      });
    };

    createStars();
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <div ref={starryRef} className="starry-bg"></div>;
} 