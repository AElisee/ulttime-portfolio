import React from "react";

const Presentaton = () => {
  return (
    <div className="presentation">
      <div className="content">
        <div className="awards">
          <p>
            <span>
              <img src="./icons/certificate.svg" alt="" />- Je suis Dévéloppeur
              web, Front-end <em>ReactJs | Redux </em>, intermédiaire
              autodidacte.
            </span>
          </p>
        </div>
        <div className="awards">
          <p>
            <span>
              <img src="./icons/certificate.svg" alt="" />- J'ai obtenu un
              <em> Certificat </em>
              en développement d'application web et mobile.
            </span>
          </p>
          <span>
            <i className="mgl">A Orange Digital Academy | 2021.</i>
          </span>
        </div>
        <div className="awards">
          <p>
            <span>
              <img src="./icons/award.svg" alt="" />- Je suis titulaire d'une{" "}
              <em>LICENCE</em> en informatique et sciences du numérique
            </span>
          </p>
          <span className="mgl">Spécialité bases de données.</span>
          <span>
            <i>A l'Université virtuelle de côte d’ivoire | 2019.</i>
          </span>
        </div>

        <div className="awards">
          <p>
            <span>
              <img src="./icons/certificate.svg" alt="" />- J'ai obtenu un
              <em> Certificat </em> en développement d'application web et
              mobile.
            </span>
          </p>
          <span>
            <i className="mgl">
              Suite à une formation orginisée par l'agence emploi jeunes | 2019.
            </i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Presentaton;
