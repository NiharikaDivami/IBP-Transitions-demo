import React, { useRef } from "react";
import { CardsContainer, Card } from "./styles";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CardsTransition = () => {
  const cards = [1, 2, 3];
  const cardRefs = useRef([]);
  const containerRef = useRef(null);

  const positionMap = {
    0: { x: "-10vw", y: "70vh", rotation: -6 },
    1: { x: "-7vw", y: "60vh", rotation: 0 },
    2: { x: "-5vw", y: "50vh", rotation: +6 },
  };

  useGSAP(() => {
    if (!cardRefs.current) return;
    gsap.set(cardRefs.current, {
      x: (i) => 0,
      y: (i) => 0,
      rotation: (i) => 0,
      opacity: 0
    });

    gsap.to(cardRefs.current, {
      x: (i) => positionMap[i].x,
      y: (i) => positionMap[i].y,
      rotation: (i) => positionMap[i].rotation,
      opacity: 1,
      ease: "power1.inOut",
      stagger: 0,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom 60%",
        scrub: true,
        markers: false
      }
    });
  }, [cardRefs]);

  return (
    <CardsContainer ref={containerRef}>
      {cards.map((card, index) => (
        <Card
          key={index}
          className={`card${index}`}
          ref={(el) => {
            if (el) {
              cardRefs.current[index] = el;
            }
          }}
        >
          <h1>Hello{index}</h1>
        </Card>
      ))}
    </CardsContainer>
  );
};

export default CardsTransition;