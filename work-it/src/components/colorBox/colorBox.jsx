import React from "react";
// import { ColorConsumer } from "./colorContext";
import styles from "./colorBox.module.css";
import Box from "components/box/box";

const ColorBox = ({ boxes }) => {
  return (
    <section className={styles.colorbox}>
      {boxes && boxes.map((box) => <Box box={box} />)}
    </section>
  );
};

export default ColorBox;
