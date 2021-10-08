import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./main.module.css";

const Main = (props) => {
  const history = useHistory();
  const onClick = () => {
    history.push("/login");
  };

  return (
    <div className={styles.main}>
      <span className={styles.intro}>
        Work it-!에 오신 것을 환영해요! 아래 버튼을 눌러 시작해보세요 🎉
      </span>
      <div className={styles.btn}>
        <button onClick={onClick} className={styles.start}>
          시작하기
        </button>
      </div>
    </div>
  );
};

export default Main;
