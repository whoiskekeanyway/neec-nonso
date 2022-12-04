// Mobile Navigation

const toggleBtn = document.querySelector(".menu");
const nav = document.querySelector(".nav-list");
const burger = document.querySelector(".menu");

toggleBtn.addEventListener("click", () => {
  nav.classList.toggle("active"), burger.classList.toggle("toggle");
});

// Back to top Button

const mybutton = document.getElementById("myBtn");

function scrollFunction() {
  document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
    ? (mybutton.style.display = "block")
    : (mybutton.style.display = "none");
}

function topFunction() {
  (document.body.scrollTop = 0), (document.documentElement.scrollTop = 0);
}

window.onscroll = function () {
  scrollFunction();
};

let tl = gsap.timeline({ scrollTrigger: { trigger: ".logo-image" } });
tl.from(".logo-image", { y: -200, opacity: 0.5, duration: 1.5 })
  .from(".nav-list", { y: -200, opacity: 0.5, duration: 1.5 })
  .from(".extra", { x: 200, opacity: 0, duration: 1.5 })
  .from(".footer-container", { y: 10, opacity: 0, duration: 1.5 });



setInterval(randomizeBackground, 2000);
