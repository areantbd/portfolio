import React, { useContext, useEffect, useState } from "react";
import { LangContext } from "../../../contexts/LangContext";
// import scuba1 from "./images/scuba1.png";
// import scuba2 from "./images/scuba2.png";
// import scuba3 from "./images/scuba3.png";
// import scuba4 from "./images/scuba4.png";
// import scuba5 from "./images/scuba5.png";
// import scuba6 from "./images/scuba6.png";

function ScubaDiver() {
  const languaje = useContext(LangContext);
  const [lang, setLang] = useState(undefined);

  useEffect(() => {
    setLang(languaje);
  }, [languaje]);

  return (
    <div>
      <div
        id="carousel-scuba"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        {/* <div className="carousel-inner ">
          <div className="carousel-item active">
            <img
              src={scuba1}
              className="d-block w-75 mx-auto rounded"
              alt={scuba1}
            />
          </div>
          <div className="carousel-item">
            <img
              src={scuba2}
              className="d-block w-75 mx-auto rounded"
              alt={scuba2}
            />
          </div>
          <div className="carousel-item">
            <img
              src={scuba3}
              className="d-block w-75 mx-auto rounded"
              alt={scuba3}
            />
          </div>
          <div className="carousel-item">
            <img
              src={scuba4}
              className="d-block w-75 mx-auto rounded"
              alt={scuba4}
            />
          </div>
          <div className="carousel-item">
            <img
              src={scuba5}
              className="d-block w-75 mx-auto rounded"
              alt={scuba5}
            />
          </div>
          <div className="carousel-item">
            <img
              src={scuba6}
              className="d-block w-75 mx-auto rounded"
              alt={scuba6}
            />
          </div>
        </div> */}
        <button
          className="carousel-control-prev "
          type="button"
          data-bs-target="#carousel-scuba"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon text-dark"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carousel-scuba"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {lang?.lang === "esp" ? (
        <>
          <h4 className="mt-3 container">
            Scuba Diver es mi primer proyecto de fin de módulo en Ironhack.
            <br />
            Ha sido creado de manera individual utilizando HTML, canvas, CSS y
            JavasCript.
            <br />
            El juego trata de un buzo (una de mis pasiones), que debe sacar
            fotos de la fauna marina, teniendo cuidado de no chocar con los
            obstáculos que se encuentre por el camino.
          </h4>
          <div className="text-center">
            <a
              href="https://areantbd.github.io/Scuba-Diver/"
              target="_blank"
              rel="noreferrer"
            >
              Ir al proyecto (Sólo PC).
            </a>
          </div>
        </>
      ) : (
        <>
          <h4 className="mt-3 container">
            Scuba Diver is my first end-of-module project at Ironhack.
            <br />
            It has been created individually using HTML, canvas, CSS and
            JavasCript.
            <br />
            The game is about a scuba diver (one of my passions), who must take
            pictures of marine fauna, being careful not to collide with
            obstacles along the way.
          </h4>
          <div className="text-center">
            <a
              href="https://areantbd.github.io/Scuba-Diver/"
              target="_blank"
              rel="noreferrer"
            >
              Go to the project (PC Only).
            </a>
          </div>
        </>
      )}
    </div>
  );
}

export default ScubaDiver;
