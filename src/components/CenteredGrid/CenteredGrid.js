import styles from './CenteredGrid.module.css'

/**
 * A higher-ordered component that allows for a big grid
 */
const CenteredGrid = ({ Component, props, gridKey, containerClass, parentClass }) => {
    return (
        <div className={`${styles.iconContainer} ${containerClass}`}>
            <div className={`${styles.iconParent} ${parentClass}`}>
                {props.map((prop, index) => <div style={{margin: 'auto'}}>
                    <Component key={`${gridKey}${index}`} {...prop} />
                </div>)}
            </div>
        </div>
    )
}

CenteredGrid.defaultProps = {
    containerClass: '',
    parentClass: ''
}

export default CenteredGrid;