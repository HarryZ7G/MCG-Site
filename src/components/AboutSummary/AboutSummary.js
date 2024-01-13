import styles from './AboutSummary.module.css'

// Media
import Simon_Kucher from '../../media/Alumni Logos/Simon_Kucher.jpg'
import UofT from '../../media/Alumni Logos/UofT.png'
import Deloitte from '../../media/Alumni Logos/Deloitte.png'
import McKinsey from '../../media/Alumni Logos/McKinsey.png'

const AboutSummary = () => {
    const logos = [Simon_Kucher, UofT, Deloitte, McKinsey];

    return (
        <div className={styles.aboutUsWidget}>
            <div className={styles.leftColumn}>
                <p>Established in 2015, Management Consulting Group (MCG) has been at the forefront of empowering</p>
                <span className={styles.bigNumber}>30+</span>
                <p className={styles.bigNumberSubtext}>start-ups and SMEs</p>
            </div>
            <div className={styles.rightColumn}>
                <p>We have engaged seasoned consulting advisors from</p>
                <div className={styles.logoGrid}>
                    {
                        logos.map(s => {
                            return (
                                <span>
                                    <img src={s} />
                                </span>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default AboutSummary;