import React from "react";
import styles from "./box.module.css";

const Box = ({ box }) => {
  const { title, startDate, endDate, worktime, sum, color } = box;

  return (
    <div className={`${styles.box} ${getStyles(color)}`}>
      <li className={styles.info}>
        <h1>{title}</h1>
        <p>
          {startDate}~{endDate}
        </p>
        <p>{worktime}시간</p>
        <h1>{sum}원</h1>
      </li>
    </div>
  );
};

function getStyles(color) {
  switch (color) {
    case "red":
      return styles.red;
    case "orange":
      return styles.orange;
    case "yellow":
      return styles.yellow;
    case "green":
      return styles.green;
    case "blue":
      return styles.blue;
    case "purple":
      return styles.purple;
    case "pink":
      return styles.pink;
    default:
      throw new Error(`unknown color: ${color}`);
  }
}

export default Box;
