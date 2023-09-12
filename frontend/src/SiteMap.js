import React from "react";
import RouterComponent from "./components/RouterComponent/RouterComponent";
import DynamicSitemap from "react-dynamic-sitemap";

export default function Sitemap(props) {
  return <DynamicSitemap routes={RouterComponent} prettify={true} {...props} />;
}
