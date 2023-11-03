import React, { useLayoutEffect } from 'react';
import "./ResearchArticle.css";
import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router-dom';

import TopBar from '../../components/TopBar/TopBar';
import Footer from '../../components/Footer/Footer';
import PagePadding from '../../components/PagePadding/PagePadding';
import rehypeRaw from 'rehype-raw'

function ResearchArticle() {
    const { page } = useParams();
    return <Content page={page} />
}

const publicArticles = [
    'data-automation',
    'insurance-industry',
    'generation-z-awareness',
    'metaverse'
]

class Content extends React.Component {
    constructor(props) {
        super(props)
        this.page = props.page;
        this.state = { markdown: null }
    }

    componentWillMount() {
        // check path against whitelist before fetching it
        if (!publicArticles.includes(this.page)) {
            this.setState({markdown: undefined})
        } else {
            const pagePath = `/Research Articles/${this.page}.md`
            fetch(pagePath).then((response) => response.text()).then((text) => {
                this.setState({ markdown: text })
            })
        }
    }

    render() {
        let article = undefined
        if (typeof this.state.markdown === 'undefined') {
            article = '## This page does not exist.'
        } else if (this.state.markdown === null) {
            article = 'Loading your page ...'
        } else {
            article = this.state.markdown
        }
        article = <ReactMarkdown rehypePlugins={[rehypeRaw]} children={this.state.markdown} />
        return(
        <div className="research-article-page">
            <TopBar />
            <PagePadding/>
            <div className='research-article-body'>
            {article}
            </div>
            <Footer />
        </div>
        )
    }
}

export default ResearchArticle;
