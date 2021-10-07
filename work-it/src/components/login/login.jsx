import React, { useState } from "react";
import firebase from "firebase";
import { authService, firebaseInstance } from "service/fbase";
import styles from "./login.module.css";
import { FaTimes } from "react-icons/fa";
import { AiOutlineGoogle, AiFillGithub } from "react-icons/ai";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      let data;
      data = await firebase.auth().signInWithEmailAndPassword(email, password);
      console.log(data);
      history.push("/home");
    } catch (error) {
      setError(error.message);
    }
  };

  const onSocialLogin = async (event) => {
    const {
      target: { name },
    } = event;
    let provider;
    if (name === "Google") {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    } else if (name === "Github") {
      provider = new firebaseInstance.auth.GithubAuthProvider();
    }
    const data = await authService.signInWithPopup(provider);
    console.log(data);
  };

  return (
    <section className={styles.login}>
      <button onClick={() => history.push("/")} className={styles.close}>
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
        <div className={styles.error}>
          {error ? "이메일 또는 비밀번호를 다시 입력해주세요" : ""}
        </div>
        <input
          className={styles.start}
          type="submit"
          value={"시작하기"}
        ></input>
        <p className={styles.register}>
          혹시 회원이 아니신가요?
          <button
            onClick={() => history.push("/register")}
            className={styles.regiser__btn}
          >
            회원가입
          </button>
          하기
        </p>
        <p className={styles.easy__login}>간편 로그인하기</p>
        <button name="Google" className={styles.google} onClick={onSocialLogin}>
          <AiOutlineGoogle className={styles.google__icon} /> Google
        </button>
        <button name="Github" className={styles.github} onClick={onSocialLogin}>
          <AiFillGithub className={styles.github__icon} /> Github
        </button>
      </form>
    </section>
  );
};

export default Login;
