import React from "react";

const Statut = () => {
  return (
    <div className="statut">
      <div className="statut-container">
        <div className="left-part">
          <div className="content">
            <span>Statut de travail actuel</span>
            <p>
              Je suis à la recherche d'un stage de perfectionnement ou d'un
              emploi direct au post de développeur front-end (ReactJs)
            </p>
          </div>
        </div>
        <div className="right-part">
          <div className="age">
            <span>Age </span>
            <p> 27 Août 1998</p>
          </div>
          <div className="city">
            <span>Ville </span>
            <p> Abidjan, Côte d'Ivoire</p>
          </div>
          <div className="phone">
            <span>Téléphone </span>
            <p>07 89 14 13 81</p>
          </div>
          <div className="mail">
            <span>E-mail </span>
            <p>2kange.eli@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statut;
