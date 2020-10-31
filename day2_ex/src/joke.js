import "./App.css";
import React, { useEffect, useState, useInterval } from "react";

export default function Fetch() {
  const chuckUrl = "https://api.chucknorris.io/jokes/random";
  const [chuckJoke, setChuckJoke] = useState({ value: "" });

  function getChuckNorrisJoke() {
    fetch(chuckUrl)
      .then((res) => res.json())
      .then((chuckJoke) => {
        setChuckJoke(chuckJoke);
      });
  }

  const dadUrl = "https://icanhazdadjoke.com/";
  const [dadJoke, setDadJoke] = useState({ value: "joke" });
  function getDadJoke() {
    fetch(dadUrl, { headers: { Accept: "application/json" } })
      .then((res) => res.json())
      .then((dadJoke) => {
        setDadJoke(dadJoke);
      });
  }

  useEffect(() => {
    getDadJoke();
    const interval = setInterval(() => getDadJoke(), 10000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="App">
      <button onClick={getChuckNorrisJoke}>Get Chucknorris</button>
      <p>{chuckJoke.value}</p>
      <h3>Dad jokes: </h3>
      <p>{dadJoke.joke}</p>
    </div>
  );
}
