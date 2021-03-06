import React from "react";
import styles from "./editor.module.css";
import BoxEditForm from "components/box_edit_form/box_edit_form";
import BoxAddForm from "components/box_add_form/box_add_form";

const Editor = ({ boxes, addBox, updateBox, deleteBox }) => {
  return (
    <section className={styles.editor}>
      <h2 className={styles.main__title}>π μΌμ μλ ₯ν΄λ³΄μΈμ π</h2>
      {Object.keys(boxes).map((key) => (
        <BoxEditForm
          key={key}
          box={boxes[key]}
          updateBox={updateBox}
          deleteBox={deleteBox}
        />
      ))}
      <BoxAddForm onAdd={addBox} />
    </section>
  );
};

export default Editor;
