import React from 'react';
import "./ResearchArticle.css";
import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router-dom';

import TopBar from '../../components/TopBar/TopBar';
import Footer from '../../components/Footer/Footer';
import PagePadding from '../../components/PagePadding/PagePadding';
import rehypeRaw from 'rehype-raw'
import PageHelmet from '../../components/PageHelmet/PageHelmet';

function ResearchArticle() {
    const { page } = useParams();
    return <Content page={page} />
}

const publicArticles = {
    "data-automation":
    {
        title: "What are the basics to automating and visualizing your company's data with Python?",
        description: 'Learn about the basics of fully automating stock chart visualization in Python.'
    },
    "insurance-industry":
    {
        title: 'How Technological Trends Transform the Insurance Industry',
        description: 'Learn about five trends shaping the insurance industry as it undergoes a digitalization process providing their users.'
    },
    "generation-z-awareness": {
        title: "MCG Gen Z Awareness Matrix - How to successfully gain Gen Z's awareness?",
        description: 'Learn how companies appeal to Gen Z, who are consumers interested in online-driven approaches, social causes and personalization.'
    },
    "metaverse":
    {
        title: 'Is the Metaverse good for marketers?',
        description: 'Metaverse is not only the newest digital transformation, but it also offers tremendous value and opportunity for all businesses who intend to expand into the virtual world.'
    },
}

class Content extends React.Component {
    constructor(props) {
        super(props)
        this.page = props.page;
        this.state = { markdown: null, data: {} }
    }

    componentWillMount() {
        // check path against whitelist before fetching it
        if (!publicArticles[this.page]) {
            this.setState({ markdown: undefined })
        } else {
            const pagePath = `/Research Articles/${this.page}.md`
            fetch(pagePath).then((response) => response.text()).then((text) => {
                this.setState({ markdown: text, data: publicArticles[this.page] })
            })
        }
    }

    render() {
        let article = undefined
        if (typeof this.state.markdown === 'undefined') {
            article = '## Oops! This page does not exist. \n [Head back to the main research page to find other articles](/research).'
        } else if (this.state.markdown === null) {
            article = 'Loading your page ...'
        } else {
            article = this.state.markdown
        }
        article = <ReactMarkdown rehypePlugins={[rehypeRaw]} children={article} />
        return (
            <div className="research-article-page">
                <PageHelmet
                    title={this.state.data.title}
                    description={this.state.data.description} />
                < TopBar />
                <PagePadding />
                <div className='research-article-body'>
                    {article}
                </div>
                <Footer />
            </div>
        )
    }
}

export default ResearchArticle;
