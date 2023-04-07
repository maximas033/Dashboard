function NOTIFICATION() {
  const isOnline = window.navigator.onLine;
  if (isOnline) {
    document.getElementById("wifiConnection").innerHTML =
      "WIFI: You are online";
    // color light green
    document.getElementById("wifiConnection").style.color = "#3c8c74";
  } else {
    document.getElementById("wifiConnection").innerHTML =
      "WIFI: You are offline";
    document.getElementById("wifiConnection").style.color = "#ba0001";
  }

  const firebaseRef = firebase.database().ref("/emergency");
  firebaseRef.on("value", (snapshot) => {
    const data = snapshot.val();
    if (data) {
      const latestData = Object.values(data)[0];
      document.getElementById(
        "EmergencyNotifications"
      ).innerHTML = `EMERGENCY: ${latestData.message}, ${latestData.hour}:${latestData.minutes}`;
    } else {
      document.getElementById("EmergencyNotifications").innerHTML = "N/A";
    }
  });
}

window.onload = NOTIFICATION();
