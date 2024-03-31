import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Sobre meu trabalho:</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/recrutamento1.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/recrutar1.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Recrutamento</h3>
              <p>
              Recruto profissionais para vagas em todo o Brasil, abrangendo diversos níveis de cargos e funções.              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/pessoas1.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Gestão de Pessoas </h3>
              <p>
                Auxilio no desenvolvimento de pessoas com técnicas de RH para obter sucesso em sua carreira profissional.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cv1.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Estruturação curricular</h3>
              <p>
                Auxilio na construção ou reconstrução de currículos tornando estratégico e atrativo aos recrutadores, com o objetivo de proporcionar uma vantagem competitiva no mercado de trabalho.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
