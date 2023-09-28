import React from "react";
import instagramIcon from "../../images/png/instagram.png";
import youtubeIcon from "../../images/png/youtube.png";
import linkedinIcon from "../../images/png/linkedin.png";
import githubIcon from "../../images/png/github-sign.png";
import facebookIcon from "../../images/png/facebook-5.png";
import "./SocialMedia.scss";

export default function SocialMedia() {
  return (
    <ul className="social-media">
      <li className="youtube" data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200">
        <a href="https://www.youtube.com/@developergus" target="_blank" rel="noopener noreferrer" aria-label="youtube channel">
          <img src={youtubeIcon} alt="Youtube icon" />
        </a>
      </li>
      <li className="github" data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200">
        <a href="https://github.com/subzero783" target="_blank" rel="noopener noreferrer" aria-label="github">
          <img src={githubIcon} alt="Github icon" />
        </a>
      </li>
      <li className="linkedin" data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200">
        <a href="https://www.linkedin.com/in/subzero783-gustavo-amezcua/" target="_blank" rel="noopener noreferrer" aria-label="linkedin profile">
          <img src={linkedinIcon} alt="Linkedin icon" />
        </a>
      </li>
      <li className="facebook" data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200">
        <a href="https://www.facebook.com/developergus" target="_blank" rel="noopener noreferrer" aria-label="facebook profile">
          <img src={facebookIcon} alt="Facebook icon" />
        </a>
      </li>
      <li className="instagram" data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200">
        <a href="https://www.instagram.com/developergus/" target="_blank" rel="noopener noreferrer" aria-label="instagram profile">
          <img src={instagramIcon} alt="Instagram icon" />
        </a>
      </li>
    </ul>
  );
}
