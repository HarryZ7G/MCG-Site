import { articles } from '../../data/article';
import ResearchCard from './ResearchCard/ResearchCard';
import styles from './ResearchPreview.module.css'

export default () => {

    return(
        <div className={styles.parent}>
            <div className={styles.grid}>
                {
                    articles.map(data => <ResearchCard key={data.title} article={data}/>)
                }
            </div>
        </div>
    )
}