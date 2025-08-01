import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Tzaneen" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://linkedin.com/in/ninankhwashu"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nina Nkhwashu
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/ninankhwashu/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://ninareactweatherapp.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
