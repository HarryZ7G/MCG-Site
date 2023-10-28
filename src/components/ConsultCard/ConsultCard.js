import styles from './ConsultCard.module.css'
import quoteLeft from './quote-left.svg'
import quoteRight from './quote-right.svg'

export default ({ company, testimonial, description }) => {
    const { image: companyImage, name: companyName } = company;
    const { image: personImage, name: personName, role, quote } = testimonial;

    return (
        <div className={styles.layout}>
            <div className={styles.left}>
                <h2 className={styles.companyName}>{companyName}</h2>
                <div className={styles.companyImage}>
                    <img alt={`${companyName} logo`} src={companyImage} />
                </div>
                <p className={styles.description}>{description}</p>
            </div>
            <div className={styles.right}>

                <div className={styles.testimonial}>
                    <div className={styles.leftQuote}>
                        <img alt='Quote icon left' src={quoteLeft}/>
                    </div>
                    <span className={styles.quote}>{quote}</span>
                    <div className={styles.rightQuote}>
                        <img alt='Quote icon right' src={quoteRight}/>
                    </div>
                    <div className={styles.source}>
                        <div className={styles.personImage}>
                            <img alt={`${personName} image`} src={personImage} />
                        </div>
                        <div className={styles.personInfo}>
                            <span className={styles.personName}>{personName}</span>
                            <br />
                            <span className={styles.personRole}>{role}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}