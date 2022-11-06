import React, { useContext, useEffect, useState } from "react";
import { LangContext } from "../../contexts/LangContext";

function CertificateCard({ name, entity, date, image }) {
  const languaje = useContext(LangContext);
  const [lang, setLang] = useState("");

  useEffect(() => {
    setLang(languaje);
  }, [languaje]);

  return lang?.lang === "eng" ? (
    <div className="card bg-secondary col-md-3">
      <a href={`${image}`}>
        <img src={image} className="card-img-top mt-3" alt={name} />
      </a>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <div className="mt-3">
          <p className="card-text ">Certificated by: {entity}</p>
          <p className="card-text">On date: <br/>{date}</p>
        </div>
      </div>
    </div>
  ) : (
    <div className="card bg-secondary col-md-3">
      <a href={`${image}`}>
        <img src={image} className="card-img-top mt-3" alt={name} />
      </a>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <div className="mt-3">
          <p className="card-text ">Certificado por: {entity}</p>
          <p className="card-text">A fecha: <br/>{date}</p>
        </div>
      </div>
    </div>
  );
}

export default CertificateCard;
