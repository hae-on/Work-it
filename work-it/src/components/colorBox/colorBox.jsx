import React from "react";
import styles from "./colorBox.module.css";
import Box from "components/box/box";

const ColorBox = ({ boxes }) => {
  return (
    <section className={styles.colorbox}>
      {Object.keys(boxes).map((key) => (
        <Box key={key} box={boxes[key]} />
      ))}
    </section>
  );
};

export default ColorBox;
