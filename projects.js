const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".carousel--button-right");
const prevButton = document.querySelector(".carousel--button-left");
const dotsNav = document.querySelector(".carousel-nav");
const dots = Array.from(dotsNav.children);
const slideWidth = slides[0].getBoundingClientRect().width;
const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};
slides.forEach(setSlidePosition);
const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = "translateX(-" + targetSlide.style.left + ")";
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};
const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove("current-slide");
  targetDot.classList.add("current-slide");
};
const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
  if (targetIndex === 0) {
    prevButton.classList.add("is-hidden");
    nextButton.classList.remove("is-hidden");
  } else if (targetIndex === slides.length - 1) {
    prevButton.classList.remove("is-hidden");
    nextButton.classList.add("is-hidden");
  } else {
    prevButton.classList.remove("is-hidden");
    nextButton.classList.remove("is-hidden");
  }
};
prevButton.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current-slide");
  const prevSlide = currentSlide.previousElementSibling;
  const currentDot = dotsNav.querySelector(".current-slide");
  const prevDot = currentDot.previousElementSibling;
  const prevIndex = slides.findIndex((slide) => slide === prevSlide);
  moveToSlide(track, currentSlide, prevSlide);
  updateDots(currentDot, prevDot);
  hideShowArrows(slides, prevButton, nextButton, prevIndex);
});
nextButton.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current-slide");
  const nextSlide = currentSlide.nextElementSibling;
  const currentDot = dotsNav.querySelector(".current-slide");
  const nextDot = currentDot.nextElementSibling;
  const nextIndex = slides.findIndex((slide) => slide === nextSlide);
  moveToSlide(track, currentSlide, nextSlide);
  updateDots(currentDot, nextDot);
  hideShowArrows(slides, prevButton, nextButton, nextIndex);
});
dotsNav.addEventListener("click", (e) => {
  const targetDot = e.target.closest("button");
  if (!targetDot) return;
  const currentSlide = track.querySelector(".current-slide");
  const currentDot = dotsNav.querySelector(".current-slide");
  const targetIndex = dots.findIndex((dot) => dot === targetDot);
  const targetSlide = slides[targetIndex];
  moveToSlide(track, currentSlide, targetSlide);
  updateDots(currentDot, targetDot);
  hideShowArrows(slides, prevButton, nextButton, targetIndex);
});

///  Projects

gsap.from(".extra", {
  scrollTrigger: {
    trigger: ".main-exhibition",
    start: -50, // when the top of the trigger hits the top of the viewport
    end: "+=300", // end after scrolling 100px beyond the start
    // markers: true
    scrub: 1,
  },
  stagger: { amount: 0.5 },
  scale: 0.8,
  duration: 1,
});

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".boy-fraternity-title",
    //   markers: true,
  },
});

tl.from("main", { x: -200, opacity: 0.5, duration: 1.5 })
  .from(".App-logo", { y: -200, opacity: 0.5, duration: 1.5 })
  .from(".list-item", { y: -200, opacity: 0.5, duration: 1.5 })
  .from(".extra", { x: 200, opacity: 0, duration: 1.5 })
  .from(".copyright", { y: 10, opacity: 0, duration: 1.5 });

gsap.from(".footer-container", {
  scrollTrigger: {
    trigger: ".main-exhibition",
    start: "top top", // when the top of the trigger hits the top of the viewport
    end: "+=300", // end after scrolling 100px beyond the start
    //  markers: true,
    scrub: 1,
  },
  stagger: { amount: 0.5 },
  scale: 0.6,
  duration: 1,
  ease: "power1.inOut",
});

gsap.from(".thelastburial-paragraph", {
  scrollTrigger: {
    trigger: ".boy-fraternity-div",
    start: -50, // when the top of the trigger hits the top of the viewport
    end: "+=300", // end after scrolling 100px beyond the start
    // markers: true
    scrub: 1,
  },
  stagger: { amount: 0.5 },
  scale: 0.95,
  duration: 1,
  ease: "power1.inOut",
});
