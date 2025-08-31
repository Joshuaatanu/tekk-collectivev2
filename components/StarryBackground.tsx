"use client";
import { useEffect, useRef } from "react";

export default function StarryBackground() {
  const starryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createStars = () => {
      if (!starryRef.current) return;
      
      // Reduce star count for better performance
      const starCount = window.innerWidth < 768 ? 50 : 80;
      for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        const size = Math.random() * 2 + 0.5; // Smaller sizes for better performance
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 4}s`;
        star.style.animationDuration = `${Math.random() * 3 + 2}s`;
        
        starryRef.current.appendChild(star);
      }
    };

    // Throttle mouse movement for better performance
    let isThrottled = false;
    const handleMouseMove = (e: MouseEvent) => {
      if (!starryRef.current || isThrottled) return;
      
      isThrottled = true;
      requestAnimationFrame(() => {
        if (!starryRef.current) return;
        
        const stars = starryRef.current.querySelectorAll('.star');
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        
        // Calculate mouse position as percentage from center
        const mouseX = (clientX / innerWidth - 0.5);
        const mouseY = (clientY / innerHeight - 0.5);
        
        // Only animate every 4th star for better performance
        stars.forEach((star: Element, index: number) => {
          if (index % 4 !== 0) return; // Skip 3/4 of stars
          
          const htmlStar = star as HTMLElement;
          
          // Different layers move at different speeds
          const layer = index % 3;
          const speed = (layer + 1) * 0.2; // Reduced speed
          const maxMove = 10 + (layer * 3); // Reduced movement
          
          const x = mouseX * speed * maxMove;
          const y = mouseY * speed * maxMove;
          
          htmlStar.style.transform = `translate(${x}px, ${y}px)`;
        });
        
        isThrottled = false;
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