import React from "react";
import CertificateCard from "../components/certificate-card/CertificateCard";
import certificatesData from "../data/certificates/certificatesData";

function Certificates() {
  return (
    <div className="container pt-4 row gap-3 mx-auto justify-content-evenly align-items-center pb-5">
      {certificatesData.map((certificate) => (
        <CertificateCard {...certificate} key={certificate.date} />
      ))}
    </div>
  );
}

export default Certificates;
