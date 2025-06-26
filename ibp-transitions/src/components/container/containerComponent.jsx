import React, { useEffect, useRef } from 'react';
import './containerComponent.css';
import { gsap } from 'gsap';

function ContainerComponent() {
  const cardsRef = useRef([]);
  const leftPartsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      const leftPart = leftPartsRef.current[index];
      
      gsap.set(card, { width: 'var(--card-collapsed-width)' });
      gsap.set(leftPart, { width: '0%' });

      const expand = () => {
        gsap.to(card, { width: 'var(--card-expanded-width)', duration:1, ease: 'power2.out' });
        gsap.to(leftPart, { width: '50%', duration:1, ease: 'power2.out' });
      };

      const collapse = () => {
        gsap.to(card, { width: 'var(--card-collapsed-width)', duration: 1, ease: 'power2.inOut' });
        gsap.to(leftPart, { width: '0%', duration: 1, ease: 'power2.inOut' });
      };

      card.addEventListener('mouseenter', expand);
      card.addEventListener('mouseleave', collapse);

      return () => {
        card.removeEventListener('mouseenter', expand);
        card.removeEventListener('mouseleave', collapse);
      };
    });
  }, []);

  return (
    <div className="container">
      <div className="cards-flex">
        {[0, 1, 2].map((_, index) => (
          <div
            key={index}
            className="card"
            ref={(el) => (cardsRef.current[index] = el)}
          >
            <div
              className="card-left"
              ref={(el) => (leftPartsRef.current[index] = el)}
            >
              <img src="/your-image.svg" alt="Visual" className="card-image" />
            </div>
            <div className="card-right">
              <h3>Sponsored Benefits</h3>
              <p>Exciting offers for your lifestyles</p>
              <div className="arrow">&rarr;</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContainerComponent;
