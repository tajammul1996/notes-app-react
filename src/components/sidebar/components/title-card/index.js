import styles from "./titlecard.module.css"

const TitleCard  = ({note, setSelectedNote}) => {
    return (
        <div className={styles.titleWrapper} onClick={() => setSelectedNote(note)}>
            {note.title}
        </div>
    )
}

export default TitleCard;