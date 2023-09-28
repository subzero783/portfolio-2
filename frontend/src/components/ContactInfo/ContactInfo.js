import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import email2 from "../../images/contact-icons/email2.png";
import phone from "../../images/contact-icons/phone.png";
import thumbsUp from "../../images/contact-icons/thumbs-up.png";
import SocialMedia from "../SocialMedia/SocialMedia";
import "./ContactInfo.scss";

export default function ContactInfo() {
  useEffect(() => {
    AOS.init({
      offset: 400,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="row contact-info-row">
      <div className="col col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
        <div className="info-part">
          <div className="icon-container">
            <img className="icon" src={email2} alt="Email icon" />
          </div>
          <div className="info">
            <h4 className="info-title">Email</h4>
            <div className="info-link-container">
              <a href="mailto:contact@developergus.com">contact@developergus.com</a>
            </div>
          </div>
        </div>
      </div>
      <div className="col col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
        <div className="info-part">
          <div className="icon-container">
            <img className="icon" src={phone} alt="Phone icon" />
          </div>
          <div className="info">
            <h4 className="info-title">Phone</h4>
            <div className="info-link-container">
              <a href="tel:+1-619-432-2871">+1-619-432-2871</a>
            </div>
          </div>
        </div>
      </div>
      <div className="col col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
        <div className="info-part">
          <div className="icon-container">
            <img className="icon" src={thumbsUp} alt="Thumbs up icon" />
          </div>
          <div className="info">
            <h4 className="info-title">Social Media</h4>
            <div className="info-link-container">
              <SocialMedia />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
