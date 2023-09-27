import React, { useEffect } from "react";

import "./NotFoundPage.scss";

import bg2 from "../../images/bg2.jpg";

const NotFoundPage = () => {
  useEffect(() => {
    document.getElementById("navbar").classList.add("not-found-page");
  }, []);
  return (
    <div>
      <div className="not-found-bg-image-container">
        <img className="not-found-bg-image" src={bg2} alt="not found URL background image" />
      </div>
      <div id="not-found">
        <h1>404: Page Not Found</h1>
        <a href="/" aria-label="Go back to home page" className="button_1">
          Home
        </a>
      </div>
    </div>
  );
};

export default NotFoundPage;
