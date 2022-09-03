import React, { useState } from "react";
import Presentaton from "./Presentaton";
import Statut from "./Statut";

const AboutModal = () => {
  const [presentation, setPresentation] = useState(true);
  return (
    <div className="about-modal">
      <div className="header-btn">
        <button
          className={presentation ? "btn-active" : ""}
          onClick={() => setPresentation(true)}
        >
          Présentation
        </button>
        <button
          className={!presentation ? "btn-active" : ""}
          onClick={() => setPresentation(false)}
        >
          Statut
        </button>
      </div>
      {presentation ? <Presentaton /> : <Statut />}
      <div className="donwload-cv">
        <a
          className="link"
          href="https://exemple.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Télécharger CV
        </a>
      </div>
    </div>
  );
};

export default AboutModal;
