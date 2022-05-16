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
var i = 0;
const quotes = [],
  projectNames = [],
  hrefstring = [];
(quotes[0] =
  " in the igbo land, masquerades are embodiments of the spirit and the human worlds. the mystique surrounding the masquerade is one of the key components of the igbo culture that survived western influences"),
  (projectNames[0] = "from the boys fraternity."),
  (hrefstring[0] = "projects/theboysfraternity"),
  (quotes[1] =
    " the world is an endless loop of the living and dead; coming and going. for instance, among the yoruba people, the universe is conceived as a three-storied structure: heavenworld above, earthworld and, the under-earthworld below it"),
  (projectNames[1] = " from what was dead was never dead."),
  (hrefstring[1] = "projects/whatwasdeadwasneverdead"),
  (quotes[2] =
    " what is pain, how relative are our responses to pain, can the notion that one man`s meat is another`s poison a mitigator  of this axiom?"),
  (projectNames[2] = " from pain: a discomfort or a trigger."),
  (hrefstring[2] = "projects/pain-a-discomfort-or-a-trigger");
const projectName = document.getElementById("projectnames");
function changeQuotes() {
  (document.querySelector("blockquote").innerHTML = quotes[i]),
    (projectName.innerHTML = projectNames[i]),
    (projectName.href = hrefstring[i]),
    i < quotes.length - 1 ? i++ : (i = 0),
    setTimeout("changeQuotes()", 5e3);
}
window.onload = changeQuotes;
