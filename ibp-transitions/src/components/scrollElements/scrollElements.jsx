import React, { useEffect } from 'react';
import gsap from 'gsap';

function ScrollElements() {
  useEffect(() => {
    gsap.from(".scroll-name", {
      y: -300,
      opacity: 1,
      duration: 1,
      stagger: 0.5,
    });
  }, []);

  return (
    <div id="scroll-elements-container">
      <h1 className="scroll-name">Kasi</h1>
      <h1 className="scroll-name">Damu</h1>
      <h1 className="scroll-name">Harshith</h1>
      <h1 className="scroll-name">Niharika</h1>
    </div>
  );
}

export default ScrollElements;
