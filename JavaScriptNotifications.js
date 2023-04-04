function NOTIFICATION() {
  const isOnline = window.navigator.onLine;
  if (isOnline) {
    document.getElementById("wifiConnection").innerHTML =
      "WIFI: You are online";
    // color light green
    document.getElementById("wifiConnection").style.color = "#3c8c74";
  } else {
    document.getElementById("wifiConnection").innerHTML =
      "WIFI: You are offiline";
    document.getElementById("wifiConnection").style.color = "#ba0001";
  }
}

window.onload = NOTIFICATION();
