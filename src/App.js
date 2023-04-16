import "./styles.css";
import React, { useState, useEffect } from "react";

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleMouseMove(event) {
    const { pageY } = event;
    const { innerHeight } = window;
    const percentage = pageY / innerHeight;
    const fontVariation = Math.round(200 + percentage * 100);
    document.documentElement.style.setProperty("--font-variation", fontVariation);
    const mouseY = event.clientY;
    const middle = window.innerHeight / 2;
    const difference = mouseY - middle;
    const range = middle / 2;
    const normalizedDifference = difference / range;
    const fontVariationInRange = Math.round(250 + 50 * normalizedDifference);
    document.documentElement.style.setProperty("--font-variation", fontVariationInRange);
  }

  return (
    <div className="pulsating-text" onMouseMove={handleMouseMove}>
      {screenWidth > 768 ? (
        <>
          <a
            href="mailto:press@apophenia.eu"
            style={{ color: "#faf5ed", textDecoration: "none" }}
          >
            apophenia
          </a>{" "}
          . <br />
          press -----
          <br />
          .......................
        </>
      ) : (
        <>
          <a
            href="mailto:press@apophenia.eu"
            style={{ color: "#faf5ed", textDecoration: "none" }}
          >
            apophenia
            <br />
            press &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          </a>
        </>
      )}
      <div className="static-text">
        <a>
          coming&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <br />
          soon&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp;
        </a>
      </div>
      <div className="credit-text">
        <a>
          FONT: GILLIANE CACHIN &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        </a>
      </div>
    </div>
  );
}

export default App;
