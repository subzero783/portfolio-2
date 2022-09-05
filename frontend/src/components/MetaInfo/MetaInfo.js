
import React from "react";
import { Helmet } from 'react-helmet'

function MetaInfo({title, description}){ 

    return(
        <Helmet>
            <title>{title}</title>
            {description ? <meta name="description" content={description} /> : null }
        </Helmet>
    )
}

export default MetaInfo