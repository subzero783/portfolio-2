// import React, { useEffect, useCallback } from "react";
import React from "react";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";
import "./ThankYouPage.scss";
import ContactInfo from "../../components/ContactInfo/ContactInfo";
import HeroVideo from "../../components/HeroVideo/HeroVideo";

export default function ThankYouPage() {
  //   const particlesInit = useCallback(async (engine) => {
  //     await loadFull(engine);
  //   }, []);

  //   const particlesLoaded = useCallback(async (container) => {}, []);

  //   useEffect(() => {
  //     first;

  //     return () => {
  //       second;
  //     };
  //   }, [third]);

  return (
    <div id="thank-you-page">
      {/* <img className="wallpaper" src={email2} alt="Email icon" /> */}
      <HeroVideo />
      <div className="container">
        <div className="row">
          <div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <h1>We’re excited to share updates we think you’ll find valuable. Below is your freebie!</h1>
          </div>
        </div>
      </div>
      <div className="contact-info-container">
        <div className="container">
          <ContactInfo />
        </div>
      </div>
      {/* <Particles
        init={particlesInit}
        loaded={particlesLoaded}
        className="particles"
        params={{
          particles: {
            number: {
              value: 100,
              density: {
                enable: true,
                value_area: 2000,
              },
            },
            color: {
              value: ["#03afaf", "#04e5e5"],
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#fff",
              },
            },
            opacity: {
              value: 0.5,
              random: false,
              anim: {
                enable: true,
                speed: 0.5,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 8.017060304327615,
              random: true,
              anim: {
                enable: true,
                speed: 12.181158184520175,
                size_min: 0.1,
                sync: true,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              // "color": this.context.theme === "dark" ? "#fff" : "#555",
              color: "#fff",
              opacity: 0.5,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "bounce",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: false,
                mode: "repulse",
              },
              onclick: {
                enable: false,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        }}
      /> */}
    </div>
  );
}
