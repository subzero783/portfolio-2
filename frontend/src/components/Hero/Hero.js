import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import "./Hero.scss";
import Shapes from "../Shapes/Shapes";

export default function Hero() {
  const [headlineContainer, setHeadlineContainer] = useState({
    width: 0,
    height: 0,
  });

  const updateDimensions = () => {
    if (headlineContainer.height !== window.innerHeight) {
      setHeadlineContainer({
        height: window.innerHeight,
      });
    }
    if (headlineContainer.width !== window.innerWidth) {
      setHeadlineContainer({
        width: window.innerWidth,
      });
    }
  };

  useEffect(() => {
    setHeadlineContainer({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    window.addEventListener("resize", updateDimensions);
    document.body.addEventListener("mousemove", (e) => {
      var amountMovedX = (e.clientX * -0.1) / 8;
      var amountMovedY = (e.clientY * -0.1) / 8;
      var x = document.getElementsByClassName("parallax-hero-item");
      var i;
      for (i = 0; i < x.length; i++) {
        x[i].style.transform = "translate(" + amountMovedX + "px," + amountMovedY + "px)";
      }
    });
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  return (
    <div id="hero">
      <video autoPlay loop muted>
        <source src={process.env.PUBLIC_URL + "/videos/abstract-video-bg.mp4"} type="video/mp4" />
      </video>
      <div id="headline-container" className="animate parallax-hero-item">
        <p className="subheading parallax-hero-item">Hello, I'm</p>
        <div className="heading parallax-hero-item">
          <h1 className="homepage-h1">Gustavo Amezcua</h1>
          <div className="type teko-font">
            <Typewriter
              options={{
                strings: ["Front-End Developer", "Back-End Developer", "Full-Stack Developer", "WordPress Developer", "UX Developer", "Web Designer"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <div className="hero-buttons-container">
            <a href="https://docs.google.com/document/d/1DvOP_pcP5jvvcKz7qN-4QGLck8vYdMlu/edit?usp=sharing&ouid=102193198745538813297&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer" className="button_1">
              Download Resume
            </a>
            <a href="#recent-projects" className="button_1">
              Recent Projects
            </a>
          </div>
        </div>
      </div>
      <Shapes />
    </div>
  );
}
