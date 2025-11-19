import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../style.css";

function Stars() {
  const containerRef = useRef(null);

  useEffect(() => {
    const starCount = 120;
    const container = containerRef.current;

    const width = container.offsetWidth;
    const height = container.offsetHeight;

    // Natural patch center for left side
    const centerX = width * 0.45;
    const centerY = height * 0.40;

    const radius = Math.min(width, height) * 0.75; 

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement("div");
      star.classList.add("star");

      // NATURAL DISTRIBUTION
      const angle = Math.random() * Math.PI * 2;
      const r = radius * Math.sqrt(Math.random()); 

      const x = centerX + r * Math.cos(angle);
      const y = centerY + r * Math.sin(angle);

      star.style.left = `${x}px`;
      star.style.top = `${y}px`;

      // random star size for realism
      const size = Math.random() * 2 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;

      container.appendChild(star);

      // twinkle effect
      gsap.fromTo(
        star,
        { opacity: Math.random() * 0.4 },
        {
          opacity: 1,
          duration: 1 + Math.random(),
          repeat: -1,
          yoyo: true
        }
      );
    }

    gsap.fromTo(
      containerRef.current,
      { x: 0, y: 0 },
      {
        x: -110, 
        y: -120,
        duration: 4,
        delay:1.2,
        ease: "power3.out"
      }
    );
  }, []);

  return <div ref={containerRef} className="stars-container"></div>;
}

export default Stars;
