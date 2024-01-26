document.getElementById('location-form').addEventListener('submit', getWeather);

async function getWeather(e) {
  e.preventDefault();

  const locationInput = document.getElementById('location-input').value;

  try {
    const apiKey = 'f699a733f373b4a575214c49ddaa11f8';
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${locationInput}&appid=${apiKey}&units=metric`);
    const data = await response.json();

    if (data.cod === '404') {
      updateContainerSize(15);

      displayError('Error: City not found');
    } else {
      displayWeather(data);
      updateContainerSize(20);
    }
  } catch (error) {
    updateContainerSize(15);
    displayError('Error: Failed to fetch weather data');
  }
}
function displayWeather(weatherData) {
  const weatherContainer = document.getElementById('weather-data');

  // Check if the necessary data is present in the API response
  if (weatherData.name && weatherData.main && weatherData.weather && weatherData.weather[0]) {
    weatherContainer.innerHTML = `
          <p>City: ${weatherData.name}</p>
          <p>Temperature: ${weatherData.main.temp} °C</p>
          <p>Weather: ${weatherData.weather[0].description}</p>
      `;
  } else {
    // If data is not as expected, display an error message
    displayError('Error: Invalid weather data');
  }
}


function displayError(errorMessage) {
  const weatherContainer = document.getElementById('weather-data');
  weatherContainer.innerHTML = errorMessage;
}

function updateContainerSize(x) {
  const container = document.querySelector('.container');
  const weatherData = document.getElementById('weather-data');
  const containerHeight = x;
  container.style.height = containerHeight + 'rem';
}