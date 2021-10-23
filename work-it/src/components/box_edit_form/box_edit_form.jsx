import React, { useRef, useState } from "react";
import styles from "./box_edit_form.module.css";
import SelectColors from "components/colorBox/selectColors";

const BoxEditForm = ({ box }) => {
  const { id, title, date, worktime, sum, color } = box;

  const hours = [
    { label: "시작 시간", value: "시작 시간" },
    { label: "0", value: "0" },
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "4", value: "4" },
    { label: "5", value: "5" },
    { label: "5", value: "5" },
    { label: "6", value: "6" },
    { label: "7", value: "7" },
    { label: "8", value: "8" },
    { label: "9", value: "9" },
    { label: "10", value: "10" },
    { label: "11", value: "11" },
    { label: "12", value: "12" },
    { label: "13", value: "13" },
    { label: "14", value: "14" },
    { label: "15", value: "15" },
    { label: "16", value: "16" },
    { label: "17", value: "17" },
    { label: "18", value: "18" },
    { label: "19", value: "19" },
    { label: "20", value: "20" },
    { label: "21", value: "21" },
    { label: "22", value: "22" },
    { label: "23", value: "23" },
  ];

  const minutes = [
    { label: "시작 분", value: "시작 분" },
    { label: "00", value: "00" },
    { label: "01", value: "01" },
    { label: "02", value: "02" },
    { label: "03", value: "03" },
    { label: "04", value: "04" },
    { label: "05", value: "05" },
    { label: "06", value: "06" },
    { label: "07", value: "07" },
    { label: "08", value: "08" },
    { label: "09", value: "09" },
    { label: "10", value: "10" },
    { label: "11", value: "11" },
    { label: "12", value: "12" },
    { label: "13", value: "13" },
    { label: "14", value: "14" },
    { label: "15", value: "15" },
    { label: "16", value: "16" },
    { label: "17", value: "17" },
    { label: "18", value: "18" },
    { label: "19", value: "19" },
    { label: "20", value: "20" },
    { label: "21", value: "21" },
    { label: "22", value: "22" },
    { label: "23", value: "23" },
    { label: "24", value: "24" },
    { label: "25", value: "25" },
    { label: "26", value: "26" },
    { label: "27", value: "27" },
    { label: "28", value: "28" },
    { label: "29", value: "29" },
    { label: "30", value: "30" },
    { label: "31", value: "31" },
    { label: "32", value: "32" },
    { label: "33", value: "33" },
    { label: "34", value: "34" },
    { label: "35", value: "35" },
    { label: "36", value: "36" },
    { label: "37", value: "37" },
    { label: "38", value: "38" },
    { label: "39", value: "39" },
    { label: "40", value: "40" },
    { label: "41", value: "41" },
    { label: "42", value: "42" },
    { label: "43", value: "43" },
    { label: "44", value: "44" },
    { label: "45", value: "45" },
    { label: "46", value: "46" },
    { label: "47", value: "47" },
    { label: "48", value: "48" },
    { label: "49", value: "49" },
    { label: "50", value: "50" },
    { label: "51", value: "51" },
    { label: "52", value: "52" },
    { label: "53", value: "53" },
    { label: "54", value: "54" },
    { label: "55", value: "55" },
    { label: "56", value: "56" },
    { label: "57", value: "57" },
    { label: "58", value: "58" },
    { label: "59", value: "59" },
  ];

  const onClick = () => {
    const num1 = document.getElementById("number1").value;
    const num2 = document.getElementById("number2").value;
    document.getElementById("result").innerHTML = num1 * num2;
  };

  const [startHour, setStartHour] = useState("");
  const [startMin, setStartMin] = useState("");
  const [endHour, setEndHour] = useState("");
  const [endMin, setEndMin] = useState("");
  const [timeResult, setTimeResult] = useState("");

  const timeSpan = useRef();

  const handleStartHour = (event) => {
    setStartHour(event.target.value);
  };

  const handleStartMin = (event) => {
    setStartMin(event.target.value);
  };

  const handleEndHour = (event) => {
    setEndHour(event.target.value);
  };

  const handleEndMin = (event) => {
    setEndMin(event.target.value);
  };

  const handleTime = (e) => {
    const startTime = Number(startHour) + Number((startMin / 60).toFixed(2));
    const endTime = Number(endHour) + Number((endMin / 60).toFixed(2));
    setTimeResult(endTime - startTime);
    // timeSpan.innerHTML = endTime - startTime;
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
          <span className={styles.lump__sum} type="text" id="result">
            {}
          </span>
          <p>원</p>
        </div>
        <p className={styles.explanation}>
          * 2021년 기준 최저시급은 8720원입니다.
        </p>
        <div className={styles.work__time}>
          <select className={styles.hours} onChange={handleStartHour}>
            {hours.map((hour) => (
              <option value={hour.value}>{hour.label}</option>
            ))}
          </select>
          <select className={styles.minutes} onChange={handleStartMin}>
            {minutes.map((minute) => (
              <option value={minute.value}>{minute.label}</option>
            ))}
          </select>
          <p className={styles.period}>~</p>
          <select className={styles.hours} onChange={handleEndHour}>
            {hours.map((hour) => (
              <option value={hour.value}>{hour.label}</option>
            ))}
          </select>
          <select className={styles.minutes} onChange={handleEndMin}>
            {minutes.map((minute) => (
              <option value={minute.value}>{minute.label}</option>
            ))}
          </select>
          <button className={styles.equal} onClick={handleTime}>
            =
          </button>
          <span className={styles.lump__sum} type="text" ref={timeSpan}>
            {timeResult}
          </span>
          <p>시간</p>
        </div>
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
