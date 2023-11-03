import React, { useLayoutEffect } from 'react';
import "./ResearchArticle.css";
import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router-dom';

import TopBar from '../../components/TopBar/TopBar';
import Footer from '../../components/Footer/Footer';
import PageTitle from '../../components/PageTitle/PageTitle';
import PagePadding from '../../components/PagePadding/PagePadding';

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
        this.state = { markdown: 'Loading page data ... ' }
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
        return(
        <div className="root">
            <TopBar />
            <PagePadding/>
            <div className='research-article-body'>
                <ReactMarkdown children={this.state.markdown} />
            </div>
            <Footer />
        </div>
        )
    }
}

export default ResearchArticle;
