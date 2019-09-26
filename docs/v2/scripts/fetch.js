export function fetchApi () {
  const url = "assets/tenki.json";
  fetch(url)
  .then(response => response.text())
  .then(text => {
    const json = JSON.parse(text);
    const json_forecasts = json["forecasts"][0];
    document.getElementById('weather-news').textContent = json_forecasts["date"]+"："+json_forecasts["telop"];
  });
}