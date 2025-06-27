import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './scrollElements.css';

function ScrollElements() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Wait until the component is mounted
    if (!containerRef.current) return;

    const elements = gsap.utils.toArray(containerRef.current.children);
    
    // Safeguard against empty elements
    if (elements.length === 0) return;

    gsap.from(elements, {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
      ease: "power3.out",
      delay: 0.2
    });

    // Cleanup function
    return () => {
      gsap.killTweensOf(elements);
    };
  }, []);

  return (
    <div ref={containerRef} className="scroll-container">
      <h1 className="scroll-name">Kasi</h1>
      <h1 className="scroll-name">Damu</h1>
      <h1 className="scroll-name">Harshith</h1>
      <h1 className="scroll-name">Niharika</h1>
    </div>
  );
}

export default ScrollElements;