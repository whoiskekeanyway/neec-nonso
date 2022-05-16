
// Extra Animation in and out
gsap.from(".extra", {
  scrollTrigger: {
    trigger: ".items-container",
    start: -50, // when the top of the trigger hits the top of the viewport
    end: "+=300", // end after scrolling 100px beyond the start
    // markers: true
    scrub: 1,
  },
  stagger: { amount: 0.5 },
  scale: 0.8,
  duration: 1,
  ease: "power1.inOut",
});

// Footer animation in and out

gsap.from(".footer-container", {
  scrollTrigger: {
    trigger: ".items-container",
    start: -50, // when the top of the trigger hits the top of the viewport
    end: "+=300", // end after scrolling 100px beyond the start
    // markers: true
    scrub: 1,
  },
  stagger: { amount: 0.5 },
  scale: 0.5,
  duration: 1,
  ease: "power1.inOut",
});

// Main exhibition animation in and out
gsap.from(".items-container", {
  scrollTrigger: {
    trigger: ".items-container",
    start: -100, // when the top of the trigger hits the top of the viewport
    end: "+=300", // end after scrolling 100px beyond the start
    // markers: true
    scrub: 1,
  },
  stagger: { amount: 0.5 },
  scale: 0.9,
  duration: 1,
  ease: "power1.inOut",
});

// Timeline animation of the exhibition content on the whole page
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".items-container",
    //   markers: true,
  },
});

tl.from(".items-container", { x: -200, opacity: 0.5, duration: 1.5 })
  .from(".App-logo", { y: -200, opacity: 0.5, duration: 1.5 })
  .from(".list-item", { y: -200, opacity: 0.5, duration: 1.5 })
  .from(".extra", { x: 200, opacity: 0, duration: 1.5 })
  .from(".copyright", { y: 10, opacity: 0, duration: 1.5 });




