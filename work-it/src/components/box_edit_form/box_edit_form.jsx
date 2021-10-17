import React from "react";
import styles from "./box_edit_form.module.css";
import SelectColors from "components/colorBox/selectColors";

const BoxEditForm = ({ box }) => {
  const { id, title, date, worktime, sum, color } = box;

  const onClick = () => {
    const num1 = document.getElementById("number1").value;
    const num2 = document.getElementById("number2").value;
    document.getElementById("result").innerHTML = num1 * num2;
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
      <p className={styles.category}>계산:</p>
      <div className={styles.calculation}>
        <div className={styles.calculation__input}>
          <input
            className={styles.hourly__wage}
            placeholder="시급"
            size="6"
            maxlength="5"
            id="number1"
          ></input>
          <p>원</p>
          <p className={styles.multiplication}>*</p>
          <input
            className={styles.working__hours}
            placeholder="일한 시간"
            size="8"
            maxlength="5"
            id="number2"
          ></input>
          <p>시간</p>
          <button className={styles.equal} onClick={onClick}>
            =
          </button>
          <span
            className={styles.lump__sum}
            type="text"
            // placeholder="총 금액"
            // size="6"
            // maxlength="10"
            // onChange={onSum}
            id="result"
          ></span>
          <p>원</p>
        </div>
        <p className={styles.explanation}>
          * 2021년 기준 최저시급은 8720원입니다.
        </p>
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
