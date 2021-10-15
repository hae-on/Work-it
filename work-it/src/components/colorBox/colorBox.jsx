import React, { useState } from "react";
import { ColorConsumer } from "./colorContext";
import styles from "./colorBox.module.css";
import Box from "box/box";

const ColorBox = ({ boxes }) => {
  return (
    <section className={styles.colorbox}>
      {boxes.map((box) => (
        <Box box={box} />
      ))}
      {/* <ColorConsumer>
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
      </ColorConsumer> */}
    </section>
  );
};

export default ColorBox;
