import { useContext } from "react";
import { Button } from "antd";
import { TitleCard } from "./components";

import styles from "./sidebar.module.css";
import { NotesContext } from "../../contexts/NotesContext";

const SideBar = ({ isModalVisible, setModalVisibility }) => {
  const { notes, setSelectedNote } = useContext(NotesContext);
  return (
    <aside>
      {notes.map((note, id) => (
        <TitleCard note={note} key={id} setSelectedNote={setSelectedNote}/>
      ))}

      <Button
        className={styles.btn}
        type="primary"
        onClick={() => setModalVisibility(!isModalVisible)}
      >
        Add notes
      </Button>
    </aside>
  );
};

export default SideBar;
