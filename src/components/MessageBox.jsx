import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../style.css";

export default function MessageBox() {
  const boxRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      boxRef.current,
      {
        x: "120vw",   
        opacity: 0,
        scale: 0.8
      },
      {
        x: "-50%",    
        opacity: 1,
        scale: 1,
        duration: 3,
        delay: 1.5
      }
    );
  }, []);

  return (
    <div className="message-box" ref={boxRef}>
      <h2>Lorem ipsum</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <button className="msg-btn">Continue →</button>
    </div>
  );
}
