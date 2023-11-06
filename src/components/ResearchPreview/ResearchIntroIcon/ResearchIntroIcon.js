import styles from './ResearchIntroIcon.module.css'

const ResearchIntroIcon = ({title, description}) => {
    return(
        <div className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
        </div>
    )
}

export default ResearchIntroIcon;