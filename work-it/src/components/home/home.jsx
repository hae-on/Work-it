import Nav from "components/nav/nav";
import React, { useState } from "react";
import styles from "./home.module.css";
import ColorBox from "../colorBox/colorBox";
import Editor from "components/editor/editor";

const Home = () => {
  const [boxes, setBoxes] = useState({
    1: {
      id: "1",
      title: "파리바게트",
      date: "2021-10-15",
      color: "red",
      worktime: "155시간",
      sum: "400,000원",
    },
    2: {
      id: "2",
      title: "한솥도시락",
      date: "2021-11-15",
      color: "blue",
      worktime: "130시간",
      sum: "200,000원",
    },
  });

  const createOrUpdateBox = (box) => {
    //  동기적인 업데이트를 위해 콜백 형식으로 작성
    setBoxes((boxes) => {
      const updated = { ...boxes };
      updated[box.id] = box;
      return updated;
    });
  };

  const deleteBox = (box) => {
    setBoxes((boxes) => {
      const updated = { ...boxes };
      delete updated[box.id];
      return updated;
    });
  };

  return (
    <section className={styles.home}>
      <Nav />
      <div className={styles.container}>
        <Editor
          boxes={boxes}
          addBox={createOrUpdateBox}
          updateBox={createOrUpdateBox}
          deleteBox={deleteBox}
        />
        <ColorBox boxes={boxes} />
      </div>
    </section>
  );
};

export default Home;
