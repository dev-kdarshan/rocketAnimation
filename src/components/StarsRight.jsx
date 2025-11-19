import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../style.css";

function StarsRight() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const starCount = 80;

    // GET container size
    const width = container.offsetWidth;
    const height = container.offsetHeight;

    // PATCH CENTER (inside this container)
    const centerX = width * 0.55;  
    const centerY = height * 0.40; 

    const radius = Math.min(width, height) * 0.75; 

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement("div");
      star.classList.add("star");

      // NATURAL CLUSTER DISTRIBUTION
      const angle = Math.random() * Math.PI * 2;
      const r = radius * Math.sqrt(Math.random()); 

      const x = centerX + r * Math.cos(angle);
      const y = centerY + r * Math.sin(angle);

      // place in container
      star.style.left = `${x}px`;
      star.style.top = `${y}px`;

      // random star size
      const size = Math.random() * 2 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;

      container.appendChild(star);

      // twinkle animation
      gsap.fromTo(
        star,
        { opacity: Math.random() * 0.4 },
        {
          opacity: 1,
          duration: 1 + Math.random(),
          repeat: -1,
          yoyo: true,
        }
      );

          gsap.fromTo(
            containerRef.current,
            { x: 0, y: 0 },
            {
              x: -50, 
              y: -50,
              duration: 3,
              delay:1.2,
              ease: "power3.out"
            }
          );

    }
  }, []);

  return <div ref={containerRef} className="stars-container-right"></div>;
}

export default StarsRight;