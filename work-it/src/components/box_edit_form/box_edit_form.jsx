import React from "react";
import styles from "./box_edit_form.module.css";
import Calendar from "design/datePicker";
import SelectColors from "components/colorBox/selectColors";

const BoxEditForm = ({ box }) => {
  const { id, title, date, worktime, sum, color } = box;
  return (
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
