import React from "react";
import './App.css';




export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row align-items-center">
          <div className="col">
            <form className="form-inline" id="search-form">
              <div className="form-group mb-2"></div>
              <div className="form-group mx-sm-3 mb-2">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter a City"
                  id="city-input"
                  autocomplete="off"
                />
              </div>
              <div class="col">
                <button
                  type="button"
                  class="btn btn-outline-primary"
                  id="searchButton"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
        <h3 id="city">Search For A City</h3>
        <h4>Last Updated: <span id="currentDateAndTime"></span></h4>
        <div>
          <img src="" className="current-weather-icon" id="currentWeatherIcon" alt="" />
        </div>

        <span class="current-temperature">
          <h1 class="current-temperature" id="current-temperature">
            {" "}
            88{" "}
          </h1>
        </span>
        <span class="temperature-units"> °F | °C </span>

        <br />
        <div class="row" id="current-forecast">
          <div class="col-4" id="weatherDescription">
            Current Weather: Sunny
          </div>
          <div class="col-4">
            Wind: 5 <span id="windSpeed"></span> mph
          </div>
          <div class="col-4">
            Humidity: 25% <span id="humidity"></span> %
          </div>
        </div>
        <hr />

        <div class="container-weekly" id="forecast"></div>
      </div>
    </div>
  );
}
