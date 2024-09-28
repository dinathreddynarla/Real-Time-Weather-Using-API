function show() {
    const city = document.getElementById("input").value;
    const apiKey = '466ddaa21a8de191e9f608bd11a56acb';
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetchWeather(apiURL);
    document.getElementById("input").value=""
  }

  async function fetchWeather(apiURL) {
    try {
      const response = await fetch(apiURL);
      const data = await response.json();

      if (data.cod === "404") {
        alert("City not found. Please enter a valid city name.");
        return;
      }
      const weatherIcons = {
        "clear sky": "☀️",
        "few clouds": "🌤️",
        "scattered clouds": "☁️",
        "broken clouds": "🌥️",
        "shower rain": "🌧️",
        "rain": "🌦️",
        "thunderstorm": "⛈️",
        "snow": "❄️",
        "mist": "🌫️",
        "haze": "🌫️",
        "dust": "🌪️",
        "sand": "🌪️",
        "fog": "🌫️",
        "tornado": "🌪️",
        "volcano": "🌋",
        "smoke": "🌫️",
        "overcast clouds": "☁️",
        "light rain": "🌦️",
        "moderate rain": "🌧️",
        "heavy rain": "🌧️",
        "isolated thunderstorm": "⛈️",
        "light snow": "🌨️",
        "heavy snow": "❄️",
        "freezing rain": "🌧️",
        "sleet": "🌧️",
        "clear": "☀️",
        "partly cloudy": "🌤️"
      };
      
        
      
      
      document.getElementById('icon').textContent = weatherIcons[data.weather[0].description] || '🌍';
      document.getElementById('location').textContent = data.sys.country === undefined ? `${data.name}` :`${data.name}, ${data.sys.country}`;
      document.getElementById('temperature').textContent = `${Math.round(data.main.temp)}°C`;
      document.getElementById('description').textContent = data.weather[0].description;
      document.getElementById('wind').textContent = `Wind: ${data.wind.speed} km/h`;
      document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
      document.getElementById('pressure').textContent = `Pressure: ${data.main.pressure} mb`;

    } catch (error) {
      alert('Unable to fetch weather data. Please try again later.');
    }
  }