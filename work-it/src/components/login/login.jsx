import React, { useState } from "react";
import { authService } from "service/fbase";
import styles from "./login.module.css";
import { FaTimes } from "react-icons/fa";
import { AiOutlineGoogle, AiFillGithub } from "react-icons/ai";
import firebase from "firebase";

const Login = ({ authService }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      let data;
      if (newAccount) {
        data = await firebase
          .auth()
          .createUserWithEmailAndPassword(email, password);
      } else {
        data = await firebase
          .auth()
          .signInWithEmailAndPassword(email, password);
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const onLogin = (event) => {
    authService //
      .login(event.currentTarget.textContent) //
      .then(console.log);
  };

  return (
    <section className={styles.login}>
      <button className={styles.close}>
        <FaTimes className={styles.x} />
      </button>
      <h1 className={styles.title}>
        Work it -! <br />
        이번 달, 당신이 일한 시간은?
      </h1>
      <p className={styles.intro}>먼저, 로그인이 필요해요 :)</p>
      <form className={styles.form} onSubmit={onSubmit} action="">
        <input
          className={styles.email}
          placeholder="이메일을 입력해주세요."
          name="email"
          type="email"
          value={email}
          onChange={onChange}
        />
        <input
          className={styles.password}
          placeholder="비밀번호를 입력해주세요."
          name="password"
          type="password"
          value={password}
          onChange={onChange}
        />
        <input
          className={styles.start}
          type="submit"
          value={newAccount ? "계정 만들기" : "시작하기"}
        ></input>
        <p className={styles.register}>
          혹시 회원이 아니신가요?
          <button className={styles.regiser__btn}> 회원가입 </button>하기{" "}
        </p>
        <p className={styles.easy__login}>간편 로그인하기</p>
        <button className={styles.google} onClick={onLogin}>
          <AiOutlineGoogle className={styles.google__icon} /> Google
        </button>
        <button className={styles.github} onClick={onLogin}>
          <AiFillGithub className={styles.github__icon} /> Github
        </button>
      </form>
    </section>
  );
};

export default Login;
