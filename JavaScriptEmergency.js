function EmergencyCall() {
  const now = new Date();
  const today = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
  const time = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
  const accountSid = "ACecee8726512172bcb92b231423a23939";
  const authToken = "a4e27f11c248795fe2e420ca6e7a1ac5";
  const from = "+13395006765";
  const to = "+12533101421";

  // Make the HTTP POST request to the Twilio API
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
}
