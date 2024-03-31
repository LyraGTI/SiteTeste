import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Entre em Contato!</h2>
        <p>Venha dar um up em sua apresentação profissional!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:blmConsulting@gmail.com">blmconsulting@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/blenda-martins-6473ba20b/">linkedin.com/blendaMartins</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/whatsapp5.png")} alt="WhatsApp Icone" />
          <a href="https://www.github.com/myname">Me chame no WhatsApp!</a>
        </li>
      </ul>
    </footer>
  );
};
