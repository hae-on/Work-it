import React from "react";
import styles from "./editor.module.css";
import BoxEditForm from "components/box_edit_form/box_edit_form";
import BoxAddForm from "components/box_add_form/box_add_form";

const Editor = ({ boxes, addBox }) => {
  return (
    <section className={styles.editor}>
      <h2 className={styles.main__title}>🍇 일을 입력해보세요 🍇</h2>
      {boxes.map((box) => (
        <BoxEditForm key={box.id} box={box} />
      ))}
      <BoxAddForm onAdd={addBox} />
    </section>
  );
};

export default Editor;
