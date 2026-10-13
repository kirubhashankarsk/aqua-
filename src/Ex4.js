import React, { useState } from "react";
import "./Ex4.css";

function Ex4() {
  
  const [room, setRoom] = useState({
    roomName: "Living Room",
    temp: 24,
    isEcoMode: true
  });

  
  const { roomName, temp, isEcoMode } = room;

 
  const h= (e) => {
    setRoom({
      ...room, 
      temp: Number(e.target.value)
    });
  };

  
  const to = () => {
    setRoom({
      ...room,
      isEcoMode: !isEcoMode
    });
  };

  
  const get = () => {
    if (temp < 18) return "❄ Cold";
    if (temp >= 18 && temp <= 26) return "🌤 Warm";
    return "🔥 Hot";
  };

  return (
    <div className="c">
      <h2>{roomName}</h2>
      <p className="t">Current Temperature: {temp}°C</p>

     
      <span className="s">{get()}</span>

      
      <input
        type="range"
        min="10"
        max="40"
        value={temp}
        onChange={h}
      />

     
      <button onClick={to}>
        Eco : {isEcoMode ? "ON " : "OFF"}
      </button>

     
      {temp > 30 && (
        <p className="w">Warning: High Temperature</p>
      )}
    </div>
  );
}

export default Ex4