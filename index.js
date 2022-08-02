const city = localStorage.getItem("city");

if (city === null) {
  localStorage.setItem("city", "București");
  displayCurrentWeather("București");
} else {
  displayCurrentWeather(city);
  currentCity.innerText = city;
}
