import React, { useContext, useEffect, useState } from "react";
import { LangContext } from "../../../contexts/LangContext";
import ship1 from "./images/Shippingbids 1.png";
import ship2 from "./images/Shippingbids 2.png";
import ship3 from "./images/Shippingbids 3.png";
import ship4 from "./images/Shippingbids 4.png";

function ShippingBids() {
  const languaje = useContext(LangContext);
  const [lang, setLang] = useState(undefined);

  useEffect(() => {
    setLang(languaje);
  }, [languaje]);

  return (
    <div>
      <div
        id="carousel-shipping-bids"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner ">
          <div className="carousel-item active">
            <img
              src={ship1}
              className="d-block w-75 mx-auto rounded"
              alt={ship1}
            />
          </div>
          <div className="carousel-item">
            <img
              src={ship2}
              className="d-block w-75 mx-auto rounded"
              alt={ship2}
            />
          </div>
          <div className="carousel-item">
            <img
              src={ship3}
              className="d-block w-75 mx-auto rounded"
              alt={ship3}
            />
          </div>
          <div className="carousel-item">
            <img
              src={ship4}
              className="d-block w-75 mx-auto rounded"
              alt={ship4}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev "
          type="button"
          data-bs-target="#carousel-shipping-bids"
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
          data-bs-target="#carousel-shipping-bids"
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
            Shipping Bids es mi proyecto final de Ironhack. <br />
            Ha sido creado en pareja y utilizando todos los conocimientos
            adquiridos durante el BootCamp, está hecho, la parte de back-end en
            NodeJs con express, usando como DB, Mongo DB y la parte de front-end
            en React.Js, usando Axios para la comunicación front-back, Google
            Maps para mostrar el mapa y las chinchetas con las ofertas, y más
            librerías/frameworks como: <br />
            Moment, react google autoccomplete, MUI <br />
            Y para la parte de back: <br /> bcryptjs, cloudinary, multer,
            node-cron, http-errors. <br />
            Hemos querido crear una aplicación para poder poner en contacto
            empresas o particulares que necesiten hacer un porte, con
            profesionales dispuestos a hacerlo y que ellos mismos decidan, tanto
            el precio máximo que estaría dispuesto a pagar por parte el
            ofertante cómo el precio mínimo por el que estaría dispuesto a
            hacerlo el transportista.
          </h4>
          <div className="text-center">
            <a
              href="https://shipping-bids.herokuapp.com/"
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
            Shipping Bids is my final Ironhack project. <br />
            It has been created in pairs and using all the knowledge acquired
            during the BootCamp, it is made, the back-end part in NodeJs with
            express, using as DB, Mongo DB and the front-end part in React.Js,
            using Axios for the front-back communication, Google Maps to show
            the map and the pushpins with the bids, and more
            libraries/frameworks like: <br />
            Moment, react google autocomplete, MUI <br />
            And for the back end: <br /> bcryptjs, cloudinary, multer,
            node-cron, http-errors. <br />
            We wanted to create an application to put in contact companies or
            individuals who need to make a transport, with professionals willing
            to do it and that they themselves decide, both the maximum price
            that would be willing to pay by the bidder how the minimum price for
            which the carrier would be willing to do it.
          </h4>
          <div className="text-center">
            <a
              href="https://shipping-bids.herokuapp.com/"
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

export default ShippingBids;
