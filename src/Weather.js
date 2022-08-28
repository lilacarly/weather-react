import React from "react";
import "./styles.css";
export default function Weather() {
  return (
    <div className="Weather">
      <div className="container">
        <h1>🌦 What's the weather?</h1>
        <br />
        <form id="search-form">
          <input
            type="text"
            placeholder="Enter city name here..."
            className="entry"
            id="cityEntry"
          />
          <input type="submit" value="Search" className="search" />
        </form>
        <br />
        <div className="card">
          <div className="card-header" id="todayDate"></div>
          <div className="card-body">
            <div className="row">
              <div className="col-4">
                <p className="card-title city" id="cardCity">
                  Boston, MA
                </p>
                <p className="card-text temp">
                  <span id="theTemp">85</span>
                  <a href="#" className="units active" id="fahrenheit">
                    ˚F
                  </a>
                  <a href="#" className="units" id="celsius">
                    ˚C
                  </a>
                </p>
              </div>
              <img src="" alt="Clear" id="emoji" className="col-4" />
              <div className="col-4">
                <ul>
                  <li id="descriptionElement">Description</li>
                  <li>
                    Wind: <span id="windspeedElement"></span> mph
                  </li>
                  <li>
                    Humidity: <span id="humidityElement"></span>%
                  </li>
                </ul>
              </div>
            </div>
            <div className="forecast" id="forecast"></div>
          </div>

          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
            crossorigin="anonymous"
          ></script>

          <script src="script.js"></script>
        </div>
        <footer>
          By Lila Graham,{" "}
          <a href="https://github.com/lilacarly/weather-react">GitHub</a>
        </footer>
      </div>
    </div>
  );
}
