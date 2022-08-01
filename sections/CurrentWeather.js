function displayCurrentWeather() {
  const currentWeatherSection = document.querySelector(".current-weather");
  fetch(currentWeatherEndpoint)
    .then((response) => response.json())
    .then((data) => {
      const { name, main, dt, weather, wind } = data;

      const hours = getHours(dt);
      const day = getDay(dt);
      const temperature = Math.round(main.temp);
      const iconUrl = getIconUrl(weather[0].icon);
      const windSpeed = Math.round(getWindInKmPerHour(wind.speed));

      currentWeatherSection.innerHTML = `
      <h3>${name}</h3>
      <p>${day}, ${hours}</p>
      <strong>${temperature}°C</strong>
      <img src="${iconUrl}" alt=""/>
      <p>${windSpeed} Km/h</p>
      `;
    });
}

displayCurrentWeather();
