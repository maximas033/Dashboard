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
}
