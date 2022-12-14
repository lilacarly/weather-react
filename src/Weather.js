import React, { useState } from "react";
import "./styles.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
    });
  }

  function search() {
    const apiKey = "79556a453ffc6ed66cacb6d61dc994cc";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
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
          <WeatherInfo data={weatherData} />

          <WeatherForecast coordinates={weatherData.coordinates} />
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
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
