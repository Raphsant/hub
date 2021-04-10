import React, { useState, useEffect } from "react";

function WeatherCard() {
  //Variables
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = "f0427030a3eaff2558613297e9184af8";
  const url = `http://api.openweathermap.org/data/2.5/weather?q=chicago&units=metric&appid=${apiKey}`;

  //Functions
  // TODO: ADD THIS TO A REACT CUSTOM HOOK, THIS COMPONENT SHOULD ONLY HANDLE THE RENDER.
  useEffect(() => {
    const getWeather = async () => {
      try {
        const weather = await fetch(url);
        const json = await weather.json();
        console.log(json);
        setWeatherData(json);
      } catch (err) {
        console.error(err);
      }
    };
    getWeather();
    console.log("weather component mounted.");
  }, [url]);

  let weatherContent;

  if (weatherData !== null) {
    weatherContent = (
      <div>
        <h2>{weatherData.name}</h2>
        <div>
          <h3>{weatherData.weather[0].description} </h3>
        </div>
        <h3>
          {Math.round(weatherData.main.temp)}° degrees
          <img
            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
            alt="icon"
          />
        </h3>

        <h4>
          {Math.round(weatherData.main.temp_min)}° |{" "}
          {Math.round(weatherData.main.temp_max)}°
        </h4>
      </div>
    );
  }

  return <div>{weatherContent}</div>;
}

export default WeatherCard;
