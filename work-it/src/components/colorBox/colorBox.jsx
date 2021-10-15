import React, { useState } from "react";
import { ColorConsumer } from "./colorContext";
import styles from "./colorBox.module.css";

const ColorBox = () => {
  const [boxs, setBoxs] = useState([
    {
      id: "1",
      title: "파리바게트",
      date: "2021-10-15",
      color: "red",
      worktime: "155시간",
      sum: "400,000원",
    },
  ]);
  return (
    <section className={styles.colorbox}>
      <h1>box</h1>
      <ColorConsumer>
        {({ state }) => (
          <>
            <div
              style={{
                background: state.color,
              }}
              className={styles.box1}
            />
            <div
              style={{
                background: state.subcolor,
              }}
              className={styles.box2}
            />
          </>
        )}
      </ColorConsumer>
    </section>
  );
};

export default ColorBox;
