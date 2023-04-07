// import React, { useEffect, useCallback } from "react";
import React, { useEffect, useState } from "react";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";
import "./ThankYouPage.scss";
import ContactInfo from "../../components/ContactInfo/ContactInfo";
import HeroVideo from "../../components/HeroVideo/HeroVideo";
import Freebie from "../../components/Freebie/Freebie";
import { get_current_path } from "../../functions";

export default function ThankYouPage() {
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(get_current_path(window.location.pathname, 2));
  }, []);

  return (
    <div id="thank-you-page">
      {/* <img className="wallpaper" src={email2} alt="Email icon" /> */}
      <HeroVideo />
      <div className="container">
        <div className="row">
          <div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <h1>We’re excited to share updates we think you’ll find valuable. Below is your freebie!</h1>
            <Freebie path={currentPath} />
          </div>
        </div>
      </div>
      <div className="contact-info-container">
        <div className="container">
          <ContactInfo />
        </div>
      </div>
    </div>
  );
}
