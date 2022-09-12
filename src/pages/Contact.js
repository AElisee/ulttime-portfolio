import React from "react";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const Contact = () => {
  return (
    <>
      <div className="contacts">
        <Navigation />
        <div className="contacts-container">
          <h3 className="section-title">Contactez-moi !</h3>
          <p>
            Je suis ouvert aux <em>offres d'emploi</em> et <em>stages</em> en
            dévéloppement web ou toutes colaborations dans le domaine des TIC.
            <br /> N'hesitez pas à me contacter pour des suggestions ou me dire
            Bonjour !
          </p>
        </div>
        <div className="form-map">
          <div className="form">
            <ContactForm />
          </div>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108739.17777704001!2d-4.126656721483846!3d5.474358294364098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc195913f7c901d%3A0xfa3999b0dac53520!2sgendarmerie%20d&#39;abobo!5e0!3m2!1sfr!2sci!4v1662208624822!5m2!1sfr!2sci"
              width="800"
              height="600"
              style={{ border: 0 }}
              allowSullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
