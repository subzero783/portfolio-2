import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import "./RecentProjects.scss";

// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

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
  // const slider_settings = {
  //     dots: true,
  //     swipe: true,
  //     infinite: true,
  //     pauseOnHover: true,
  //     speed: 500,
  //     // slidesToScroll: this.state.width < 500 ? 1 : 2,
  //     slidesToScroll: 1,
  //     arrows: false,
  //     autoplay: true,
  //     autoplaySpeed: 6000,
  //     loop: true,
  //     slidesToShow: 3,
  //     // slidesToShow: this.state.width < 500 ? 1 : this.state.width > 500 && this.state.width <= 1024 ? 3 : 4,
  //     responsive: [
  //         {
  //             breakpoint: 991,
  //             settings: {
  //                 slidesToShow: 2,
  //             }
  //         },
  //         {
  //             breakpoint: 767,
  //             settings: {
  //                 slidesToShow: 2
  //             }
  //         }
  //     ]
  // }

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
  }, []);

  window.addEventListener("scroll", page_scroll_2);

  return (
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
          {/* <Slider {...slider_settings}> */}
          <div id="projects-grid">
            <PortfolioItem key={1} image={portfolioImage4} alt="two iphones" link={"https://careers.advantagesolutions.net/"} title={"Advantage Solutions Careers"} />
            <PortfolioItem key={2} image={portfolioImage3} alt="watch" link={"https://braincorp.com/"} title={"Brain Corp"} category={"WordPress Development"} />
            <PortfolioItem key={3} image={portfolioImage5} alt="camera lens beside an iphone" link={"https://www.groupsense.io/"} title={"GroupSense"} category={"HubSpot Development"} />
            <PortfolioItem key={4} image={portfolioImage2} alt="vintage camera" link={"https://paymyprice.com/"} title={"Pay My Price"} category={"Custom Content Management System"} />
            <PortfolioItem key={5} image={portfolioImage6} alt="iphone" link={"https://www.nisos.com/"} title={"Nisos"} category={"HubSpot Development"} />
            <PortfolioItem key={6} image={portfolioImage8} alt="triangle" link={"https://www.behaviosec.com/"} title={"BehavioSec"} category={"WordPress Development"} />
            <PortfolioItem key={7} image={portfolioImage7} alt="jelly fish" link={"https://www.bestmessagecenter.com/"} title={"Best Message Center"} category={"WordPress Development"} />
            <PortfolioItem key={8} image={portfolioImage9} alt="" link={"https://www.pcrprograms.org/"} title={"Parent-child Relationship Programs"} category={"WordPress Development"} />
            <PortfolioItem key={9} image={portfolioImage1} alt="hand holding cell phone" link={"https://driftpcola.com/home/"} title={"Drift Pcola"} category={"WordPress Development"} />
            <PortfolioItem key={10} image={portfolioImage10} alt="green" link={"https://www.miracleserv.com/"} title={"Miracle Serv"} category={"WordPress Development"} />
            <PortfolioItem key={11} image={portfolioImage11} alt="red" link={"https://www.ascentfunding.com/faq/"} title={"Ascent Funding"} category={"WordPress, JavaScript and React Development"} />
          </div>
          {/* </Slider> */}
        </div>
      </div>
    </div>
  );
}
