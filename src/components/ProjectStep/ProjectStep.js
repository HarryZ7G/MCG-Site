import styles from './ProjectStep.module.css'

export default ({title, description}) => {
    return(
        <div className={styles.parent}>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}