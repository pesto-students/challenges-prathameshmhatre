import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function useKeyPress(key) {
  const [keyPressed, setKeyPressed] = useState(false);

  function checkKeyDown(e) {
    if (e.key === key) {
      setKeyPressed(true);
    }
  }

  function checkKeyUp(e) {
    if (e.key === key) {
      setKeyPressed(false);
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", checkKeyDown);
    window.addEventListener("keyup", checkKeyUp);
    return () => {
      window.removeEventListener("keydown", checkKeyDown);
      window.removeEventListener("keyup", checkKeyUp);
    };
  }, []);

  return keyPressed;
}
function App() {
  const hKeyPressed = useKeyPress("h");
  return hKeyPressed ? <h1>Pressed</h1> : <h2>Not pressed</h2>;
}

export default App;
