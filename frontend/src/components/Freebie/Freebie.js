import React from "react";
import "./Freebie.scss";

const get_freebie_content = (path) => {
  switch (path) {
    case "hubspot-form":
      return (
        <div className="hubspot-form">
          <a className="title-link button_1" href="https://gist.github.com/subzero783/275d3a627eeb6d43aa9be825045758df" rel="noreferrer" aria-label="gist link to hubspot form css code" target="_blank">
            <h2>HubSpot Form CSS Code</h2>
          </a>
          <a className="title-link button_1" href="https://gist.github.com/subzero783/05334473a4d903e83a48b03699a2bbe6" rel="noreferrer" aria-label="gist link to hubspot form javascript code" target="_blank">
            <h2>HubSpot Form JavaScript Code</h2>
          </a>
        </div>
      );
    default:
      return <></>;
  }
};

export default function Freebie({ path }) {
  return <div id="freebie">{get_freebie_content(path)}</div>;
}
