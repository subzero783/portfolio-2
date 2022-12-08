import React, { useCallback } from "react";

import Particles from "react-tsparticles";

import { loadFull } from "tsparticles";

import { posts } from "../../data/blog-posts";

import "./Blog.scss";

function b64_to_utf8(str) {
  return decodeURIComponent(escape(window.atob(str)));
}

function return_chars(numberOfChars, content) {
  return content.substring(0, numberOfChars);
}

function get_excerpt(base64String, numberOfChars) {
  const theHTML = b64_to_utf8(base64String);
  return return_chars(numberOfChars, theHTML);
}

export default function Blog() {
  const particlesInit = useCallback(async (engine) => {
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);

  console.log(posts);

  return (
    <div id="blog">
      <Particles
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
      />
      <section id="heading" className="container">
        <div className="row">
          <div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <h1>
              <span>Developer Gus</span> Blog
            </h1>
            <h2 className="title">
              <span>Watch and Read</span> My Latest
              <br />
              <span>Web Development</span> Content
            </h2>
          </div>
          <div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12"></div>
        </div>
      </section>
      <section id="blog-posts">
        <div className="row">
          <div className="col col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12 content-side">
            {posts.map((post) => (
              <div className="post" key={post.id}>
                <a href="/" aria-label={post.title}>
                  <h2>{post.title}</h2>
                </a>
                <div
                  className="post-excerpt"
                  dangerouslySetInnerHTML={{
                    __html: get_excerpt(post.content, 400),
                  }}
                />
              </div>
            ))}
            {/* <div className="row">
              <div className="col col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                <!--
                Title
                Date: Month, day year | By: Author
                Categories: Example, Example
                Reading Time: 7 mins
                (Excerpt)...
                Read More >
                -->
              </div>
              <div className="col col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
              </div>
            </div> */}
          </div>
          <div className="col col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 sidebar"></div>
        </div>
      </section>
    </div>
  );
}
