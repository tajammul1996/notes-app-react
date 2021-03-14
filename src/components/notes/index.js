import { useContext } from "react";
import { NotesContext } from "../../contexts/NotesContext";
import styles from "./notes.module.css";

const Notes = () => {
  const { selectedNote } = useContext(NotesContext);
  console.log("-----", selectedNote);

  if (!selectedNote) {
    return (
      <div className={styles.sidebar}>
        <p>no note selected</p>
      </div>
    );
  }

  return (
    <div className={styles.sidebar}>
      <p>{selectedNote.title}</p>
      <p>{selectedNote.description}</p>
    </div>
  );
};

export default Notes;
