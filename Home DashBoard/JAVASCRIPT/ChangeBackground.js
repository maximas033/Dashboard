// if its latter then 6pm change the color of the bacgkround to gray
function ChangeTheBackground() {
  // get the current time
  var now = new Date();
  // if the time is between 6pm and 6am change the background to grey
  if (now.getHours() >= 6 && now.getHours() <= 6) {
    document.body.style.backgroundColor = "#6d6d6d";
    document.body.style.color = "#e6e6e6";
  } else {
    document.body.style.backgroundColor = "#ffff";
  }
}

window.onload = ChangeTheBackground();
setInterval(ChangeTheBackground, 1000);
