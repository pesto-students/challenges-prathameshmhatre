import React, { useState, useEffect, useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
function useHover() {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);

  function handleMouseOver() {
    setIsHovered(true);
  }

  function handleMouseOut() {
    setIsHovered(false);
  }

  useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener("mouseover", handleMouseOver);
      node.addEventListener("mouseout", handleMouseOut);

      return () => {
        node.removeEventListener("mouseover", handleMouseOver);
        node.removeEventListener("mouseout", handleMouseOut);
      };
    }
  }, [ref.current]);

  return [ref, isHovered];
}
function App() {
  const [hoverRef, isHovered] = useHover();
  return <div ref={hoverRef}>{isHovered ? "Hovered !" : "Hover me !"}</div>;
}

export default App;
