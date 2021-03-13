import { Button } from "antd"
import { TitleCard } from "./components"

import styles from  "./sidebar.module.css";

const SideBar = ({ isModalVisible, setModalVisibility }) => {
    return (
        <aside>
            <TitleCard title="Title 1"/>
            <TitleCard title="Title 2"/>
            <TitleCard  title="Title 3"/>
            <TitleCard  />
            <TitleCard  title="Title 4"/>
            
            <Button className={styles.btn} type="primary" onClick={() => setModalVisibility(!isModalVisible)}>Add notes</Button>
        </aside>
    )
}

export default SideBar;