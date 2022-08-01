function getIconUrl(code) {
  return `http://openweathermap.org/img/w/${code}.png`;
}

function getWindInKmPerHour(speed) {
  return (speed * 18) / 5;
}
