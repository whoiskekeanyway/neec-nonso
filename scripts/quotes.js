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
    "heads of state” is a raw confrontation with the leaders who fail us, exposing the damage they cause and the corruption they hid"),
  (projectNames[2] = " head of state"),
  (hrefstring[2] = "projects/headsofstate"),
  (quotes[3] =
    "ten years later, i visited ikogosi town and noticed that the residents buried their deceased within their homes."),
  (projectNames[3] = " the last burial "),
  (hrefstring[3] = "projects/thelastburial");



const projectName = document.getElementById("projectnames");
function changeQuotes() {
  (document.querySelector("blockquote").innerHTML = quotes[i]),
    (projectName.innerHTML = projectNames[i]),
    (projectName.href = hrefstring[i]),
    i < quotes.length - 1 ? i++ : (i = 0),
    setTimeout("changeQuotes()", 5e3);
}


window.onload = changeQuotes;

let tll = gsap.timeline({ scrollTrigger: { trigger: ".blockquote-div" } });
tll.from(".blockquote-div", { y: 20, opacity: 0, duration: 1.5 });
