import React, { useContext, useEffect, useState } from "react";
import menu from "./images/otfn-menu.png"
import google from "./images/otfn-google.png"
import pdf from "./images/otfn-pdf-foto.png"
import audio from "./images/otfn-audio.png"
import varios from "./images/otfn-varios.png"
import { LangContext } from "../../../contexts/LangContext";

function Otfn() {
  const languaje = useContext(LangContext)
  const [lang, setLang] = useState(undefined)

  useEffect(() => {
    setLang(languaje)
  }, [languaje])
  return lang?.lang === "esp" ? (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner ">
          <div className="carousel-item active">
            <img src={menu} className="d-block w-75 mx-auto"  alt={menu} />
          </div>
          <div className="carousel-item">
            <img src={google} className="d-block w-75 mx-auto" alt={google} />
          </div>
          <div className="carousel-item">
            <img src={pdf} className="d-block w-75 mx-auto" alt={pdf} />
          </div>
          <div className="carousel-item">
            <img src={audio} className="d-block w-75 mx-auto" alt={audio} />
          </div>
          <div className="carousel-item">
            <img src={varios} className="d-block w-75 mx-auto" alt={varios} />
          </div>
        </div>
        <button
          className="carousel-control-prev "
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon text-dark" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <h4>Online tools for noobs es mi primer proyecto terminado. <br/>
      Es un proyecto que hice por petición de mi mujer para juntar en un mismo sitio herramientas online gratuitas que utilizaba en mi día a día y otras que fuí encontrando a raíz de empezar el proyecto. <br/>
      Está creado usando únicamente HTML, CSS y los pocos conocimientos adquiridos de modo autodidacta y gracias al pre-work del BootCamp, con lo que no es de lo más bonito, por supuesto no es responsive y no tiene toda la funcionalidad que hoy le podría dar y que en algún momento me gustaría darle.
      Con lo que... sabiendo esto, por favor, no lo judgues muy duramente.</h4>
      <a href="https://areantbd.github.io/OTFN-Online-Tools-For-Noobs/" target="_blank" rel="noreferrer">Ir al proyecto</a>
    </div>
  ) : (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner ">
          <div className="carousel-item active">
            <img src={menu} className="d-block w-75 mx-auto"  alt={menu} />
          </div>
          <div className="carousel-item">
            <img src={google} className="d-block w-75 mx-auto" alt={google} />
          </div>
          <div className="carousel-item">
            <img src={pdf} className="d-block w-75 mx-auto" alt={pdf} />
          </div>
          <div className="carousel-item">
            <img src={audio} className="d-block w-75 mx-auto" alt={audio} />
          </div>
          <div className="carousel-item">
            <img src={varios} className="d-block w-75 mx-auto" alt={varios} />
          </div>
        </div>
        <button
          className="carousel-control-prev "
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon text-dark" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <h4>Online tools for noobs is my first finished project.  <br/>
      It is a project that I made by request of my wife to gather in one place free online tools that I used in my daily life and others that I found when I started the project. <br/>
      It is created using only HTML, CSS and the little knowledge acquired in a self-taught way and thanks to the pre-work of BootCamp, so it is not the prettiest, of course it is not responsive and does not have all the functionality that today I could give it and that at some point I would like to give it.
      So... knowing this, please don't judge it too harshly.</h4>
      <a href="https://areantbd.github.io/OTFN-Online-Tools-For-Noobs/" target="_blank" rel="noreferrer">Ir al proyecto</a>
    </div>
  )
}

export default Otfn;
