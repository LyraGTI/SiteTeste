import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Olá, eu sou a Blenda!</h1>
        <p className={styles.description}>
          Profissional de RH com ampla experiência em Recrutamento e Seleção, pronta para te ajudar a alcançar o sucesso profissional. Vamos juntos conquistar as melhores oportunidades no mercado de trabalho!
        </p>
        <a href="mailto:blendalyra@gmail.com" className={styles.contactBtn}>
          Contate-me
        </a>
      </div>
      <img
        src={getImageUrl("hero/BlmPerson.png")}
        alt="Essa aqui sou eu!"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
