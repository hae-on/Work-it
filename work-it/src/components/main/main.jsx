import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./main.module.css";
import logo from "../../img/main.gif";

const Main = (props) => {
  const history = useHistory();
  const onClick = () => {
    history.push("/login");
  };

  return (
    <div className={styles.main}>
      <img src={logo} alt="logo" className={styles.logo} />
      <div>
        <p className={styles.intro}>
          Work it-!에 오신 것을 환영해요! 아래 버튼을 눌러 시작해보세요 🎉
        </p>
        <div className={styles.btn}>
          <button onClick={onClick} className={styles.start}>
            시작하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
