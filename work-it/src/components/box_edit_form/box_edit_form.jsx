import React from "react";
import styles from "./box_edit_form.module.css";
import SelectColors from "components/colorBox/selectColors";

const BoxEditForm = ({ box }) => {
  const { id, title, date, worktime, sum, color } = box;

  const onWage = (e) => {
    e.preventDefault();
    console.log(e.currentTarget.value);
  };

  const onTime = (e) => {
    e.preventDefault();
    console.log(e.currentTarget.value);
  };

  const onSum = (e) => {
    e.preventDefault();
    console.log(e.currentTarget.value);
  };

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
        계산:
        <div className={styles.calculation}>
          <div className={styles.calculation__input}>
            <input
              className={styles.hourly__wage}
              placeholder="시급"
              size="6"
              maxlength="5"
              onChange={onWage}
            ></input>
            <p>*</p>
            <input
              className={styles.working__hours}
              placeholder="일한 시간"
              size="8"
              maxlength="5"
              onChange={onTime}
            ></input>
            <p>=</p>
            <input
              className={styles.lump__sum}
              placeholder="총 금액"
              size="6"
              maxlength="10"
              onChange={onSum}
            ></input>
          </div>
        </div>
      </p>
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
