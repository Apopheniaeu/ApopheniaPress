import "./styles.css";
import React, { useState, useEffect } from "react";

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="pulsating-text">
      {screenWidth > 768 ? (
        <>
          <a
            href="mailto:press@apophenia.eu"
            style={{ color: "#faf5ed", textDecoration: "none" }}
          >
            apophenia
          </a>{" "}
          . <br />
          <a
            href="mailto:press@apophenia.eu"
            style={{ color: "#faf5ed", textDecoration: "none" }}
          >
            press-----
          </a>{" "}
          <br />
          <a
            href="mailto:press@apophenia.eu"
            style={{ color: "#faf5ed", textDecoration: "none" }}
          >
            .......................
          </a>
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
