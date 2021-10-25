import React from "react";
import styles from "./box_edit_form.module.css";
import SelectColors from "components/colorBox/selectColors";

const BoxEditForm = ({ box }) => {
  const { id, title, date, worktime, sum, color } = box;

  return (
    <div className={styles.content}>
      <p className={styles.title}>
        <span className={styles.category}>제목: </span>
        <input
          className={styles.title__input}
          placeholder="제목을 입력해주세요."
          value={title}
        ></input>
      </p>
      <div className={styles.calendar}>
        <span className={styles.category}>
          날짜:
          <input className={styles.date} value={date}></input>
        </span>
      </div>
      <p className={styles.category}>
        총 시간:
        <input className={styles.worktime} value={worktime}></input>
      </p>
      <p className={styles.category}>
        총 금액:
        <input className={styles.sum} value={sum}></input>
      </p>
      <div className={styles.colors}>
        <p className={styles.category}>색상:</p>
        <div className={styles.color__box} value={color}>
          <SelectColors />
        </div>
      </div>
      <div className={styles.btn}>
        <button className={styles.cancel}>취소</button>
        <button className={styles.registration}>입력</button>
      </div>
    </div>
  );
};

export default BoxEditForm;
