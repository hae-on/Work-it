import React, { useRef } from "react";
import styles from "./box_edit_form.module.css";
import DatePicker from "react-datepicker";

const BoxEditForm = ({ box, updateBox, deleteBox }) => {
  const { title, startDate, endDate, worktime, sum, color } = box;

  const months = [
    { label: "1월", value: "1월" },
    { label: "2월", value: "2월" },
    { label: "3월", value: "3월" },
    { label: "4월", value: "4월" },
    { label: "5월", value: "5월" },
    { label: "6월", value: "6월" },
    { label: "7월", value: "7월" },
    { label: "8월", value: "8월" },
    { label: "9월", value: "9월" },
    { label: "10월", value: "10월" },
    { label: "11월", value: "11월" },
    { label: "12월", value: "12월" },
  ];

  const titleRef = useRef("");
  const startDateRef = useRef("");
  const endDateRef = useRef("");
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
        <p className={styles.category}>
          제목:
          <input
            ref={titleRef}
            name="title"
            className={styles.title__input}
            placeholder="제목을 입력해주세요."
            value={title}
            onChange={onChange}
          ></input>
        </p>
      </p>
      <div className={styles.calendar}>
        <span className={styles.category}>
          날짜:
          <select
            ref={startDateRef}
            name="startDate"
            value={startDate}
            onChange={onChange}
          >
            {months.map((month) => (
              <option value={month.value}>{month.label}</option>
            ))}
          </select>
          <span>~</span>
          <select
            ref={endDateRef}
            name="endDate"
            value={endDate}
            onChange={onChange}
          >
            {months.map((month) => (
              <option value={month.value}>{month.label}</option>
            ))}
          </select>
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
      <p className={styles.category}>
        색상:
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
      </p>

      <div className={styles.btn}>
        <button className={styles.registration} onClick={onsubmit}>
          삭제
        </button>
      </div>
    </form>
  );
};

export default BoxEditForm;
