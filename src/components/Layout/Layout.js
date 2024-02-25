import styles from './Layout.module.css'
import TopBar from "../../components/TopBar/TopBar.js";
import PageTitle from "../../components/PageTitle/PageTitle.js";
import Footer from "../../components/Footer/Footer.js";
import Background from '../Background/Background';
import PageHelmet from '../PageHelmet/PageHelmet';

export default function Layout ({ children, headerTitle, headerIntro, title, description, disableIndexing, canonical, useBackground = false }) {

    const displayIntro = headerIntro ?? '';
    if (!title) {
        throw Error("Expected a page meta title in Layout.js.")
    }

    return (
        <div className="home-container">
            <TopBar />
            {headerTitle && <PageTitle title={headerTitle} intro={displayIntro} />}
            <PageHelmet {...{ title, description, disableIndexing, canonical }} />
            <div className={`${styles.body} animate__animated animate__fadeIn animate__delay-1s`}>
                {children}
            </div>
            {useBackground && <Background />}
            <Footer />
        </div>
    )
}