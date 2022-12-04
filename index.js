// array of image URLs to use as backgrounds
var backgrounds = [
  "https://res.cloudinary.com/da93q413z/image/upload/v1669879251/homepage/7_kqcffs.webp",
  "https://res.cloudinary.com/da93q413z/image/upload/v1669879250/homepage/8_ay9yth.webp",
  "https://res.cloudinary.com/da93q413z/image/upload/v1669879244/homepage/15_fhq6tr.webp",
  "https://res.cloudinary.com/da93q413z/image/upload/v1669879240/homepage/6_z3htol.webp",
  "https://res.cloudinary.com/da93q413z/image/upload/v1669879238/homepage/13_yqjebl.webp",
  "https://res.cloudinary.com/da93q413z/image/upload/v1669879237/homepage/14_aoifjj.webp",
  "https://res.cloudinary.com/da93q413z/image/upload/v1669879236/homepage/12_yjyofs.webp",
  "https://res.cloudinary.com/da93q413z/image/upload/v1669879235/homepage/10_akuxfa.webp",
  "https://res.cloudinary.com/da93q413z/image/upload/v1669879228/homepage/2_wvex88.webp",
  "https://res.cloudinary.com/da93q413z/image/upload/v1669879228/homepage/3_dkyvpc.webp",
  "https://res.cloudinary.com/da93q413z/image/upload/v1669879221/homepage/1_h9hnqx.webp",
  "https://res.cloudinary.com/da93q413z/image/upload/v1669879221/homepage/11_eam2k4.webp",
  "https://res.cloudinary.com/da93q413z/image/upload/v1669879220/homepage/4_f4uqdu.webp",
  "https://res.cloudinary.com/da93q413z/image/upload/v1669879219/homepage/9_zglsme.webp",
  "https://res.cloudinary.com/da93q413z/image/upload/v1669879218/homepage/5_xcd13b.webp",
];

// duration of fade effect in milliseconds
var fadeDuration = 1000;

// index of currently displayed background
var currentBackground = 0;

// select the body element and save it to a variable
// var body = document.querySelector("body");
var backDiv = document.querySelector(".backgroundDiv");

// preload all of the background images
for (var i = 0; i < backgrounds.length; i++) {
  var img = new Image();
  img.src = backgrounds[i];
}

// set the initial background
backDiv.style.backgroundImage = "url(" + backgrounds[currentBackground] + ")";

// switch to the next background every 5 seconds
setInterval(function () {
  // fade out the current background
  backDiv.style.opacity = 1;

  // when the fade out is complete, switch to the next background
  setTimeout(function () {
    // increment the current background index, or set it to 0 if we're at the end of the array
    currentBackground = (currentBackground + 1) % backgrounds.length;

    // update the body's background image
    backDiv.style.backgroundImage =
      "url(" + backgrounds[currentBackground] + ")";

    // fade in the new background
    backDiv.style.opacity = 1;
  }, fadeDuration);
}, 5000);
