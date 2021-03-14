import { useState, useContext } from "react";
import { Form, Input, Button } from "antd";
import Modal from "react-modal";
import { v4 as uuid4 } from "uuid";

import { Header, SideBar, Notes } from "../../components";
import styles from "./dashboard.module.css";
import { NotesContext } from "../../contexts/NotesContext";

const customStyles = {
  display: "flex",
  flexdirection: "column",
  border: "1px solid black",
};

const Dasboard = () => {
  const [isModalVisible, setModalVisibility] = useState(false);
  const [newNote, setNewNote] = useState({ title: "", description: "" });
  const { notes, setNotes } = useContext(NotesContext);

  console.log("context data", notes);
  return (
    <>
      <Header />
      <div className={styles.sidebarNotesWrapper}>
        <SideBar
          isModalVisible={isModalVisible}
          setModalVisibility={setModalVisibility}
        />
        <Notes />
      </div>
      <Modal
        isOpen={isModalVisible}
        style={customStyles}
        className={styles.modal}
      >
        <Form className={styles.form}>
          <Form.Item className={styles.label}>
            <Input
              placeholder="Title"
              onChange={(e) =>
                setNewNote({ ...newNote, title: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item className={styles.label}>
            <Input
              placeholder="Take a note..."
              onChange={(e) =>
                setNewNote({ ...newNote, description: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item className={styles.btn__container}>
            <Button
              type="link"
              onClick={() => setModalVisibility(!isModalVisible)}
            >
              Cancel
            </Button>
            <Button
              type="primary"
              onClick={() => {
                setNotes([...notes, {...newNote, id: uuid4()}]);
                setModalVisibility(!isModalVisible);
              }}
            >
              Add note
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Dasboard;
