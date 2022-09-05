import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import SocialNetwork from "./SocialNetwork";

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
      <p>
        N'hesitez pas à me contactez pour des propositions d'emploi ou me dire
        Bonjour !
      </p>
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
          <input type="submit" value="Envoyer" className="submit-btn" />
        </div>
      </form>
      <div className="formMessage"></div>
      <div className="tel-mail">
        <p>2kange.eli@gmail.com</p>
        <p>+225 07 891 413 81</p>
      </div>
      <SocialNetwork />
    </div>
  );
};

export default ContactForm;
