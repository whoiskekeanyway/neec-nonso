const toggleBtn = document.querySelector(".menu"),
  nav = document.querySelector(".nav-list"),
  burger = document.querySelector(".menu");
toggleBtn.addEventListener("click", () => {
  nav.classList.toggle("active"), burger.classList.toggle("toggle");
});
var mybutton = document.getElementById("myBtn");
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

