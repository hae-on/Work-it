import React from "react";
import { useHistory } from "react-router-dom";
import { authService } from "service/fbase";

const Home = (props) => {
  const history = useHistory();

  const onLogout = () => {
    authService.signOut();
    history.push("/");
  };

  return (
    <>
      <h1>Home</h1>
      <button onClick={onLogout}>로그아웃</button>
    </>
  );
};

export default Home;
