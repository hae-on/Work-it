import React from "react";
import Calendar from "design/datePicker";
import styles from "./editor.module.css";
import SelectColors from "components/colorBox/selectColors";
import ColorBox from "../colorBox/colorBox";
import { ColorProvider } from "components/colorBox/colorContext";

const Editor = () => {
  return (
    <section className={styles.editor}>
      <h1>editor</h1>
      {/* <form className={styles.form}>
        <h2 className={styles.main__title}>일을 입력해보세요</h2>
        <div className={styles.content}>
          <p className={styles.title}>
            <span for="start">제목: </span>
            <input
              className={styles.title__input}
              placeholder="제목을 입력해주세요."
            ></input>
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
            <div className={styles.color__box}>
              <ColorProvider>
                <SelectColors />
                 <ColorBox /> 
              </ColorProvider>
            </div>
          </div>
        </div>
      </form> */}
    </section>
  );
};

export default Editor;
