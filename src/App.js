import "./styles.css";
import React, { useState, useEffect } from "react";

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [fontVariation, setFontVariation] = useState(200);

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
    const newFontVariation = Math.round(150 + percentage * 175);
    setFontVariation(newFontVariation);
  }

  return (
    <div
      className="pulsating-text"
      onMouseMove={handleMouseMove}
      style={{ fontVariationSettings: `"grid" ${fontVariation}` }}
    >
      {screenWidth > 768 ? (
        // COMPUTER
        <>
          <a
            href="mailto:press@apophenia.eu"
            style={{ color: "#faf5ed", textDecoration: "none" }}
          >
            apophenia &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
            <br />
            press&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp;
          </a>

          <div className="static-text-bold">
            <a>
              COMING SOON &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp;&nbsp;
            </a>
          </div>
          <div className="static-text">
            <a>FONT BY GILIANE CACHIN&nbsp; &nbsp; </a>
          </div>
        </>
      ) : (
        // DEVICES
        <>
          <a href="mailto:press@apophenia.eu" className="pulsating-text">
            apophenia &nbsp; &nbsp;
            <br />
            press&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp;
          </a>

          <a className="static-text">
            coming
            <br />
            soon
          </a>

          <div className="credit-text">
            <a>
              FONT: GILLIANE CACHIN &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp;
            </a>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
