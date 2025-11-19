# Animated Intro Screen – React + GSAP Timeline

This project recreates a cinematic space intro sequence using **React**, **GSAP Timeline**, and **responsive design techniques**.  
The animation contains a diagonal rocket launch, glowing star patches, faint background stars, and a sliding message box with an interactive button.

All animations are built using **gsap.timeline()**, complete with:

- `duration`
- `delay`
- `ease`
- `yoyo`
- `repeat`
- sequencing control

[click here to show deployed project](https://gsap-rocket-animation.netlify.app/)

---

## Features


### 1. Left & Right Star Patches (Nebula)
A GSAP-powered faint starfield is generated dynamically inside the full-screen animation holder:

- Circular random distribution

- Natural density falloff

- GSAP opacity yoyo 

- Unique blob-shaped containers

- Soft blur glow effect

**Star patch twinkles:**
```js
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
```
**2. Rocket Animation (Diagonal Launch)**

The rocket moves from bottom-left to top-right using a GSAP timeline with easing, delay, and duration:
```js
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
```
**Rocket Behavior:**
- Smooth acceleration
- Diagonal travel
- Fade-in takeoff
- Slight rotation lift
- Fully responsive (vw + vh units)

**3. Message Box Slide-In**

A centered glassmorphism message box slides from the right to the center using:
- GSAP Timeline
- Delay to sync with rocket
- Ease for smooth slide
- Fade + scale intro

```js
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
```
---
**Fully Responsive Design:**

This project uses:

- vw and vh units for animation
- Tablet-specific breakpoints (768px–1024px)
- Mobile (<768px) optimization
- Flexible star patch sizing
- Rocket resizing
- Message box scaling

These ensure perfect display on:

- Mobile phones
- Tablets
- Laptops
- and mostly all screens

**Technologies Used:**

- React
- GreenSock Animation Platform (for animations)
- Cascading Style Sheets
- deployed using netlify to direct view
---
**How to Run:**
```js
npm install
npm install gsap
npm start 
```
**Then open:**
```js
http://localhost:3000
```
---
**Deployed using netlifty**
```js
npm run dev
```
- for simple updation in future
