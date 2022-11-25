const track = document.querySelector(".carousel-track");
slides = Array.from(track.children);
nextButton = document.querySelector(".carousel--button-right");
prevButton = document.querySelector(".carousel--button-left");
dotsNav = document.querySelector(".carousel-nav");
dots = Array.from(dotsNav.children);
(slideWidth = slides[0].getBoundingClientRect().width),
  (setSlidePosition = (e, t) => {
    e.style.left = slideWidth * t + "px";
  });
slides.forEach(setSlidePosition);
const moveToSlide = (e, t, r) => {
  (e.style.transform = "translateX(-" + r.style.left + ")"),
    t.classList.remove("current-slide"),
    r.classList.add("current-slide");
};
updateDots = (e, t) => {
  e.classList.remove("current-slide"), t.classList.add("current-slide");
};
hideShowArrows = (e, t, r, s) => {
  0 === s
    ? (t.classList.add("is-hidden"), r.classList.remove("is-hidden"))
    : s === e.length - 1
    ? (t.classList.remove("is-hidden"), r.classList.add("is-hidden"))
    : (t.classList.remove("is-hidden"), r.classList.remove("is-hidden"));
};
prevButton.addEventListener("click", (e) => {
  const t = track.querySelector(".current-slide"),
    r = t.previousElementSibling,
    s = dotsNav.querySelector(".current-slide"),
    i = s.previousElementSibling,
    o = slides.findIndex((e) => e === r);
  moveToSlide(track, t, r),
    updateDots(s, i),
    hideShowArrows(slides, prevButton, nextButton, o);
});
nextButton.addEventListener("click", (e) => {
  const t = track.querySelector(".current-slide"),
    r = t.nextElementSibling,
    s = dotsNav.querySelector(".current-slide"),
    i = s.nextElementSibling,
    o = slides.findIndex((e) => e === r);
  moveToSlide(track, t, r),
    updateDots(s, i),
    hideShowArrows(slides, prevButton, nextButton, o);
});
dotsNav.addEventListener("click", (e) => {
  const t = e.target.closest("button");
  if (!t) return;
  const r = track.querySelector(".current-slide"),
    s = dotsNav.querySelector(".current-slide"),
    i = dots.findIndex((e) => e === t),
    o = slides[i];
  moveToSlide(track, r, o),
    updateDots(s, t),
    hideShowArrows(slides, prevButton, nextButton, i);
});
