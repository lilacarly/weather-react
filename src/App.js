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
    </div>
  );
}

export default App;
