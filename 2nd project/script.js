const apiKey = "a38fc78d99d615e3e6ade05b579dfa1d";
const weatherApiUrl = "https://api.openweathermap.org/data/2.5/weather";

const getWeatherBtn = document.getElementById("getWeather");
const cityInput = document.getElementById("cityInput");

getWeatherBtn.addEventListener("click", async () => {
  const city = cityInput.value;
  const response = await fetch(`${weatherApiUrl}?q=${city}&appid=${apiKey}&units=metric`);
  
  const resultDiv = document.getElementById("weatherResult");
  
  if (response.ok) {
    const data = await response.json();

    document.getElementById("cityName").innerText = data.name;
    document.getElementById("temperature").innerText = `${Math.round(data.main.temp)}°C`;
    document.getElementById("humidity").innerText = `${data.main.humidity}%`;
    document.getElementById("windSpeed").innerText = `${data.wind.speed} km/h`;

    const icon = document.getElementById("weatherIcon");
    const weather = data.weather[0].main;

    if (weather === "Clouds") icon.src = "images/clouds.png";
    else if (weather === "Clear") icon.src = "images/clear.png";
    else if (weather === "Rain") icon.src = "images/rain.png";
    else if (weather === "Drizzle") icon.src = "images/drizzle.png";
    else if (weather === "Mist") icon.src = "images/mist.png";
    else icon.src = "";

    resultDiv.style.display = "block";
  } else {
    resultDiv.innerHTML = "<p style='color:red;'>City not found! Try again.</p>";
    resultDiv.style.display = "block";
  }
});
