import React from "react";


function CertificateCard({ name, entity, date, image }) {
    console.log(image)
  return (
    <div className="card bg-secondary col-md-3">
      <img src={image} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          {entity}
          {date}
        </p>
      </div>
    </div>
  );
}

export default CertificateCard;
