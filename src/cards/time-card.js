import React from "react";
import useTime from "../hooks/use-time";

function TimeCard() {
  //Variables
  const [time, hour] = useTime();
  let greeting;
  console.log(hour);
  //Styling
  const style = {
    fontSize: "50px",
  };

  //methods
  if (hour >= 0 && hour <= 5) {
    greeting = "Good evening, Raphy";
  } else if (hour >= 6 && hour <= 11) {
    greeting = "Good morning, Raphy";
  } else if (hour >= 12 && hour <= 18) {
    greeting = "Good afternoon, Raphy";
  } else if (hour >= 19 && hour <= 24) {
    greeting = "Good evening, Raphy";
  }
  return (
    <div style={style}>
      <div>{time}</div>
      {greeting}
    </div>
  );
}

export default TimeCard;
