function GettingCurrentWeather() {
  navigator.geolocation.getCurrentPosition(function (position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    let apiKey2 = "27e3070689e24914e167b1c5b0fa5e32";
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=47.2529&lon=-122.4443&appid=${apiKey2}`;
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        document.getElementById("cityName").innerHTML = json.name;
        document.getElementById("currentWeather").innerHTML =
          json.weather[0].description.toUpperCase();
        //show current temperature in ferenheit
        document.getElementById("currentTemp").innerHTML =
          Math.round(json.main.temp - 273.15) + "C°";
        // current humidity
        document.getElementById("currentHumidity").innerHTML =
          Math.round(json.main.humidity) + "% humidity";
        //windSpeed
        document.getElementById("windSpeed").innerHTML =
          Math.round(json.wind.speed) + "m/s";

        // TodayHighLow ferenheight format
        document.getElementById("todayHighLow").innerHTML =
          document.getElementById("TodayHighLow").innerHTML =
            "H:" +
            Math.round(json.main.temp_max - 273.15) +
            "°C " +
            "L:" +
            Math.round(json.main.temp_min - 273.15) +
            "°C";
      })
      .catch((error) => {
        console.log(error);
      });
  });
}

window.onload = GettingCurrentWeather();
// reload every 5 minutes
setInterval(GettingCurrentWeather, 300000);
