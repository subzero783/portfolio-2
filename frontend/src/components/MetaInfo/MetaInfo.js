import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

function MetaInfo({ title, description, canonical }) {
  return (
    <HelmetProvider>
      <Helmet>
        {title ? <title>{title}</title> : null}
        {description ? <meta name="description" content={description} /> : null}
        {canonical ? <link rel="canonical" href={canonical} /> : null}
      </Helmet>
    </HelmetProvider>
  );
}

export default MetaInfo;
