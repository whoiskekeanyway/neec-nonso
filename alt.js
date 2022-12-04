// array of image URLs to use as backgrounds
var backgrounds = [
  "https://res.cloudinary.com/da93q413z/image/upload/v1669879251/homepage/7_kqcffs.webp",
  "https://res.cloudinary.com/da93q413z/image/upload/v1669879250/homepage/8_ay9yth.webp",
  "https://res.cloudinary.com/da93q413z/image/upload/v1669879244/homepage/15_fhq6tr.webp",
  "https://res.cloudinary.com/da93q413z/image/upload/v1669879240/homepage/6_z3htol.webp",
];

// duration of fade effect in milliseconds
var fadeDuration = 1000;

// index of currently displayed background
var currentBackground = 0;

// select the body element and save it to a variable
var body = document.querySelector("body");

// set the initial background
body.style.backgroundImage = "url(" + backgrounds[currentBackground] + ")";

// switch to the next background every 5 seconds
setInterval(function () {
  // fade out the current background
  body.style.opacity = 0;

  // when the fade out is complete, switch to the next background
  setTimeout(function () {
    // increment the current background index, or set it to 0 if we're at the end of the array
    currentBackground = (currentBackground + 1) % backgrounds.length;

    // update the body's background image
    body.style.backgroundImage = "url(" + backgrounds[currentBackground] + ")";

    // fade in the new background
    body.style.opacity = 1;
  }, fadeDuration);
}, 8000);
