import React from "react";
import "./Freebie.scss";

const get_freebie_content = (path) => {
  switch (path) {
    case "hubspot-form":
      return (
        <>
          <h2>
            <a href="https://gist.github.com/subzero783/275d3a627eeb6d43aa9be825045758df" rel="noreferrer" aria-label="gist link to hubspot form css code" target="_blank">
              HubSpot Form CSS Code
            </a>
          </h2>
          <h2>
            <a href="https://gist.github.com/subzero783/05334473a4d903e83a48b03699a2bbe6" rel="noreferrer" aria-label="gist link to hubspot form javascript code" target="_blank">
              HubSpot Form JavaScript Code
            </a>
          </h2>
        </>
      );
    default:
      return <></>;
  }
};

export default function Freebie({ path }) {
  console.log(path);
  return <div id="freebie">{get_freebie_content(path)}</div>;
}
