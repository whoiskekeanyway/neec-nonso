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

var i = 0; // Start Point
var time = 3000; // Time Between Switch
var images = [
  "../exhibition/young contemporaries - rele arts foundation lagos, nigeria/1.jpg",
  "../exhibition/young contemporaries - rele arts foundation lagos, nigeria/111.jpeg"
];



// Change Image
function changeImg() {
  document.slide.src = images[i];

  // Check If Index Is Under Max
  if (i < images.length - 1) {
    // Add 1 to Index
    i++;
  } else {
    // Reset Back To O
    i = 0;
  }

  // Run function every x seconds
  setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload = changeImg;



