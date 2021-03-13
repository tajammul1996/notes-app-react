import { Button } from "antd"

import styles from  "./sidebar.module.css";

const SideBar = () => {
    return (
        <aside>
            <Button className={styles.btn} type="primary">Add notes</Button>
        </aside>
    )
}

export default SideBar;