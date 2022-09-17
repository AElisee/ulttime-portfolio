import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import SocialNetwork from "./SocialNetwork";
import CopyToClipboard from "react-copy-to-clipboard";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const formMes = document.querySelector(".formMessage");

    emailjs
      .sendForm(
        "service_k1dntea",
        "template_m56ahbt",
        form.current,
        process.env.REACT_APP_ID
      )
      .then(
        (result) => {
          // console.log(result.text);
          form.current.reset();
          formMes.innerHTML = "<p class='success'>Message envoyé !</p>";

          setTimeout(() => {
            formMes.innerHTML = "";
          }, 3000);
        },
        (error) => {
          // console.log(error.text);
          formMes.innerHTML =
            "<p class='error'>L'envoie du message a échoué, veuillez réessayer !</p>";

          setTimeout(() => {
            formMes.innerHTML = "";
          }, 3000);
        }
      );
  };

  return (
    <div className="form-container">
      <form ref={form} onSubmit={sendEmail} className="form-content">
        <div className="name-conatainer">
          <img src="./icons/user.svg" alt="person-icon" />
          <input
            type="text"
            name="name"
            required
            autoComplete="off"
            id="name"
            placeholder="Votre nom"
          />
        </div>
        <div className="email-container">
          <img src="./icons/mail.svg" alt="email-icon" />
          <input
            type="email"
            name="email"
            required
            autoComplete="off"
            id="email"
            placeholder="Votre adresse mail"
          />
        </div>
        <div className="message-container">
          <textarea name="message" id="mess" placeholder="Votre message..." />
        </div>
        <div className="submit-container">
          <input type="submit" value="Envoyer" className="submit-btn hover" />
        </div>
      </form>
      <div className="formMessage"></div>
      <div className="address">
        <p>Abidjan, Côte d'Ivoire</p>
        <CopyToClipboard text="2kange.eli@gmail.com">
          <p
            className="email hover"
            onClick={() => alert("L'Email a bien été copié")}
          >
            2kange.eli@gmail.com
          </p>
        </CopyToClipboard>
        <CopyToClipboard text="0789141381">
          <p
            className="phone hover"
            onClick={() => alert("Le téléphone a bien été copié")}
          >
            +225 07 891 413 81
          </p>
        </CopyToClipboard>
      </div>
      <SocialNetwork />
    </div>
  );
};

export default ContactForm;
