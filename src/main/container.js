import React from "react";
import TimeCard from "../cards/time-card";
import WeatherCard from "../cards/weather-card";
import BookmarkContainer from "./bookmark-container";
import "./css/bookmark-container.css";

function Container() {
  return (
    <div>
      {/* TODO CREATE CONTAINER FOR THE CARDS / MODULES. */}
      <div className="card">
        <TimeCard />
      </div>
      <div className="card">
        <WeatherCard />
      </div>
      <div className="card">
        <BookmarkContainer />
      </div>
    </div>
  );
}

export default Container;
