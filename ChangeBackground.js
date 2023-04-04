function ChangeTheBackground() {
  var now = new Date();
  if (now.getHours() >= 18 || now.getHours() < 6) {
    document.body.style.backgroundColor = "#6d6d6d";
    document.body.style.color = "#e6e6e6";
    document.body.style.opacity = "0.5";
  } else {
    document.body.style.backgroundColor = "#1e2d47";
    document.body.style.color = "#E8E9EB";
  }
}

window.onload = ChangeTheBackground;
setInterval(ChangeTheBackground, 100);
