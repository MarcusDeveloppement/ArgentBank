import React from "react";
import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <nav className={styles.mainNav}>
      <NavLink className={styles.mainNavLogo} to={`/`}>
        <img
          className={styles.mainNavLogoImage}
          src="../src\assets\img\argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className={styles.srOnly}>Argent Bank</h1>
      </NavLink>
      <div>
        <NavLink className={styles.mainNavItem} to={`/signIn`}>
          <i className="fa fa-user-circle"></i>
          Sign In
        </NavLink>
      </div>
    </nav>
  );
}

export default Header;
