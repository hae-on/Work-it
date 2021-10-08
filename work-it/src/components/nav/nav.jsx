import React from "react";
import styles from "./nav.module.css";
import { useHistory } from "react-router-dom";
import { authService } from "service/fbase";
import logo from "../../img/logo.png";

const Nav = (props) => {
  const history = useHistory();

  const onLogout = () => {
    authService.signOut();
    history.push("/");
  };

  return (
    <>
      <nav className={styles.container}>
        <img className={styles.logo} src={logo} alt="logo" />
        <button className={styles.logout} onClick={onLogout}>
          logout
        </button>
      </nav>
    </>
  );
};

export default Nav;
