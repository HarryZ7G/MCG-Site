import React, { useLayoutEffect } from 'react';
import styles from "./ResearchArticle.css";
import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router-dom';

import Background from '../../components/Background/Background';
import TopBar from '../../components/TopBar/TopBar';
import Footer from '../../components/Footer/Footer';
import PageTitle from '../../components/PageTitle/PageTitle';

function ResearchArticle() {
    const { page } = useParams();
    return <Content page={page} />
}

class Content extends React.Component {
    constructor(props) {
        super(props)
        this.page = props.page;
        this.state = { markdown: 'Loading page data ... ' }
    }

    componentWillMount() {
        const pagePath = `/Research Articles/${this.page}.md`
        console.log(this.page)
        fetch(pagePath).then((response) => response.text()).then((text) => {
            this.setState({ markdown: text })
        })
    }


    render() {
        return(
        <div className="root">
            <Background />
            <TopBar />
            <PageTitle title="" />
            <div className={styles.body}>
                <ReactMarkdown children={this.state.markdown} />
            </div>
            <Footer />
        </div>
        )
    }
}

export default ResearchArticle;
