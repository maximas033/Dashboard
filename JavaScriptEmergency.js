function EmergencyCall() {
  const accountSid = "ACecee8726512172bcb92b231423a23939";
  const authToken = "7d41bb92edbcae43cdf5e5b8a590c8c8";
  const from = "+13395006765";
  const to = "+12533101421";

  fetch(
    "https://api.twilio.com/2010-04-01/Accounts/" + accountSid + "/Calls.json",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + btoa(accountSid + ":" + authToken),
      },
      body:
        "From=" +
        from +
        "&To=" +
        to +
        "&Url=" +
        "https://static.staticsave.com/dashboard/dashboard.xml",
    }
  )
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));

  const now = new Date();
  const minute = now.getMinutes();
  const hour = now.getHours();
  const firebaseRef = firebase.database().ref("/emergency");

  firebaseRef
    .push({
      minutes: minute,
      hour: hour,
      message: "Emergency button pressed",
    })
    .then(() => {
      TalkToLuan2();
      console.log("Emergency data has been saved to Firebase");
      // Delete previous data
      firebaseRef
        .once("value")
        .then((snapshot) => {
          const data = snapshot.val();
          const keys = Object.keys(data);
          if (keys.length > 1) {
            const oldestKey = keys.shift();
            firebaseRef.child(oldestKey).remove();
            console.log("Previous data has been deleted");
          } else {
            console.log("No previous data to delete");
          }
        })
        .catch((error) => {
          console.error("Error deleting previous data from Firebase:", error);
        });
    })
    .catch((error) => {
      console.error("Error saving emergency data to Firebase:", error);
    });
}

function TalkToLuan2() {
  const data = {
    text: "Emergency button was pressed on my smarthome Dashboard, please ignore it at the moment since its a feture I am working on. Thank you",
    key: "79339706-c7de-4a2c-a704-3023fb98778d",
    playerId: "LUAN_1",
  };

  fetch("https://api.carterlabs.ai/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      console.log("Input:", data.input);
      console.log("Output Text:", data.output.text);
      data.forced_behaviours.forEach((fb) => {
        console.log("Forced Behaviour:", fb.name);
      });
    })
    .catch((error) => {
      console.error(error);
    });
}
