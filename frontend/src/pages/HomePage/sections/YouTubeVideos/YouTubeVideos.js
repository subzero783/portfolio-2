import React, { useEffect, useContext } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./YouTubeVideos.scss";
import { activate_text_fade_down } from "../../../../functions";
import { Context } from "../../../../App";

const page_scroll_2 = () => {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  if (
    scrolled >= document.getElementById("developer-gus").offsetTop - 800 &&
    scrolled < document.getElementById("about").offsetTop
  ) {
    activate_text_fade_down(
      true,
      document.querySelectorAll("#youtube-videos-text > h2 > div")
    );
  } else {
    activate_text_fade_down(
      false,
      document.querySelectorAll("#youtube-videos-text > h2 > div")
    );
  }
};

export default function YouTubeVideos() {
  const videos = useContext(Context);

  window.addEventListener("scroll", page_scroll_2);

  useEffect(() => {
    AOS.init({
      duration: 500,
      anchorPlacement: "top-top",
    });
  }, []);

  return (
    <div id="developer-gus">
      <div className="container">
        <div className="row">
          <div id="youtube-videos-text" className="title-1">
            <h2>
              <div>D</div>
              <div>e</div>
              <div>v</div>
              <div>e</div>
              <div>l</div>
              <div>o</div>
              <div>p</div>
              <div>e</div>
              <div>r</div>
              <div className="empty_text"></div>
              <div>G</div>
              <div>u</div>
              <div>s</div>
            </h2>
          </div>
          <h3 className="subtitle">YouTube Channel</h3>
          <h4 id="watch-latest-videos">Watch my most recent video</h4>
          {/* Add video player with most recent video */}
          <div id="player-2">
            {videos[0] !== undefined ? (
              <iframe
                src={`https://www.youtube.com/embed/${videos[0].id.videoId}`}
                title={videos[0].snippet.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <iframe className="not-from-response" src="https://www.youtube.com/embed/uVY8eaaaiMo" title="How to Install WordPress in CPanel" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            )}
          </div>
          {/* Add most recent 5 videos as thumbnail images to click and switch the main video above */}
          <a
            href="https://www.youtube.com/channel/UChuhEhCujTGP1mfmPdtuVhA"
            rel="noopener noreferrer"
            className="button_1 watch_more_button"
            target="_blank"
          >
            Watch More
          </a>
        </div>
      </div>
    </div>
  );
}
