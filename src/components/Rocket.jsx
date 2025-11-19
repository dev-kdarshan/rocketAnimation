import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import rocketImg from "../assets/rocket.png"; 
import "../style.css";

function Rocket() {
  const rocketRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 2, ease: "power3.inOut" }
    });

tl.fromTo(
  rocketRef.current,
  {
    x: "-30vw",  
    y: "100vh",   
    opacity: 0,
  },
  {
    x: "92vw",
    y: "-22vh",
    opacity: 1,
    duration: 4,
    ease: "power2.inOut"
  }
);



  }, []);

  return (
    <img
      ref={rocketRef}
      src={rocketImg}
      alt="rocket"
      className="rocket"
      
    />
  );
}

export default Rocket;