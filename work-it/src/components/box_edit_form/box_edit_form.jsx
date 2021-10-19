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
          <span className={styles.lump__sum} type="text" id="result"></span>
          <p>원</p>
        </div>
        <p className={styles.explanation}>
          * 2021년 기준 최저시급은 8720원입니다.
        </p>
        <div className={styles.work__time}>
          <select className={styles.hours}>
            <option value="">시</option>
            <option value="12시">12</option>
            <option value="1시">1</option>
            <option value="2시">2</option>
            <option value="3시">3</option>
            <option value="4시">4</option>
            <option value="5시">5</option>
            <option value="6시">6</option>
            <option value="7시">7</option>
            <option value="8시">8</option>
            <option value="9시">9</option>
            <option value="10시">10</option>
            <option value="11시">11</option>
          </select>
          <select className={styles.minutes}>
            <option value="">분</option>
            <option value="1분">1</option>
            <option value="2분">2</option>
            <option value="3분">3</option>
            <option value="4분">4</option>
            <option value="5분">5</option>
            <option value="6분">6</option>
            <option value="7분">7</option>
            <option value="8분">8</option>
            <option value="9분">9</option>
            <option value="10분">10</option>
            <option value="11분">11</option>
            <option value="12분">2</option>
            <option value="13분">3</option>
            <option value="14분">4</option>
            <option value="15분">5</option>
            <option value="16분">6</option>
            <option value="17분">7</option>
            <option value="18분">8</option>
            <option value="19분">9</option>
            <option value="20분">10</option>
            <option value="21분">11</option>
            <option value="22분">2</option>
            <option value="23분">3</option>
            <option value="24분">4</option>
            <option value="25분">5</option>
            <option value="26분">6</option>
            <option value="27분">7</option>
            <option value="28분">8</option>
            <option value="29분">9</option>
            <option value="30분">10</option>
            <option value="31분">11</option>
            <option value="32분">2</option>
            <option value="33분">3</option>
            <option value="34분">4</option>
            <option value="35분">5</option>
            <option value="36분">6</option>
            <option value="37분">7</option>
            <option value="38분">8</option>
            <option value="39분">9</option>
            <option value="40분">10</option>
            <option value="41분">11</option>
            <option value="42분">2</option>
            <option value="43분">3</option>
            <option value="44분">4</option>
            <option value="45분">5</option>
            <option value="46분">6</option>
            <option value="47분">7</option>
            <option value="48분">8</option>
            <option value="49분">9</option>
            <option value="50분">10</option>
            <option value="51분">11</option>
            <option value="52분">2</option>
            <option value="53분">3</option>
            <option value="54분">4</option>
            <option value="55분">5</option>
            <option value="56분">6</option>
            <option value="57분">7</option>
            <option value="58분">8</option>
            <option value="59분">9</option>
          </select>
          <p className={styles.period}>~</p>
          <select className={styles.hours}>
            <option value="">시</option>
            <option value="12시">12</option>
            <option value="1시">1</option>
            <option value="2시">2</option>
            <option value="3시">3</option>
            <option value="4시">4</option>
            <option value="5시">5</option>
            <option value="6시">6</option>
            <option value="7시">7</option>
            <option value="8시">8</option>
            <option value="9시">9</option>
            <option value="10시">10</option>
            <option value="11시">11</option>
          </select>
          <select className={styles.minutes}>
            <option value="">분</option>
            <option value="1분">1</option>
            <option value="2분">2</option>
            <option value="3분">3</option>
            <option value="4분">4</option>
            <option value="5분">5</option>
            <option value="6분">6</option>
            <option value="7분">7</option>
            <option value="8분">8</option>
            <option value="9분">9</option>
            <option value="10분">10</option>
            <option value="11분">11</option>
            <option value="12분">2</option>
            <option value="13분">3</option>
            <option value="14분">4</option>
            <option value="15분">5</option>
            <option value="16분">6</option>
            <option value="17분">7</option>
            <option value="18분">8</option>
            <option value="19분">9</option>
            <option value="20분">10</option>
            <option value="21분">11</option>
            <option value="22분">2</option>
            <option value="23분">3</option>
            <option value="24분">4</option>
            <option value="25분">5</option>
            <option value="26분">6</option>
            <option value="27분">7</option>
            <option value="28분">8</option>
            <option value="29분">9</option>
            <option value="30분">10</option>
            <option value="31분">11</option>
            <option value="32분">2</option>
            <option value="33분">3</option>
            <option value="34분">4</option>
            <option value="35분">5</option>
            <option value="36분">6</option>
            <option value="37분">7</option>
            <option value="38분">8</option>
            <option value="39분">9</option>
            <option value="40분">10</option>
            <option value="41분">11</option>
            <option value="42분">2</option>
            <option value="43분">3</option>
            <option value="44분">4</option>
            <option value="45분">5</option>
            <option value="46분">6</option>
            <option value="47분">7</option>
            <option value="48분">8</option>
            <option value="49분">9</option>
            <option value="50분">10</option>
            <option value="51분">11</option>
            <option value="52분">2</option>
            <option value="53분">3</option>
            <option value="54분">4</option>
            <option value="55분">5</option>
            <option value="56분">6</option>
            <option value="57분">7</option>
            <option value="58분">8</option>
            <option value="59분">9</option>
          </select>
          <button className={styles.equal}>=</button>
          <span className={styles.lump__sum} type="text"></span>
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
