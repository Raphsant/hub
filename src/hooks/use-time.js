import { useState, useEffect } from "react";

function useTime() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });
  const time = date.toLocaleTimeString();
  const hour = date.getHours();
  return [time, hour];
}

export default useTime;
