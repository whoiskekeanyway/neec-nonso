var i = 0;
const quotes = [];
const projectNames = [];
const hrefstring = [];

quotes[0] =
  " in the igbo land, masquerades are embodiments of the spirit and the human worlds. the mystique surrounding the masquerade is one of the key components of the igbo culture that survived western influences";
projectNames[0] = "from the boys fraternity.";
hrefstring[0] = "projects/theboysfraternity";

quotes[1] =
  " the world is an endless loop of the living and dead; coming and going. for instance, among the yoruba people, the universe is conceived as a three-storied structure: heavenworld above, earthworld and, the under-earthworld below it";
projectNames[1] = " from what was dead was never dead.";
hrefstring[1] = "projects/whatwasdeadwasneverdead";

quotes[2] =
  " what is pain, how relative are our responses to pain, can the notion that one man`s meat is another`s poison a mitigator  of this axiom?";
projectNames[2] = " from pain: a discomfort or a trigger.";
hrefstring[2] = "projects/pain-a-discomfort-or-a-trigger";



const projectName =  document.getElementById("projectnames")
// Change Image
function changeQuotes() {
  document.querySelector("blockquote").innerHTML = quotes[i];
  projectName.innerHTML = projectNames[i];
  projectName.href = hrefstring[i];

  // Check If Index Is Under Max
  if (i < quotes.length - 1) {
    // Add 1 to Index
    i++;
  } else {
    // Reset Back To O
    i = 0;
  }

  // Run function every 5 seconds
  setTimeout("changeQuotes()", 5000);
}

// Run function when page loads
window.onload = changeQuotes;
