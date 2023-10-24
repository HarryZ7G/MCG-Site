import React from 'react';
import styles from "./ResearchArticle.css";
import marked from 'marked';
import { BrowserRouter as Router, Switch, Route, useParams } from 'react-router-dom';

//media
import insurance_industry from "../../media/Research Articles/insurance-industry.md";
import metaverse from "../../media/Research Articles/metaverse.md";
import data_automization from "../../media/Research Articles/data-automization.md";
import gen_z_awareness from "../../media/Research Articles/generation-z-generation-z-awareness.md"

const ResearchArticle = () => {
    const {page}=useParams();
    let file;

    if (page==='insurance-industry'){
        file = fetch(insurance_industry);
    }
    else if (page==='metaverse') {
        file = fetch(metaverse);
    }
    else if(page==='data-automization') {
        file = fetch(data_automization);
    }
    else if(page==='generation-z-awareness') {
        file=fetch(gen_z_awareness);
    }

    return (
        <div className={styles.body}>
            {document.getElementById('content').innerHTML =
            marked.parse('# Marked in the browser\n\nRendered by **marked**.')}
        </div>
    )
}

export default ResearchArticle;
