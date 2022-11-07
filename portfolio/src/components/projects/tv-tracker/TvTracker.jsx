import React, { useContext, useEffect, useState } from "react";
import { LangContext } from "../../../contexts/LangContext";
import tv1 from "./images/tvtracker1.png";
import tv2 from "./images/tvtracker2.png";
import tv3 from "./images/tvtracker3.png";

function TvTracker() {
  const languaje = useContext(LangContext);
  const [lang, setLang] = useState(undefined);

  useEffect(() => {
    setLang(languaje);
  }, [languaje]);
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner ">
          <div className="carousel-item active">
            <img src={tv1} className="d-block w-75 mx-auto rounded" alt={tv1} />
          </div>
          <div className="carousel-item">
            <img src={tv2} className="d-block w-75 mx-auto rounded" alt={tv2} />
          </div>
          <div className="carousel-item">
            <img src={tv3} className="d-block w-75 mx-auto rounded" alt={tv3} />
          </div>
        </div>
        <button
          className="carousel-control-prev "
          type="button"
          data-bs-target="#carouselExampleControls"
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
          data-bs-target="#carouselExampleControls"
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
            Tv-Tracker es el proyecto final del segundo módulo en IronHack.
            <br />
            Ha sido creado en pareja, usando en la parte de back-end NodeJs con
            express y usando como DB MongoDB y la parte de front-end está echa
            con hbs y CSS. <br />
            Hemos usado librerias/frameworks como: <br />
            bcryptjs, handlebars y hbs, http-errors, morgan o nodemailer. <br />
            Con esta aplicación lo que hemos echo es una plataforma donde poder
            hacer un tracking de las series que te gustan y desde la que poder
            guradarlas en favoritos e ir marcando los capítulos ya vistos para
            no perderse ni uno.
          </h4>
          <div className="text-center">
            <a
              href="https://tvtrackerweb.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              Ir al proyecto.
            </a>
          </div>
        </>
      ) : (
        <>
          <h4 className="mt-3 container">
            Tv-Tracker is the final project of the second module in IronHack.
            <br />
            It has been created in couple, using in the back-end part NodeJs
            with express and using as DB MongoDB and the front-end part is made
            with hbs and CSS <br />
            We have used libraries/frameworks like: <br />
            bcryptjs, handlebars and hbs, http-errors, morgan or nodemailer.{" "}
            <br />
            With this application what we have done is a platform where you can
            track the series you like and from which you can save them in
            favorites and go marking the chapters already seen to not miss a
            single one.
          </h4>
          <div className="text-center">
            <a
              href="https://tvtrackerweb.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              Go to the project.
            </a>
          </div>
        </>
      )}
    </div>
  );
}

export default TvTracker;
