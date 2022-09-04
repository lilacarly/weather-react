import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <h1>🌦 What's the weather?</h1>
      <br />
      <Weather defaultCity="Boston" />
      <footer>
        By Lila Graham,{" "}
        <a href="https://github.com/lilacarly/weather-react">GitHub</a>
      </footer>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
        crossOrigin="anonymous"
      ></script>

      <script src="script.js"></script>
    </div>
  );
}

export default App;
