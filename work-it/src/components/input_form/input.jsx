import React from "react";
import Calendar from "design/datePicker";
import styles from "./input.module.css";
import SelectColors from "design/selectColors";
import ColorBox from "design/colorBox";
import { ColorProvider } from "design/colorContext";

const Input = () => {
  return (
    <div className={styles.container}>
      <h2>일을 입력해보세요</h2>
      <form className={styles.form}>
        <div className={styles.content}>
          <p className={styles.title}>
            <span for="start">제목: </span>
            <input></input>
          </p>
          <div className={styles.calendar}>
            <span>날짜: </span>
            <Calendar />
            <span>~</span>
            <Calendar />
          </div>
          <p>
            계산:
            <div className={styles.calculation}>gh</div>
          </p>
          <p>총 금액:</p>
          <div className={styles.colors}>
            <p>색상:</p>
            <div className={styles.a}>
              <ColorProvider>
                <SelectColors />
                {/* <ColorBox /> */}
              </ColorProvider>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Input;
