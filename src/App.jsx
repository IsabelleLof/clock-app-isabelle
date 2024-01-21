import React, { useState, useEffect } from "react";
import "./App.css";
import Clock from "./Clock.jsx";
import CountdownTimer from "./CountdownTimer.jsx";

function App() {
  return (
    <div className="container">
      <Clock city="Stockholm" timezone="Europe/Stockholm" />
      <Clock city="New York" timezone="America/New_York" />
      <Clock city="Bangkok" timezone="Asia/Bangkok" />
      <Clock city="Tokyo" timezone="Asia/Tokyo" />
      <CountdownTimer initialSeconds={50} title="Timer1" />
      <CountdownTimer initialSeconds={20} title="Timer2" />
    </div>
  );
}

export default App;
