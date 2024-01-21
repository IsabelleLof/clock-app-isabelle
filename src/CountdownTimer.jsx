import React, { useState, useEffect } from "react";

const CountdownTimer = ({ initialSeconds, title }) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  let [timerTitle, setTimertitle] = useState(title);

  useEffect(() => {
    // Exit early if countdown is finished
    if (seconds <= 0) {
      return;
    }

    // Set up the timer
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    // Clean up the timer
    return () => clearInterval(timer);
  }, [seconds]);

  // Format the remaining time (e.g., “00:05:10” for 5 minutes and 10 seconds)
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (timeInSeconds % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  // Change the title directly based on some condition (e.g., component mount)
  //  if ((title = "")) {
  //   setTitle("Isabelle");
  //  console.log(title);

  return (
    <div className="clock">
      <h2>{title}</h2>
      <p>{formatTime(seconds)}</p>
      <button>stop</button>
      <button>play</button>
      <button>pause</button>
    </div>
  );
};

export default CountdownTimer;