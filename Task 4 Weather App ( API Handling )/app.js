
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'Add_Your_API_KEY_HERE',
		'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com'
	}
};

const cityName = document.querySelector("#cityName");
const submit = document.querySelector("#submit");
const cityInput = document.querySelector("#cityInput");
console.log("Script is loaded");

const getWeather = (location) =>{

  cityName.innerHTML = location;
  fetch(`https://yahoo-weather5.p.rapidapi.com/weather?location=${location}&format=json&u=c`,options)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const obs = data.current_observation;

    document.getElementById("temperature").innerHTML = obs.condition.temperature + " °C";
    document.getElementById("temperature2").innerHTML = obs.condition.temperature;
    document.getElementById("humidity").innerHTML = obs.atmosphere.humidity + " %";
    document.getElementById("humidity2").innerHTML = obs.atmosphere.humidity;
    document.getElementById("visibility").innerHTML = obs.atmosphere.visibility + " mi";
    
    document.getElementById("sunrise").innerHTML = obs.astronomy.sunrise;
    document.getElementById("sunset").innerHTML = obs.astronomy.sunset;
    document.getElementById("text").innerHTML = obs.condition.text;
    
    // document.getElementById("chill").innerHTML = obs.wind.chill + " °F";
    document.getElementById("pressure").innerHTML = obs.atmosphere.pressure + " hPa";
    document.getElementById("direction").innerHTML = obs.wind.direction;
    document.getElementById("speed").innerHTML = obs.wind.speed + " mph";
    document.getElementById("speed2").innerHTML = obs.wind.speed;
  })
  .catch((err) => console.error(err));
}
// getWeather("Pune");
submit.addEventListener("click", (e)=>{
  e.preventDefault();
  getWeather(cityInput.value);
});

getWeather("Pune");

// Weather for the Other regions 


const Cities = ["Pimpri Chinchwad", "Mumbai", "Delhi", "Kolkata", "Gujarat", "Rajasthan","New York", "London", "Saudi Arabia", "Russia","Tokyo"];

const container = document.getElementById("staticData");


const getWeatherForStaticCities = (city) => {
  container.innerHTML = ""; // clear the "Loading..." row

  fetch(`https://yahoo-weather5.p.rapidapi.com/weather?location=${city}&format=json&u=c`, options)
    .then(res => res.json())
    .then(data => {
      const obs = data.current_observation;

      
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${city}</td>
        <td>${obs.condition.temperature} °C</td>
        <td>${obs.atmosphere.humidity} %</td>
        <td>${obs.atmosphere.pressure} hPa</td>
        <td>${obs.atmosphere.visibility} mi</td>
        <td>${obs.astronomy.sunrise}</td>
        <td>${obs.astronomy.sunset}</td>
        <td>${obs.wind.direction}</td>
        <td>${obs.wind.speed} mph</td>
      `;

      container.appendChild(row);
    })
    .catch(err => {
      console.error(`Error fetching data for ${city}`, err);
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${city}</td>
        <td colspan="8">Failed to load data</td>
      `;
      container.appendChild(row);
    });
};


Cities.forEach(city => getWeatherForStaticCities(city));




 
