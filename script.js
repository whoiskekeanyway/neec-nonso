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



function randomizeBackground() {
  var images = [
    "https://res.cloudinary.com/da93q413z/image/upload/v1669879251/homepage/7_kqcffs.webp",
    "https://res.cloudinary.com/da93q413z/image/upload/v1669879250/homepage/8_ay9yth.webp",
    "https://res.cloudinary.com/da93q413z/image/upload/v1669879252/homepage/2_wvex88.webp",
    "https://res.cloudinary.com/da93q413z/image/upload/v1669879240/homepage/6_z3htol.webp",
    "https://res.cloudinary.com/da93q413z/image/upload/v1669879238/homepage/13_yqjebl.webp",
    "https://res.cloudinary.com/da93q413z/image/upload/v1669879237/homepage/14_aoifjj.webp",
    "https://res.cloudinary.com/da93q413z/image/upload/v1669879236/homepage/12_yjyofs.webp",
    "https://res.cloudinary.com/da93q413z/image/upload/v1669879235/homepage/10_akuxfa.webp",
    "https://res.cloudinary.com/da93q413z/image/upload/v1669879235/homepage/10_akuxfa.web",
    "https://res.cloudinary.com/da93q413z/image/upload/v1669879228/homepage/2_wvex88.webp",
    "https://res.cloudinary.com/da93q413z/image/upload/v1669879228/homepage/3_dkyvpc.webp",
    "https://res.cloudinary.com/da93q413z/image/upload/v1669879221/homepage/1_h9hnqx.webp",
    "https://res.cloudinary.com/da93q413z/image/upload/v1669879221/homepage/11_eam2k4.webp",
    "https://res.cloudinary.com/da93q413z/image/upload/v1669879220/homepage/4_f4uqdu.webp",
    "https://res.cloudinary.com/da93q413z/image/upload/v1669879219/homepage/9_zglsme.webp",
    "https://res.cloudinary.com/da93q413z/image/upload/v1669879218/homepage/5_xcd13b.webp",
  ];
  // Get a random image from the array
  var image = images[Math.floor(Math.random() * images.length)];

  // Get the element with the ID "bg-image"
  var bgImageElement = document.getElementById("bg-image");

  // Set the background image of the element to the random image
  bgImageElement.style.backgroundImage = "url('" + image + "')";
}

// Call the randomizeBackground function when the page loads
window.onload = randomizeBackground;

setInterval(randomizeBackground, 2000);
