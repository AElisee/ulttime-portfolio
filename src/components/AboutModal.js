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
          id="statut"
          className={!presentation ? "btn-active" : ""}
          onClick={() => setPresentation(false)}
        >
          Statut
        </button>
      </div>
      {presentation ? <Presentaton /> : <Statut />}
      <div className="donwload-cv">
        <a
          className="link hover"
          href="./CV_ANGE_KOUASSI.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Télécharger CV
          <img
            src="./icons/file-text.svg"
            alt=""
            style={{ transform: "translateY(5px)", filter: "invert(100%)" }}
          />
        </a>
      </div>
    </div>
  );
};

export default AboutModal;
