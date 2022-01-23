console.clear();

// update time to the dom every second
setInterval(function () {
  // Initialize the countdown date and present date
  const countDownDate = new Date("Feb 29, 2022 00:00:00").getTime();
  const now = new Date().getTime();
  // distance is determined by the difference between the two countdown and present time
  const distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  const calcDays = Math.floor(distance / (1000 * 60 * 60 * 24));
  const calcHours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const calcMinutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const calcSeconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element
  // Output the result in an element with individual id's"
  function upDate() {
    document.querySelector(".clock-day-value").innerHTML = calcDays + " Days";
   
    // updateTextSize();
  }

  // Update the text size of the numbers when the font size is changed to 3 length
  //  function updateTextSize() {
  //    const fonts = document.querySelector(".clock-day-value");
  //    const stringiFiedDays = calcDays.toString().length;
  //
  //    if (stringiFiedDays === 3) {
  //      fonts.style.fontSize = "8rem";
  //    } else if (stringiFiedDays < 3) {
  //      fonts.style.fontSize = "8rem";
  //    }
  //  }

  upDate();

  // If the count down is finished, Write Happy Birthday to the screen and stop the timer

  if (distance < 0) {
    clearInterval();
    document.getElementById("greetings").innerHTML = "Happy Birthday! Keke";
    alert("Happy Birthday! Keke");
  }

  // 1000 milliseconds = 1 second and leaving it empty will make it run every second
}, 1000);
