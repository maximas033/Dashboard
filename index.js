// Display Current Time
function DisplayingCurrentTime() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();

  // convert the time to an 12 hour format
  if (hours > 12) {
    hours = hours - 12;
  }

  // have 0 infront of a non double numbers
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  // display 0 infront of a non double seconds number
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  // display the current time
  document.getElementById("TimeToDisplay").innerHTML =
    hours + ":" + minutes + ":" + seconds;

  // get the current date
  var currentDate = new Date();
  var day = currentDate.getDate();
  var month = currentDate.getMonth() + 1;
  var year = currentDate.getFullYear();

  // display the current date
  document.getElementById("DateToDisplay").innerHTML =
    day + "/" + month + "/" + year;
}

window.onload = DisplayingCurrentTime();
setInterval(DisplayingCurrentTime, 1000);
