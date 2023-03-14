function DisplayGreeting() {
  var now = new Date();
  var hour = now.getHours();
  var minute = now.getMinutes();
  var second = now.getSeconds();

  // depending on a time display a sertain greeting message
  if (hour < 12) {
    document.getElementById("GreetingMessage").innerHTML = "Good Morning";
  } else if (hour < 18) {
    document.getElementById("GreetingMessage").innerHTML = "Good Afternoon";
  } else {
    document.getElementById("GreetingMessage").innerHTML = "Good Evening";
  }
}
window.onload = DisplayGreeting();
setInterval(DisplayGreeting, 1000);
