import { getUserDetails } from "../../Redux/Action/userAction";
import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { logout } from "../../Redux/Action/userSlice";
import argentBankLogo from "../../assets/img/argentBankLogo.png";

function Header() {
  const { userInfo, isConnected } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isConnected) {
      dispatch(getUserDetails());
    }
  }, [isConnected, dispatch]);

  return (
    <nav className={styles.mainNav}>
      <NavLink className={styles.mainNavLogo} to={`/`}>
        <img
          className={styles.mainNavLogoImage}
          src={argentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className={styles.srOnly}>Argent Bank</h1>
      </NavLink>
      <div className={styles.contentSign}>
        {userInfo ? (
          <>
            <NavLink className={styles.mainNavItem} to="/profile">
              <i className="fa fa-user-circle"></i>
              {userInfo.firstName}
            </NavLink>
            <NavLink
              className={styles.mainNavItem}
              to="/"
              onClick={() => dispatch(logout())}
            >
              <i className="fa fa-sign-out"></i>
              Sign Out
            </NavLink>
          </>
        ) : (
          <NavLink className={styles.mainNavItem} to="/login">
            <i className="fa fa-user-circle"></i>
            Sign In
          </NavLink>
        )}
      </div>
    </nav>
  );
}

export default Header;
