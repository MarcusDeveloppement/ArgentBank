import React from "react";
import styles from "./Form.module.scss";
import { NavLink } from "react-router-dom";

export default function Form() {
  return (
    <main className={`${styles.main} ${styles.bgDark}`}>
      <section className={styles.signInContent}>
        <i
          className={`fa fa-user-circle sign-in-icon ${styles.signInIcon}`}
        ></i>
        <h1>Sign In</h1>
        <form>
          <div className={styles.inputWrapper}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className={styles.inputWrapper}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className={styles.inputRemember}>
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <NavLink to="/dashboard" className={styles.signInButton}>
            Sign In
          </NavLink>
        </form>
      </section>
    </main>
  );
}
