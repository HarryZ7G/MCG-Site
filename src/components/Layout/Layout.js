import styles from './Layout.module.css'
import TopBar from "../../components/TopBar/TopBar.js";
import PageTitle from "../../components/PageTitle/PageTitle.js";
import Footer from "../../components/Footer/Footer.js";

export default ({children, title, intro}) => {
    
    const displayIntro = intro ?? '';

    return (
        <div className="root">
            <TopBar />
            {title && <PageTitle title={title} intro={displayIntro} />}
            <div className={`${styles.body} animate__animated animate__fadeIn animate__delay-1s`}>
                {children}
            </div>
            <Footer />
        </div>
    )
}