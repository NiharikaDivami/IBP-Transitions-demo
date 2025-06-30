import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
// import './scrollElements.css';

function ScrollElements() {
  const containerRef = useRef(null);

  useEffect(() => {
    const elements = containerRef.current.querySelectorAll('.scroll-name');
    gsap.set(elements, { opacity: 0 , y: +100 });
    gsap.to(elements, {
      y: 10,
      opacity: 1,
      duration: 1,
      stagger: 0.5,
      ease: 'power2.out',
    });

    // Cleanup function
    return () => {
      gsap.killTweensOf(elements);
    };
  }, []);

  return (
    <div id="scroll-elements-container" ref={containerRef}>
      <h1 className="scroll-name">Kasi</h1>
      <h1 className="scroll-name">Damu</h1>
      <h1 className="scroll-name">Harshith</h1>
      <h1 className="scroll-name">Niharika</h1>
    </div>
  );
}

export default ScrollElements;