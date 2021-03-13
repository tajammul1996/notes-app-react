import { Header, SideBar, Notes } from "../../components";
import styles from "./dashboard.module.css";

const Dasboard = () => {
  return (
    <>
      <Header />
      <div className={styles.sidebarNotesWrapper}>
        <SideBar />
        <Notes />
      </div>
    </>
  );
};

export default Dasboard;
