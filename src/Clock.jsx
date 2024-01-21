import React, { useState, useEffect } from "react";
import "./Clock.css";

const Clock = ({ city, timezone, title }) => {
  const [time, setTime] = useState(
    new Date().toLocaleTimeString("sv", { timeZone: timezone })
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString("sv", { timeZone: timezone }));
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [timezone]);
  return (
    <div className="clock-container">
      <div className="clock">
      <h1>{city}</h1>
      <h3>Timezone: {timezone}</h3>
      {time}
      </div>
    </div>
  );
};
export default Clock;