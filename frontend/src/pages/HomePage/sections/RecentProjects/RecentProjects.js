import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import "./RecentProjects.scss";

import PortfolioItem from "../../../../components/PortfolioItem/PortfolioItem";

import portfolioImage1 from "../../../../images/portfolio-images/hand-holding-cell-phone.jpeg";
import portfolioImage2 from "../../../../images/portfolio-images/vintage-camera.jpeg";
import portfolioImage3 from "../../../../images/portfolio-images/watch.jpeg";
import portfolioImage4 from "../../../../images/portfolio-images/two-iphones.jpeg";
import portfolioImage5 from "../../../../images/portfolio-images/camera-lens-beside-an-iphone.jpeg";
import portfolioImage6 from "../../../../images/portfolio-images/iphone.jpeg";
import portfolioImage7 from "../../../../images/portfolio-images/jelly-fish.jpg";
import portfolioImage8 from "../../../../images/portfolio-images/triangle.jpg";
import portfolioImage9 from "../../../../images/portfolio-images/pink-objects.jpg";
import portfolioImage10 from "../../../../images/portfolio-images/green.jpg";
import portfolioImage11 from "../../../../images/portfolio-images/abstract-02.jpg";
import websiteImage01 from "../../../../images/portfolio-websites/careers.advantage-solutions.net-01.png";
import websiteImage02 from "../../../../images/portfolio-websites/careers.advantage-solutions.net-02.png";
import websiteImage03 from "../../../../images/portfolio-websites/careers.advantage-solutions.net-03.png";

import { activate_text_fade_down } from "../../../../functions";

const page_scroll_2 = () => {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  if (scrolled >= document.getElementById("recent-projects").offsetTop - 600 && scrolled < document.getElementById("contact").offsetTop) {
    activate_text_fade_down(true, document.querySelectorAll(".recent-projects-title > div"));
  } else {
    activate_text_fade_down(false, document.querySelectorAll(".recent-projects-title > div"));
  }
};

export default function RecentProjects() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
  }, []);

  window.addEventListener("scroll", page_scroll_2);

  return (
    <>
      <div id="recent-projects">
        <div className="container-lg">
          <div className="row">
            <div className="title-1">
              <h2 className="recent-projects-title">
                <div>R</div>
                <div>e</div>
                <div>c</div>
                <div>e</div>
                <div>n</div>
                <div>t</div>
                <div className="empty_text"></div>
                <div>P</div>
                <div>r</div>
                <div>o</div>
                <div>j</div>
                <div>e</div>
                <div>c</div>
                <div>t</div>
                <div>s</div>
              </h2>
            </div>
            <div id="projects-grid">
              <PortfolioItem
                key={1}
                image={portfolioImage4}
                alt="two iphones"
                link={"https://careers.advantagesolutions.net/"}
                title={"Advantage Solutions Careers"}
                skills={"PHP, WordPress, CSS/SCSS, JavaScript, HTML, MySQL, API Integration"}
                story=""
                websiteImages={({ image: websiteImage01, alt: "" }, { image: websiteImage02, alt: "" }, { image: websiteImage03, alt: "" })}
              />
              <PortfolioItem
                key={2}
                image={portfolioImage3}
                alt="watch"
                link={"https://braincorp.com/"}
                title={"Brain Corp"}
                skills={"WordPress Development"}
                story=""
              />
              <PortfolioItem
                key={3}
                image={portfolioImage5}
                alt="camera lens beside an iphone"
                link={"https://www.groupsense.io/"}
                title={"GroupSense"}
                skills={"HubSpot Development"}
                story=""
              />
              <PortfolioItem
                key={4}
                image={portfolioImage2}
                alt="vintage camera"
                link={"https://paymyprice.com/"}
                title={"Pay My Price"}
                skills={"Custom Content Management System"}
                story=""
              />
              <PortfolioItem
                key={5}
                image={portfolioImage6}
                alt="iphone"
                link={"https://www.nisos.com/"}
                title={"Nisos"}
                skills={"HubSpot Development"}
                story=""
              />
              <PortfolioItem
                key={6}
                image={portfolioImage8}
                alt="triangle"
                link={"https://www.behaviosec.com/"}
                title={"BehavioSec"}
                skills={"WordPress Development"}
                story=""
              />
              <PortfolioItem
                key={7}
                image={portfolioImage7}
                alt="jelly fish"
                link={"https://www.bestmessagecenter.com/"}
                title={"Best Message Center"}
                skills={"WordPress Development"}
                story=""
              />
              <PortfolioItem
                key={8}
                image={portfolioImage9}
                alt=""
                link={"https://www.pcrprograms.org/"}
                title={"Parent-child Relationship Programs"}
                skills={"WordPress Development"}
                story=""
              />
              <PortfolioItem
                key={9}
                image={portfolioImage1}
                alt="hand holding cell phone"
                link={"https://driftpcola.com/home/"}
                title={"Drift Pcola"}
                skills={"WordPress Development"}
                story=""
              />
              <PortfolioItem
                key={10}
                image={portfolioImage10}
                alt="green"
                link={"https://www.miracleserv.com/"}
                title={"Miracle Serv"}
                skills={"WordPress Development"}
                story=""
              />
              <PortfolioItem
                key={11}
                image={portfolioImage11}
                alt="red"
                link={"https://www.ascentfunding.com/faq/"}
                title={"Ascent Funding"}
                skills={"PHP, WordPress, JavaScript, React, CSS/SCSS, MySQL, HTML"}
                story=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
