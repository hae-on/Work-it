import React, { useRef, useState } from "react";
import styles from "./box_add_form.module.css";

const BoxAddForm = ({ onAdd }) => {
  const hours = [
    { label: "시간", value: "시간" },
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
    { label: "분", value: "분" },
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

  const [wages, setWages] = useState("");

  const onClick = (event) => {
    const num1 = document.getElementById("number1").value;
    const num2 = document.getElementById("number2").value;
    setWages(num1 * num2);
    event.preventDefault();
  };

  const [startHour, setStartHour] = useState("");
  const [startMin, setStartMin] = useState("");
  const [endHour, setEndHour] = useState("");
  const [endMin, setEndMin] = useState("");
  const [timeResult, setTimeResult] = useState("");

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

  const formRef = useRef("");
  const titleRef = useRef("");
  const startDateRef = useRef("");
  const endDateRef = useRef("");
  const worktimeRef = useRef("");
  const sumRef = useRef("");
  const colorRef = useRef("");

  const onSubmit = (event) => {
    event.preventDefault();
    const box = {
      id: Date.now(),
      title: titleRef.current.value || "",
      startDate: startDateRef.current.value || "",
      endDate: endDateRef.current.value || "",
      worktime: worktimeRef.current.value || "",
      sum: sumRef.current.value || "",
      color: colorRef.current.value || "",
    };
    formRef.current.reset();
    onAdd(box);
  };

  const handleTime = (event) => {
    const startTime = Number(startHour) + Number((startMin / 60).toFixed(2));
    const endTime = Number(endHour) + Number((endMin / 60).toFixed(2));
    setTimeResult((endTime - startTime).toFixed(3));
    event.preventDefault();
  };

  return (
    <form ref={formRef} className={styles.content}>
      <p className={styles.title}>
        <p className={styles.category}>
          제목:
          <input
            ref={titleRef}
            className={styles.title__input}
            placeholder="제목을 입력해주세요."
          ></input>
        </p>
      </p>
      <div className={styles.calendar}>
        <span className={styles.category}>
          날짜:
          <select
            className={styles.select__box}
            ref={startDateRef}
            name="startDate"
          >
            {months.map((month) => (
              <option value={month.value}>{month.label}</option>
            ))}
          </select>
          <span className={styles.period}> ~</span>
          <select
            className={styles.select__box}
            ref={endDateRef}
            name="endDate"
          >
            {months.map((month) => (
              <option value={month.value}>{month.label}</option>
            ))}
          </select>
        </span>
      </div>
      <div className={styles.calculation}>
        <p className={styles.category}>계산:</p>
        <div className={styles.calculation__box}>
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
              {wages}
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
            <p className={styles.time__period}>~</p>
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
            <span className={styles.lump__sum} type="text">
              {timeResult}
            </span>
            <p>시간</p>
          </div>
        </div>
      </div>
      <p className={styles.category}>
        총 시간:
        <input
          ref={worktimeRef}
          className={styles.worktime}
          placeholder="일한 시간을 입력해주세요."
        ></input>
      </p>
      <p className={styles.category}>
        총 금액:
        <input
          ref={sumRef}
          className={styles.sum}
          placeholder="총 금액을 입력해주세요."
        ></input>
      </p>
      <p className={styles.category}>
        색상:
        <select ref={colorRef} className={styles.select__box} name="color">
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
        <button className={styles.registration} onClick={onSubmit}>
          입력
        </button>
      </div>
    </form>
  );
};

export default BoxAddForm;
