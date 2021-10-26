import React, { useRef } from "react";
import styles from "./box_edit_form.module.css";
import SelectColors from "components/colorBox/selectColors";

const BoxEditForm = ({ box, updateBox, deleteBox }) => {
  const { id, title, date, worktime, sum, color } = box;

  const titleRef = useRef("");
  const dateRef = useRef("");
  const worktimeRef = useRef("");
  const sumRef = useRef("");
  const colorRef = useRef("");

  const onChange = (event) => {
    if (event.currentTarget == null) {
      return;
    }
    event.preventDefault();
    updateBox({
      ...box,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const onsubmit = () => {
    deleteBox(box);
  };

  return (
    <form className={styles.content}>
      <p className={styles.title}>
        <span className={styles.category}>제목: </span>
        <input
          ref={titleRef}
          name="title"
          className={styles.title__input}
          placeholder="제목을 입력해주세요."
          value={title}
          onChange={onChange}
        ></input>
      </p>
      <div className={styles.calendar}>
        <span className={styles.category}>
          날짜:
          <input
            ref={dateRef}
            name="date"
            className={styles.date}
            value={date}
            onChange={onChange}
          ></input>
        </span>
      </div>
      <p className={styles.category}>
        총 시간:
        <input
          ref={worktimeRef}
          name="worktime"
          className={styles.worktime}
          value={worktime}
          onChange={onChange}
        ></input>
      </p>
      <p className={styles.category}>
        총 금액:
        <input
          ref={sumRef}
          name="sum"
          className={styles.sum}
          value={sum}
          onChange={onChange}
        ></input>
      </p>
      <div className={styles.colors}>
        <p className={styles.category}>색상:</p>
        <select
          ref={colorRef}
          className={styles.color__box}
          name="color"
          value={color}
          onChange={onChange}
        >
          <option value="red">red</option>
          <option value="orange">orange</option>
          <option value="yellow">yellow</option>
          <option value="green">green</option>
          <option value="blue">blue</option>
          <option value="purple">purple</option>
          <option value="pink">pink</option>
        </select>
      </div>
      <div className={styles.btn}>
        <button className={styles.registration} onClick={onsubmit}>
          삭제
        </button>
      </div>
    </form>
  );
};

export default BoxEditForm;
