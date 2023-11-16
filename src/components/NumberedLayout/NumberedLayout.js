import styles from './NumberedLayout.module.css'

/**
 * A higher-ordered component that allows for a vertical numbered list
 */
const NumberedLayout = ({ Component, props, gridKey, containerClass, parentClass }) => {
    return (
        <div className={`${styles.iconContainer} ${containerClass}`}>
            <div className={`${styles.iconParent} ${parentClass}`}>
                {props.map((prop, index) => {
                    return(
                        <div className={styles.element} key={`${gridKey}${index}`}>
                            <span className={styles.number}>{index+1}</span>
                            <Component {...prop}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

NumberedLayout.defaultProps = {
    containerClass: '',
    parentClass: ''
}

export default NumberedLayout;