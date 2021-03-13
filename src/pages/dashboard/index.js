import { useState } from "react"
import Modal from "react-modal";

import { Header, SideBar, Notes } from "../../components";
import styles from "./dashboard.module.css";

const Dasboard = () => {
  const [isModalVisible, setModalVisibility] = useState(false);
  return (
    <>
      <Header />
      <div className={styles.sidebarNotesWrapper}>
        <SideBar isModalVisible={isModalVisible} setModalVisibility={setModalVisibility}/>
        <Notes />
      </div>
      <Modal
          isOpen={isModalVisible}
          contentLabel="Example Modal"
        >
          <h1>
            Hello world!!!
          </h1>
          <button onClick={() => setModalVisibility(!isModalVisible)}>close modal</button>
        </Modal>
    
    </>
  );
};

export default Dasboard;
