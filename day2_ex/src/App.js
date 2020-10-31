import "./App.css";
import Count from "./file1.js";
import Fetch from "./joke.js";
import React from "react";
import Member from "./ListDemo.js";

const App = () => {
  return (
    <div className="App">
      <p>React Day 2</p>
      {/* <Count init={parseInt(localStorage.getItem("count"))} increment={5}/> */}
      <Count init={50} increment={5} />
      <Fetch />
      <Member />
    </div>
  );
};

export default App;
