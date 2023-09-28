import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import email2 from "../../images/contact-icons/email2.png";
import phone from "../../images/contact-icons/phone.png";
import thumbsUp from "../../images/contact-icons/thumbs-up.png";
import instagramIcon from "../../images/png/instagram.png";
import youtubeIcon from "../../images/png/youtube.png";
import linkedinIcon from "../../images/png/linkedin.png";
import githubIcon from "../../images/png/github-sign.png";
import facebookIcon from "../../images/png/facebook-5.png";

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
              <ul className="social-media">
                <li className="youtube">
                  <a href="https://www.youtube.com/@developergus" target="_blank" rel="noopener noreferrer" aria-label="youtube channel">
                    <img src={youtubeIcon} alt="Youtube icon" />
                  </a>
                </li>
                <li className="github">
                  <a href="https://github.com/subzero783" target="_blank" rel="noopener noreferrer" aria-label="github">
                    <img src={githubIcon} alt="Github icon" />
                  </a>
                </li>
                <li className="linkedin">
                  <a href="https://www.linkedin.com/in/subzero783-gustavo-amezcua/" target="_blank" rel="noopener noreferrer" aria-label="linkedin profile">
                    <img src={linkedinIcon} alt="Linkedin icon" />
                  </a>
                </li>
                <li className="facebook">
                  <a href="https://www.facebook.com/developergus" target="_blank" rel="noopener noreferrer" aria-label="facebook profile">
                    <img src={facebookIcon} alt="Facebook icon" />
                  </a>
                </li>
                <li className="instagram">
                  <a href="https://www.instagram.com/developergus/" target="_blank" rel="noopener noreferrer" aria-label="instagram profile">
                    <img src={instagramIcon} alt="Instagram icon" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
