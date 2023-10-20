import React from 'react';
import styles from "./ResearchArticle.css";
import { marked } from 'marked';
import { BrowserRouter as Router, Switch, Route, useParams } from 'react-router-dom';


//media
import insurance_industry from "../../media/Research Articles/insurance-industry.md";
import metaverse from "../../media/Research Articles/metaverse.md";

const ResearchArticle = () => {
    const {page}=useParams();
    let file;

    if (page==='insurance-industry'){
        file = fetch(insurance_industry);
    }
    else if (page==='metaverse') {
        file = fetch(metaverse);
    }

    return (
        <div className={styles.body}>
            {document.getElementById('content').innerHTML =
            marked.parse('# Marked in the browser\n\nRendered by **marked**.')}
        </div>
    )
}

export default ResearchArticle;
