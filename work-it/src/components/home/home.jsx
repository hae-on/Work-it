import Nav from "components/nav/nav";
import React from "react";
import styles from "./home.module.css";
import ColorBox from "../colorBox/colorBox";
import { ColorProvider } from "components/colorBox/colorContext";
import Editor from "components/editor/editor";

const Home = () => {
  return (
    <section className={styles.home}>
      <Nav />
      <div className={styles.container}>
        <Editor />
        <ColorProvider>
          <ColorBox />
        </ColorProvider>
      </div>
    </section>
  );
};

export default Home;
