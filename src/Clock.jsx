import React, { useState, useEffect } from "react";
import "./Clock.css";

const Clock = ({ city, timezone, title }) => {
  const [time, setTime] = useState(
    new Date().toLocaleTimeString("sv", { timeZone: timezone })
  );

  // Trying to change the color with the state..
  const [isDaytime, setIsDaytime] = useState(true); // Initialize as true

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentHour = new Date().getHours();
      const daytime = currentHour >= 6 && currentHour < 18;
      console.log(daytime);
      setIsDaytime(daytime);
      setTime(new Date().toLocaleTimeString("sv", { timeZone: timezone }));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timezone]);

  return (
    // Trying to change the clocks color depending on what time it is..
    // <div className={`clock-container ${isDaytime ? "daytime" : "nighttime"}`}>
    <div className="clock">
      <h1>{city}</h1>
      <h3>Timezone: {timezone}</h3>
      {time}
    </div>
    // </div>
  );
};

export default Clock;
