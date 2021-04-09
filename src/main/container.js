import React from "react";
import TimeCard from "../cards/time-card";
import WeatherCard from "../cards/weather-card";
import BookmarkContainer from "./bookmark-container";

function Container() {
  return (
    <div>
      <div>
        {/* TODO CREATE CONTAINER FOR THE CARDS / MODULES. */}
        <TimeCard />
        <WeatherCard />
        <BookmarkContainer />
      </div>
    </div>
  );
}

export default Container;
