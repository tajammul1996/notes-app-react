import { useState, useEffect } from 'react';
import { useContext } from "react";
import { Button } from "antd";
import { TitleCard, Search } from "./components";

import styles from "./sidebar.module.css";
import { NotesContext } from "../../contexts/NotesContext";

const SideBar = ({ isModalVisible, setModalVisibility }) => {
  const { notes, setSelectedNote } = useContext(NotesContext);
  const [localNotes, setLocalNotes] = useState(notes)

  useEffect(() => {
    setLocalNotes(notes);
  }, [notes])


  const search = e => {
    let filteredNotes = notes.filter(note => note.title.includes(e.target.value))
    setLocalNotes(filteredNotes);
  }

  return (
    <aside>
      <Search onChange={search}/>
      {localNotes.map((note, id) => (
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
