import React, { useState, useCallback, useEffect } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { posts } from "../../data/blog-posts";
import ContactInfo from "../../components/ContactInfo/ContactInfo";
import { get_current_path, get_single_video, custom_sort, formatted_date } from "../../functions";
import "./BlogPost.scss";

export default function BlogPost() {
  const [postUrl, setPostUrl] = useState("");
  const [postObjContent, setPostObjContent] = useState([]);
  const [postMainText, setPostMainText] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const [postVideoId, setPostVideoId] = useState("");
  const [postDate, setPostDate] = useState("");
  const [postAuthor, setPostAuthor] = useState("");
  const [postCategories, setPostCategories] = useState([]);

  const particlesInit = useCallback(async (engine) => {
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);

  posts.sort(custom_sort);

  useEffect(() => {
    const get_post_content = async () => {
      setPostUrl(get_current_path(window.location.pathname, 2));

      const postObj = posts.find(({ url }) => url === postUrl);

      setPostObjContent(postObj);
      setPostVideoId(postObj.video_id);
      setPostTitle(postObj.title);
      setPostMainText(postObj.content);
      setPostDate(postObj.date);
      setPostAuthor(postObj.author);
      setPostCategories(postObj.categories);
    };
    get_post_content();
  }, [postObjContent, postUrl]);

  return (
    <div id="blog-post">
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
          <div className="col col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
            <h1 className="post-title">{postTitle}</h1>
            <div className="extra-info">
              <div className="date-and-author">
                <div className="the-date">
                  <p>{formatted_date(postDate)}</p>
                </div>
                <div className="extra-space">
                  <span> </span>|<span> </span>
                </div>
                <div className="the-author">
                  <p>
                    <span>Author:</span> {postAuthor}
                  </p>
                </div>
              </div>
              <div className="categories">
                <p>
                  <span>Categories:</span>{" "}
                </p>
                <div className="categories-list">
                  {postCategories.map((category, index) => (
                    <a href="/" className="category" key={index}>
                      {category}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12"></div>
        </div>
      </section>
      <section id="post-content-and-sidebar" className="container">
        <div className="row">
          <div className="col col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12 content-side">
            <div className="post-video">{get_single_video(postVideoId, postTitle)}</div>
            <div>
              <a href="https://www.youtube.com/channel/UChuhEhCujTGP1mfmPdtuVhA" rel="noopener noreferrer" className="button_1" target="_blank">
                More Videos
              </a>
            </div>
            <div className="post-text">
              <div dangerouslySetInnerHTML={{ __html: postMainText }} />
            </div>
          </div>
          <div className="col col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 sidebar"></div>
        </div>
      </section>
      <div className="container contact-info-container">
        <ContactInfo />
      </div>
    </div>
  );
}
