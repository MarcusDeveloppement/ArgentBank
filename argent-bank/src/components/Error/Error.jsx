import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Error.module.scss";

export default function Error() {
  return (
    <div className={styles.content}>
      <h1 className={styles.error}>
        Erreur <span>404</span>
      </h1>
      <p className={styles.msg}>
        Oups! <br></br> La page que vous demandez n'existe pas.
      </p>
      <NavLink to="/" className={styles.link}>
        <p>Retourner sur la page d’accueil</p>
      </NavLink>
    </div>
  );
}
