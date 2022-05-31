//live time and date
setInterval(function () {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  minutes = tickingClockStarts(minutes);
  seconds = tickingClockStarts(seconds);

  document.querySelector("#digital_clock_time").innerHTML =
    hours + " : " + minutes + " : " + seconds;
  document.querySelector("#clocks_date").innerHTML = date.toDateString();
});

let tickingClockStarts = value => {
  if (value < 10) {
    value = "0" + value;
  }
  return value;
};

//background changes from light to dark mode
let date = new Date();
let hours = date.getHours();
if (hours <= 12) {
  document.body.style.backgroundColor = "#EFD9AF";
} else {
  document.body.style.backgroundColor = "#202020";
}

//clicking on a button changes time's color
time_button.addEventListener("click", function () {
  let currentColor = getComputedStyle(digital_clock_time, null).getPropertyValue("color");
  currentColor === "rgb(192, 166, 241)"
    ? (digital_clock_time.style.color = "rgb(209, 97, 97)")
    : (digital_clock_time.style.color = "rgb(192, 166, 241)");
});
