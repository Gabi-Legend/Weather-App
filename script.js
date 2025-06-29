let searchButton = document.getElementById("searchButton");

searchButton.addEventListener("click", searchCity);

function searchCity() {
  let city = document.getElementById("city").value;
  const apiKey = "d7e498e89d084db3809111856252706"; 

  if (!city) return alert("Please enter a city name!");

  fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`)
    .then((response) => response.json())
    .then((data) => {
      let searchedCity = document.getElementById("searchedCity");
      let weatherImage = document.getElementById("weatherImage");
      let temperature = document.getElementById("temperature");

      searchedCity.innerText = `${data.location.name}, ${data.location.country}`;
      weatherImage.src = "https:" + data.current.condition.icon;
      weatherImage.alt = data.current.condition.text;
      temperature.innerText = `Temperature: ${data.current.temp_c}°C`;
      weatherImage.style.display = "inline-block";
    })
    .catch((error) => {
      console.error("Eroare:", error);
      alert("City not found or API error.");
    });
}
