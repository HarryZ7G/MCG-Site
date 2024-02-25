import { articles } from '../../data/article';
import ResearchCard from '../ResearchPreview/ResearchCard/ResearchCard';
import styles from './ResearchArticlesPreview.module.css'

function ResearchArticlesPreview() {
    const visible = articles.slice(-2)
    return(
        <div className={styles.parent}>
            <h2 className={`${styles.text} purple-font`}>Read our research articles!</h2>
            <div className={styles.grid}>
                {
                    visible.map(data => <ResearchCard key={data.title} article={data}/>)
                }
            </div>
        </div>
    )
}

export default ResearchArticlesPreview;