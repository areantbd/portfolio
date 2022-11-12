import React, { useContext, useEffect, useState } from 'react'
import { LangContext } from '../../../contexts/LangContext';
import Modal from "../../UI/modal/Modal"
import port1 from "./images/port1.png";
import port2 from "./images/port2.png";
import port3 from "./images/port3.png";
import port4 from "./images/port4.png";

function Portfolio() { 
  const languaje = useContext(LangContext);
  const [lang, setLang] = useState(undefined);

  useEffect(() => {
    setLang(languaje);
  }, [languaje]);
  return (
    <div>
      <div
        id="carousel-portf"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner ">
          <div className="carousel-item active">
            <img
              src={port1}
              className="d-block w-75 mx-auto rounded"
              alt={port1}
            />
          </div>
          <div className="carousel-item">
            <img
              src={port2}
              className="d-block w-75 mx-auto rounded"
              alt={port2}
            />
          </div>
          <div className="carousel-item">
            <img
              src={port3}
              className="d-block w-75 mx-auto rounded"
              alt={port3}
            />
          </div>
          <div className="carousel-item">
            <img
              src={port4}
              className="d-block w-75 mx-auto rounded"
              alt={port4}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev "
          type="button"
          data-bs-target="#carousel-portf"
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
          data-bs-target="#carousel-portf"
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
            Mi portfolio es el lugar dónde voy a tener el resumen de todos mis proyectos y certificados, además de un poquito de mi, formas de contactar conmigo y donde poder encontrar mi Curiculum actualizado.
          </h4>
          <div className="text-center">
            <Modal />
          </div>
        </>
      ) : (
        <>
          <h4 className="mt-3 container">
          My portfolio is the place where I will have a summary of all my projects and certificates, as well as a little bit about myself, ways to contact me and where you can find my updated CV.
          </h4>
          <div className="text-center">
            <Modal />
          </div>
        </>
      )}
    </div>
  )
}

export default Portfolio