import React, { useState } from "react";
import styles from "./register.module.css";
import firebase from "firebase";
import { useHistory } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { AiFillPlusCircle } from "react-icons/ai";

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [error, setError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const history = useHistory();

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "passwordCheck") {
      setPasswordCheck(value);
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    // 이메일 중복 확인
    try {
      let data;
      data = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      history.push("/login");
      console.log(data);
    } catch (error) {
      setError(error.message);
      if (
        error.message ===
        "The email address is already in use by another account."
      ) {
        setError("이미 사용중인 이메일입니다. 다른 이메일을 입력해주세요.");
      } else if (
        error.message === "The password must be 6 characters long or more."
      ) {
        setError("비밀번호를 6글자 이상 입력해주세요.");
      }
    }

    // 비밀번호 불일치
    if (password !== passwordCheck) {
      setPasswordError("비밀번호가 일치하지 않습니다.");
    }
  };

  return (
    <section className={styles.register}>
      <button onClick={() => history.push("/login")} className={styles.close}>
        <FaTimes className={styles.x} />
      </button>
      <h1 className={styles.title}>회원가입</h1>
      <p className={styles.intro}>
        회원가입을 통해 Work it을 이용할 수 있어요 :)
      </p>
      <div className={styles.image}>
        <button className={styles.image__btn}>
          <AiFillPlusCircle className={styles.image__plus} />
        </button>
      </div>
      <form className={styles.form} onSubmit={onSubmit}>
        <div className={styles.email__container}>
          <input
            className={error ? styles.input__error : styles.email}
            placeholder="이메일"
            name="email"
            type="email"
            onChange={onChange}
          />
        </div>
        <input
          className={passwordError ? styles.input__error : styles.password}
          placeholder="비밀번호 (6글자 이상)"
          name="password"
          type="password"
          onChange={onChange}
        />
        <input
          className={passwordError ? styles.input__error : styles.password}
          placeholder="비밀번호 확인"
          name="passwordCheck"
          type="password"
          onChange={onChange}
        />
        <div className={styles.error}>{error}</div>
        <div className={styles.error}>{passwordError}</div>
        <input
          className={styles.start}
          type="submit"
          value={"가입하기"}
          onSubmit={onSubmit}
        ></input>
      </form>
    </section>
  );
};
export default Register;
