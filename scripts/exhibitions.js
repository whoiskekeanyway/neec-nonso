gsap.from(".extra", {
  scrollTrigger: {
    trigger: ".items-container",
    start: -50,
    end: "+=300",
    scrub: 1,
  },
  stagger: { amount: 0.5 },
  scale: 0.8,
  duration: 1,
  ease: "power1.inOut",
}),
  gsap.from(".footer-container", {
    scrollTrigger: {
      trigger: ".items-container",
      start: -50,
      end: "+=300",
      scrub: 1,
    },
    stagger: { amount: 0.5 },
    scale: 0.5,
    duration: 1,
    ease: "power1.inOut",
  }),
  gsap.from(".items-container", {
    scrollTrigger: {
      trigger: ".items-container",
      start: -100,
      end: "+=300",
      scrub: 1,
    },
    stagger: { amount: 0.5 },
    scale: 0.9,
    duration: 1,
    ease: "power1.inOut",
  });
let tl = gsap.timeline({ scrollTrigger: { trigger: ".items-container" } });
tl.from(".items-container", { x: -200, opacity: 0.5, duration: 1.5 })
  .from(".App-logo", { y: -200, opacity: 0.5, duration: 1.5 })
  .from(".list-item", { y: -200, opacity: 0.5, duration: 1.5 })
  .from(".extra", { x: 200, opacity: 0, duration: 1.5 })
  .from(".copyright", { y: 10, opacity: 0, duration: 1.5 });
