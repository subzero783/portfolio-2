
import React from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';

function MetaInfo({title, description}){ 

    return(
        <HelmetProvider>
            <Helmet>
                {title ? <title>{title}</title> : null } 
                {description ? <meta name="description" content={description} /> : null }
            </Helmet>
        </HelmetProvider>
    )
}

export default MetaInfo