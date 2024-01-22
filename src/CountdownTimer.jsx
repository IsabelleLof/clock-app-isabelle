import React, { useState, useEffect } from "react";

const CountdownTimer = ({ initialSeconds, title }) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [timerId, setTimerId] = useState(null);
  
  //change the color of the clock card/component if it is
  //morning (yellow color) or 
  //afternon (puple) or
  //evening (dark blue)

  const [display, setDisplay] = useState(false);

  useEffect(() => {
    // Exit early if countdown is finished
    if (seconds <= 0) {
      return;
    }

    // Set up the timer and save the timer ID to state
    const id = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);
    setTimerId(id);

    // Clean up the timer
    return () => clearInterval(id);
  }, [seconds]);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (timeInSeconds % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const stopTimer = () => {
    // Clear the interval using the saved timer ID
    clearInterval(timerId);
    setTimerId(null); // Reset the timer ID to null after stopping
  };

  const playTimer = () => {
    // Resume the timer by setting up a new interval
    const id = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);
    setTimerId(id);
  };

  const pauseTimer = () => {
    // Pause the timer by clearing the interval
    clearInterval(timerId);
    console.log(pauseTimer)
  };

  const today = new Date();
  //console.log(today)
  

  return (
    <div className="clock">
      <h2>{title}</h2>
      <p>{formatTime(seconds)}</p>
      <button onClick={stopTimer}>Stop time</button>
      <button onClick={playTimer}>Play</button>
      <button onClick={pauseTimer}>Pause</button>
    </div>
  );
};

export default CountdownTimer;
