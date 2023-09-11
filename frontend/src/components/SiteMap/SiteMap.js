import React from "react";
// The import below should be updated to match your Router component
import RouterComponent from "../RouterComponent/RouterComponent";
import DynamicSitemap from "react-dynamic-sitemap";

export default function SiteMap(props) {
  return <DynamicSitemap routes={RouterComponent} prettify={true} {...props} />;
}
