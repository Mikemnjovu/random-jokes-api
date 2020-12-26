import React, { useState, useEffect } from "react";
import "./style.css";

export default function App() {
  const randomJokeURI =
    "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart";
  // const randomJokeURI =
  //   "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart";
  // const promise = new Promise((resolve, reject) => {
  //   resolve(console.log(response()));
  //   reject(
  //     console.log('error'))

  // })
  const [punchline, setPuncline] = useState("");
  const [setup, setSetup] = useState("");
  const [showPunchline, setShowPuncline] = useState("");

  const testFetchF = () => {
    const getJoke = async () => {
      await fetch(randomJokeURI)
        // Handle success
        .then(response => response.json()) // convert to json
        .then(json => {
          const data = json;
          console.log(data);

          setSetup(json.setup);

          setPuncline(json.delivery);
        }) //print data to console
        .catch(err => console.log("Request Failed", err)); // Catch errors
      setShowPuncline(false);
    };
    // useEffect(() => {
    getJoke();
    // }, []);
  };
  const showPunchlineHandler = () => {
    setShowPuncline(true);
  };

  return (
    <div>
      <h1>{setup ? setup : ""}</h1>
      <h1>{showPunchline ? punchline : ""}</h1>
      <button onClick={testFetchF}> Randome joke</button>
      <button onClick={showPunchlineHandler}>Show Punchline</button>
    </div>
  );
}
