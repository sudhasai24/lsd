import React, { useEffect, useRef } from 'react';

const CosmicBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clear any existing stars
    container.innerHTML = '';

    // Create stars
    const numStars = window.innerWidth < 768 ? 100 : 200;
    
    for (let i = 0; i < numStars; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      
      // Random size between 1px and 3px
      const size = Math.random() * 2 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      
      // Random position
      star.style.left = `${Math.random() * 100}vw`;
      star.style.top = `${Math.random() * 100}vh`;
      
      // Random animation delay
      star.style.animationDelay = `${Math.random() * 10}s`;
      star.style.animationDuration = `${Math.random() * 10 + 10}s`;
      
      // Random opacity
      star.style.opacity = `${Math.random() * 0.7 + 0.3}`;
      
      container.appendChild(star);
    }

    // Add a few larger stars or planets
    for (let i = 0; i < 5; i++) {
      const planet = document.createElement('div');
      planet.classList.add('star');
      
      // Larger size for planets
      const size = Math.random() * 4 + 3;
      planet.style.width = `${size}px`;
      planet.style.height = `${size}px`;
      
      // Random position
      planet.style.left = `${Math.random() * 100}vw`;
      planet.style.top = `${Math.random() * 100}vh`;
      
      // Add a subtle glow effect
      planet.style.boxShadow = `0 0 ${size * 2}px rgba(255, 255, 255, 0.8)`;
      
      container.appendChild(planet);
    }

    // Parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      const stars = container.querySelectorAll('.star');
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;
      
      stars.forEach((star, index) => {
        const depth = index % 5 + 1; // 1-5 depth layers
        const moveX = (mouseX - 0.5) * depth * 2;
        const moveY = (mouseY - 0.5) * depth * 2;
        
        const starEl = star as HTMLElement;
        starEl.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-radial from-space-800 via-space-900 to-black"></div>
      <div className="absolute top-1/4 left-1/3 w-1/2 h-1/2 bg-nebula-900/20 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-1/4 right-1/3 w-1/3 h-1/3 bg-nebula-700/10 blur-[100px] rounded-full"></div>
    </div>
  );
};

export default CosmicBackground;