function getOutfitRecommendation(weatherDescription) {
  switch (weatherDescription.toLowerCase()) {
    case "clear":
      return "Wear a light t-shirt and a pair of jeans. You can also use sunglasses.";
    case "clouds":
    case "overcast clouds":
      return "Wear a light t-shirt, a pair of jeans, and consider bringing a light jacket in case it gets cooler.";
    case "rain":
      return "Wear a waterproof jacket, a light t-shirt, and a pair of water-resistant pants. Bring an umbrella.";
    case "drizzle":
      return "Wear a water-resistant jacket, a light t-shirt, and a pair of jeans. Carry an umbrella just in case.";
    case "snow":
      return "Wear a warm coat, a sweater, thermal pants, and waterproof boots. Don't forget gloves, a scarf, and a hat.";
    case "fog":
    case "mist":
    case "haze":
      return "Wear a light jacket, a t-shirt, and a pair of jeans. Be prepared for reduced visibility.";
    case "thunderstorm":
      return "Wear a waterproof jacket, a light t-shirt, and a pair of water-resistant pants. Bring an umbrella and avoid staying outdoors.";
    case "hail":
      return "Wear a warm coat, a sweater, a pair of jeans, and sturdy shoes. Be cautious and avoid staying outdoors.";
    default:
      return "Wear a light t-shirt and a pair of jeans. Check the weather forecast for any updates.";
  }
}

function GettingCurrentWeather() {
  navigator.geolocation.getCurrentPosition(function (position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    let apiKey2 = "27e3070689e24914e167b1c5b0fa5e32";
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey2}&units=imperial`;
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        document.getElementById("WeatherSection").style.animation = "fadeIn";
        document.getElementById("WeatherSection").style.animationDuration =
          "3s";
        document.getElementById("cityName").innerHTML = json.name;
        document.getElementById("currentWeather").innerHTML =
          json.weather[0].description.toUpperCase();
        document.getElementById("currentTemp").innerHTML =
          Math.round(json.main.temp) + "°F";
        document.getElementById("currentHumidity").innerHTML =
          Math.round(json.main.humidity) + "% humidity";
        document.getElementById("windSpeed").innerHTML =
          Math.round(json.wind.speed) + "m/s";
        document.getElementById("TodayHighLow").innerHTML =
          "H:" +
          Math.round(json.main.temp_max) +
          "°F " +
          "L:" +
          Math.round(json.main.temp_min) +
          "°F";

        let weatherDescription = json.weather[0].main;
        document.getElementById("outfitRecomindation").innerHTML =
          getOutfitRecommendation(weatherDescription);
      })
      .catch((error) => {
        console.log(error);
      });
  });
}

window.onload = GettingCurrentWeather();
// reload every 5 minutes
setInterval(GettingCurrentWeather, 300000);
