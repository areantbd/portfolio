import React from "react";
import menu from "./images/otfn-menu.png"
import google from "./images/otfn-google.png"
import pdf from "./images/otfn-pdf-foto.png"
import audio from "./images/otfn-audio.png"
import varios from "./images/otfn-varios.png"

function Otfn() {
  return (
    <div>
      Otfn
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner ">
          <div className="carousel-item active">
            <img src={menu} className="d-block w-75 mx-auto"  alt="..." />
          </div>
          <div className="carousel-item">
            <img src={google} className="d-block w-75 mx-auto" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={pdf} className="d-block w-75 mx-auto" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={audio} className="d-block w-75 mx-auto" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={varios} className="d-block w-75 mx-auto" alt="..." />
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
    </div>
  );
}

export default Otfn;
