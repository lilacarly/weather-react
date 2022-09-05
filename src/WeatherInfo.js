import React from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1> Weather in {props.data.city}</h1>

      <div class="container">
        <div className="row">
          <div className="col-4">
            <WeatherTemperature fahrenheit={props.data.temperature} />
          </div>
          <div className="col-4">
            <WeatherIcon code={props.data.icon} size={80} />
            <p className="text-capitalize description">
              {props.data.description}
            </p>
          </div>
          <div className="col-4">
            <ul>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {props.data.wind} mph</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
