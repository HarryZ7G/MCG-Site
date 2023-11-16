import React from 'react';
import styles from './ResearchCard.module.css'

const ResearchCard = ({ article }) => {

    const { title, credits, date, slug, picture } = article;
    const renderedCredits = credits.replace(/\n/g, "<br />");

    return (
        <div className={styles.card}>
            <a className={styles.link} href={`/research/${slug}`} />
            <div className={styles.container} >
                <img src={picture} alt={`Preview image for ${title}`}/>
            </div>
            <p className={styles.date}>{date}</p>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.credits} dangerouslySetInnerHTML={{__html: renderedCredits}}></p>
        </div>
    );
}

export default ResearchCard;