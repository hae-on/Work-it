import Nav from "components/nav/nav";
import React, { useState } from "react";
import styles from "./home.module.css";
import ColorBox from "../colorBox/colorBox";
import Editor from "components/editor/editor";

const Home = () => {
  const [boxes, setBoxes] = useState([
    {
      id: "1",
      title: "파리바게트",
      date: "2021-10-15",
      color: "red",
      worktime: "155시간",
      sum: "400,000원",
    },
    {
      id: "2",
      title: "파리바게트",
      date: "2021-10-15",
      color: "red",
      worktime: "155시간",
      sum: "400,000원",
    },
  ]);
  return (
    <section className={styles.home}>
      <Nav />
      <div className={styles.container}>
        <Editor boxes={boxes} />
        <ColorBox boxes={boxes} />
      </div>
    </section>
  );
};

export default Home;
