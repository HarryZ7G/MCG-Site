import React from "react";
import { Helmet } from "react-helmet";

function PageHelmet({title, description, disableIndexing, canonical}) {

    const pageDescription = description ?? '';
    const pageTitle = (title ?? 'MCG UTSC') + ' | Management Consulting Group'

    return (
        <Helmet>
            <meta charSet="utf-8"/>
            <title>{pageTitle}</title>
            {canonical && <link rel="canonical" href={canonical}/>}
            <meta name="description" content={pageDescription}/>
            {disableIndexing && <meta name="robots" content="noindex, nofollow"/>}
        </Helmet>
    );
}

export default React.memo(PageHelmet);
