import React, { useState } from "react";
import "./styles.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl: "",
    });
  }

  function search() {
    let apiKey = "79556a453ffc6ed66cacb6d61dc994cc";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <form onSubmit={handleSubmit} id="search-form">
            <input
              type="text"
              placeholder="Enter city name here..."
              className="entry"
              id="cityEntry"
              onChange={handleCityChange}
            />
            <input type="submit" value="Search" className="search" />
          </form>
          <WeatherInfo data={weatherData} />
          <br />
          <div className="card">
            <div className="card-header" id="todayDate"></div>
            <div className="card-body">
              <div className="row">
                <div className="col-4">
                  <p className="card-title city" id="cardCity">
                    {weatherData.city}
                  </p>
                  <p className="card-text temp">
                    <span id="theTemp">{weatherData.temperature}</span>
                    <button className="units active" id="fahrenheit">
                      ˚F
                    </button>
                    <button className="units" id="fahrenheit">
                      ˚C
                    </button>
                  </p>
                </div>
                <img
                  src={weatherData.iconURL}
                  alt={weatherData.description}
                  id="emoji"
                  className="col-4"
                />
                <div className="col-4">
                  <ul>
                    <li id="descriptionElement">{weatherData.description}</li>
                    <li>
                      Wind:{" "}
                      <span id="windspeedElement">{weatherData.wind}</span> mph
                    </li>
                    <li>
                      Humidity:{" "}
                      <span id="humidityElement">{weatherData.humidity}</span>%
                    </li>
                  </ul>
                </div>
              </div>
              <div className="forecast" id="forecast"></div>
            </div>

            <script
              src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
              integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
              crossOrigin="anonymous"
            ></script>

            <script src="script.js"></script>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
