function displayCurrentWeather(city) {
  const currentWeatherSection = document.querySelector(".current-weather");
  const currentWeatherEndpoint = getCurrentWeatherEndpoint(city);
  fetch(currentWeatherEndpoint)
    .then((response) => response.json())
    .then((data) => {
      const { name, main, dt, weather, wind } = data;

      const hours = getHours(dt);
      const day = getDay(dt);
      const temperature = Math.round(main.temp);
      const realFeel = Math.round(main.feels_like);
      const weatherDescription = weather[0].description;
      const iconUrl = getIconUrl(weather[0].icon);
      const windSpeed = Math.round(getWindInKmPerHour(wind.speed));

      currentWeatherSection.innerHTML = `
      <div class="px-3 d-flex flex-column align-items-start">
          <div class="fs-2 mb-2"><strong>${name}</strong></div>
          <div class="fs-4"><strong>${day}</strong>, ${hours}</div>
          <div class="d-flex align-items-center justify-content-center">
            <strong class="fs-1">${temperature}°C</strong>
            <img src="${iconUrl}" />
          </div>
        </div>
        <div class="px-3">
          <p class="fs-5">Real feel: <strong>${realFeel}°C</strong></p>
          <p class="fs-5 text-capitalize">${weatherDescription}</p>
          <p class="fs-5">Vânt: <strong>${windSpeed} km/h</strong></p>
        </div>
      `;
    });
}
