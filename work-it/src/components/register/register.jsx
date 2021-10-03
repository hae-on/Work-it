import React from "react";
import styles from "./register.module.css";
import { useHistory } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { AiFillPlusCircle } from "react-icons/ai";

const Register = (props) => {
  const history = useHistory();

  return (
    <section className={styles.register}>
      <button onClick={() => history.push("/")} className={styles.close}>
        <FaTimes className={styles.x} />
      </button>
      <h1 className={styles.title}>회원가입</h1>
      <p className={styles.intro}>
        회원가입을 통해 Work it을 이용할 수 있어요 :)
      </p>
      <form className={styles.form}>
        <div className={styles.image}>
          <button className={styles.image__btn}>
            <AiFillPlusCircle className={styles.image__plus} />
          </button>
        </div>
        <div className={styles.email__container}>
          <input
            className={styles.email}
            placeholder="이메일"
            name="email"
            type="email"
          />
          <button className={styles.check__btn}>중복확인</button>
        </div>
        <input
          className={styles.password}
          placeholder="비밀번호"
          name="password"
          type="password"
        />
        <input
          className={styles.password}
          placeholder="비밀번호 확인"
          name="password"
          type="password"
        />
        <input
          className={styles.start}
          type="submit"
          value={"시작하기"}
        ></input>
      </form>
    </section>
  );
};
export default Register;
