import React, { useCallback, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { posts } from "../../data/blog-posts";
import { categories } from "../../data/categories";
import { formatted_date, custom_sort } from "../../functions";
import ContactInfo from "../../components/ContactInfo/ContactInfo";
import MetaInfo from "../../components/MetaInfo/MetaInfo";

import "./Blog.scss";

function return_chars(numberOfChars, content) {
  const theSubstring = content.substring(0, numberOfChars);
  return theSubstring + '<span className="dots">...</span>';
}

function get_excerpt(string, numberOfChars) {
  const theHTML = string;
  return return_chars(numberOfChars, theHTML);
}

function get_video_thumbnail(video_id) {
  const thumbnail = posts.map((video, index) => {
    if (video.video_id === video_id) {
      return <iframe className="embed-responsive-item" src={`https://www.youtube-nocookie.com/embed/${posts[index].video_id}`} title={posts[index].title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>;
    } else {
      return "";
    }
  });
  return thumbnail;
}

export default function Blog() {
  const [properCategoryName, setProperCategoryName] = useState("");
  const { category } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (category) {
      const lowerArray = categories[0].categories.map((element) => {
        return element.toLowerCase();
      });
      if (!lowerArray.includes(category)) {
        navigate("/blog");
      }
    }
    const getProperCategoryName = () => {
      categories[0].categories.map((element) => {
        if (element.toLowerCase() === category) {
          setProperCategoryName(element);
        }
        return "";
      });
    };
    getProperCategoryName();
  }, [category, navigate]);
  const particlesInit = useCallback(async (engine) => {
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);

  posts.sort(custom_sort);

  return (
    <div id="blog">
      {category !== undefined && category !== null ? <MetaInfo title={`Developer Gus Blog ${properCategoryName} Category`} description="Watch and read my latest web development content about how to create websites using HTML, CSS and JavaScript as well as how to create websites on WordPres, HubSpot and ReactJS." canonical={`https://www.developergus.com/blog/category/${category}`} /> : <MetaInfo title="Developer Gus Blog" description="Watch and read my latest web development content about how to create websites using HTML, CSS and JavaScript as well as how to create websites on WordPres, HubSpot and ReactJS." canonical="https://www.developergus.com/blog/" />}

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
      <section id="heading" className="container-lg">
        <div className="row">
          <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            {category ? <h1>Developer Gus {properCategoryName} Blog Category</h1> : <h1>Developer Gus Blog</h1>}
            <h2 className="title">
              Watch and read my latest
              <br />
              web development content
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <nav id="breadcrumbs" aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li className={`breadcrumb-item ${category ? "" : "active"}`} {...(category ? "" : 'aria-current="page"')}>
                  <a href="/blog">Blog</a>
                </li>
                {category ? <li className="breadcrumb-item active">{properCategoryName} Category</li> : ""}
              </ol>
            </nav>
          </div>
        </div>
        <div className="row">
          <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <h3 className="categories-heading">Categories:</h3>
            <ul id="categories">
              {categories[0].categories.map((element, index) => {
                return (
                  <li className="category" key={index}>
                    <a href={`/blog/category/${element.toLowerCase()}`}>{element}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
      <ul id="blog-posts" className="container-lg">
        {posts.map((post, index) => {
          let inCategory = false;
          if (category === null || category === undefined) {
            inCategory = true;
          }
          if (category !== undefined && category !== null) {
            const lowerArray = post.categories.map((element) => {
              return element.toLowerCase();
            });
            inCategory = lowerArray.includes(category);
          }
          if (post.active && inCategory) {
            return (
              <li key={index + 1} className="g-row">
                <div className="post-text">
                  <div className="post" key={post.id}>
                    <a href={`/blog/${post.url}/`} aria-label={post.title} className="title-link">
                      <h2>{post.title}</h2>
                    </a>
                    <div className="extra-info">
                      <div className="date-and-author">
                        <div className="the-date">
                          <p>{formatted_date(post.date)}</p>
                        </div>
                        <div className="extra-space">
                          <span> </span>|<span> </span>
                        </div>
                        <div className="the-author">
                          <p>
                            <span>Author:</span> {post.author}
                          </p>
                        </div>
                      </div>
                      <div className="categories">
                        <p>
                          <span>Categories:</span>{" "}
                        </p>
                        <div className="categories-list">
                          {post.categories.map((category, index) => (
                            <a href={`/blog/category/${category.toLowerCase()}`} className="category" key={index}>
                              {category}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div
                      className="post-excerpt"
                      dangerouslySetInnerHTML={{
                        __html: get_excerpt(post.content, 200),
                      }}
                    />
                    <a className="button_1 read_more" href={`/blog/${post.url}/`}>
                      Read More
                    </a>
                  </div>
                </div>
                <div className="post-thumbnail">
                  <div className="thumbnail-container embed-responsive-16by9">{get_video_thumbnail(post.video_id)}</div>
                </div>
              </li>
            );
          } else {
            return null;
          }
        })}
      </ul>
      <div className="container-lg contact-info-container">
        <ContactInfo />
      </div>
    </div>
  );
}
