// Demo weather data generator
function getDemoWeather(city) {
  const demoData = [
    { temp: '32°C', desc: 'Sunny', humidity: '40%', wind: '10 km/h' },
    { temp: '28°C', desc: 'Cloudy', humidity: '55%', wind: '7 km/h' },
    { temp: '24°C', desc: 'Rainy', humidity: '80%', wind: '15 km/h' },
    { temp: '36°C', desc: 'Hot', humidity: '30%', wind: '5 km/h' },
    { temp: '20°C', desc: 'Windy', humidity: '60%', wind: '20 km/h' }
  ];
  const random = demoData[Math.floor(Math.random() * demoData.length)];
  return { city, ...random };
}

function showWeather(data) {
  let resultDiv = document.getElementById('weatherResult');
  if (!resultDiv) {
    resultDiv = document.createElement('div');
    resultDiv.id = 'weatherResult';
    resultDiv.style.marginTop = '30px';
    resultDiv.style.padding = '20px';
    resultDiv.style.background = 'rgba(255,255,255,0.85)';
    resultDiv.style.borderRadius = '10px';
    resultDiv.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
    document.querySelector('.container').appendChild(resultDiv);
  }
  resultDiv.innerHTML = `<h2>Weather in ${data.city}</h2>
    <p><strong>Temperature:</strong> ${data.temp}</p>
    <p><strong>Description:</strong> ${data.desc}</p>
    <p><strong>Humidity:</strong> ${data.humidity}</p>
    <p><strong>Wind:</strong> ${data.wind}</p>`;
}

document.getElementById('searchbtn').addEventListener('click', function() {
  const city = document.getElementById('cityInput').value.trim();
  if (!city) {
    alert('Please enter a city name!');
    return;
  }
  const weather = getDemoWeather(city);
  showWeather(weather);
});
