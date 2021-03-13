import styles from "./titlecard.module.css"

const TitleCard  = ({title = "no title"}) => {
    return (
        <div className={styles.titleWrapper}>
            {title}
        </div>
    )
}

export default TitleCard;