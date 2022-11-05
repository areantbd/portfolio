import React from "react";

function CertificateCard({ name, entity, date, image }) {
  return (
    <div className="card bg-secondary col-md-3">
      <a href={`${image}`}>
        <img src={image} className="card-img-top mt-3" alt={name} />
      </a>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <div className="mt-3">
          <p className="card-text ">Certificated by: {entity}</p>
          <p className="card-text">On date: {date}</p>
        </div>
      </div>
    </div>
  );
}

export default CertificateCard;
