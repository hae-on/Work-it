import React from "react";
import styles from "./box.module.css";

const Box = ({ box }) => {
  const { id, title, date, worktime, sum, color } = box;

  return (
    <div className={styles.box}>
      <li className={styles.info}>
        <h1>{title}</h1>
        <p>{date}</p>
        <p>{worktime}</p>
        <h1>{sum}</h1>
      </li>
    </div>
  );
};

export default Box;
