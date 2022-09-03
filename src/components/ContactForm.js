import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

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
          }, 2500);
        },
        (error) => {
          // console.log(error.text);
          formMes.innerHTML =
            "<p class='error'>L'envoie du message a échoué, veuillez réessayer !</p>";

          setTimeout(() => {
            formMes.innerHTML = "";
          }, 2500);
        }
      );
  };

  return (
    <div className="form-container">
      <h2>Contactez nous</h2>
      <form ref={form} onSubmit={sendEmail} className="form-content">
        <div className="name-conatainer">
          {/* name icon */}
          <input
            type="text"
            name="name"
            required
            autoComplete="off"
            id="name"
          />
        </div>
        <div className="email-container">
          {/* email icon */}
          <input
            type="email"
            name="email"
            required
            autoComplete="off"
            id="email"
          />
        </div>
        <div className="message-container">
          {/* message icon */}
          <textarea name="message" id="mess" />
        </div>
        <div className="submit-container">
          {/* submit icon */}
          <input type="submit" value="Envoyer" className="submit-btn" />
        </div>
      </form>
      <div className="formMessage"></div>
    </div>
  );
};

export default ContactForm;
