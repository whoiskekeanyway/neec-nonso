const toggleBtn = document.querySelector(".menu");
const nav = document.querySelector(".nav-list");
const burger = document.querySelector(".menu");
toggleBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
  burger.classList.toggle("toggle");
});

var mybutton = document.getElementById("myBtn");
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Randomize Images

var i = 0; // Start Point
var time = 3000; // Time Between Switch
var images = [
  "../exhibition/young contemporaries/1.webp",
  "../exhibition/young contemporaries/11.webp",
];

// var images2 = [
//   "../exhibition/boundaries of reason/1.webp",
//   "../exhibition/boundaries of reason/5.webp",
// ];

function checkLength(array) {
  // Check If Index Is Under Max
  if (i < array.length - 1) {
    // Add 1 to Index
    i++;
  } else {
    // Reset Back To O
    i = 0;
  }
}

// Change Image
function changeImg() {
  document.slide.src = images[i];
  checkLength(images);
  setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload = changeImg;

