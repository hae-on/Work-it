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
    if (password !== passwordCheck) {
      // 화면에 출력되도록 변경
      return alert("비밀번호를 다시 입력해주세요");
    }
    try {
      let data;
      data = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      history.push("/login");
      console.log(data);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section className={styles.register}>
      <button onClick={() => history.push("/")} className={styles.close}>
        <FaTimes className={styles.x} />
      </button>
      <h1 className={styles.title}>회원가입</h1>
      <p className={styles.intro}>
        회원가입을 통해 Work it을 이용할 수 있어요 :)
      </p>
      <form className={styles.form} onSubmit={onSubmit}>
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
            onChange={onChange}
          />
          <button className={styles.check__btn}>중복확인</button>
        </div>
        xw
        <input
          className={styles.password}
          placeholder="비밀번호"
          name="password"
          type="password"
          onChange={onChange}
        />
        <input
          className={styles.password}
          placeholder="비밀번호 확인"
          name="passwordCheck"
          type="password"
          onChange={onChange}
        />
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
