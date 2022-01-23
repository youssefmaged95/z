import React from "react";
import logo from "./logo.png";
import "./App.css";
import Countdown from "react-countdown";

let BD = new Date("2022-01-24");
BD.setHours(BD.getHours() - 2);

function App() {
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={logo} className="App-logo" alt="logo" />
        <Countdown date={BD} />
      </div>
    </div>
  );
}

export default App;
