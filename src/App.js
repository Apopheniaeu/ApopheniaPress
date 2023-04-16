import "./styles.css";
import React, { useState, useEffect } from "react";

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [fontVariation, setFontVariation] = useState(250);

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
    const newFontVariation = Math.round(200 + percentage * 100);
    setFontVariation(newFontVariation);
  }

  return (
    <div
      className="pulsating-text"
      onMouseMove={handleMouseMove}
      style={{ fontVariationSettings: `"grid" ${fontVariation}` }}
    >
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
