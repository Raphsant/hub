import React, { useState, useEffect } from "react";

function WeatherCard() {
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = "f0427030a3eaff2558613297e9184af8";
  const url = `api.openweathermap.org/data/2.5/weather?q=chicago&appid=${apiKey}`;

  const getWeather = async () => {
    useEffect(() => {
        try {
            const weather = await fetch(url);
            const weatherJson = await weatherJson.json();
        } catch (err) {
            console.error(err);
        }
    }, []);
  };

  return <div>
      
  </div>;
}

export default WeatherCard;
