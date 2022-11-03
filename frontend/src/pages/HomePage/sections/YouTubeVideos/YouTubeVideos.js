
import React, {useEffect, useState} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './YouTubeVideos.scss';
import { activate_text_fade_down } from '../../../../functions';


const page_scroll_2 = () => {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if(
        scrolled >= document.getElementById("youtube-videos").offsetTop - 800
        &&
        scrolled < document.getElementById("about").offsetTop
        ){
        activate_text_fade_down(true, document.querySelectorAll("#youtube-videos-text > h2 > div"));
    }else{
        activate_text_fade_down(false, document.querySelectorAll("#youtube-videos-text > h2 > div"));
    }
}


export default function YouTubeVideos(){

    const [videos, setVideos] = useState([]);
    // const youtubeURL = `https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_GOOGLE_API}&channelId=${process.env.REACT_APP_YOUTUBE_CHANNEL_ID}&part=snippet,id&order=date&maxResults=20`;

    window.addEventListener('scroll', page_scroll_2);

    useEffect(() => {
        AOS.init({
            duration : 500,
            anchorPlacement: 'top-top',
        });
    }, []);

    useEffect(()=>{
        // const fetchVideos = async(url) => {
        //     const result = await fetch(url);
        //     const body = await result.json();
        //     console.log(body);
        // }
        // fetchVideos(youtubeURL);
    }, []);

    return(
        <div id="youtube-videos">
            <div className="container">
                <div className="row">
                    <div id="youtube-videos-text" className="title-1">
                        <h2>
                            <div>M</div>
                            <div>y</div>
                            <div className="empty_text"></div>
                            <div>Y</div>
                            <div>o</div>
                            <div>u</div>
                            <div>T</div>
                            <div>u</div>
                            <div>b</div>
                            <div>e</div>
                            <div className="empty_text"></div>
                            <div>C</div>
                            <div>h</div>
                            <div>a</div>
                            <div>n</div>
                            <div>n</div>
                            <div>e</div>
                            <div>l</div>
                        </h2>
                    </div>
                    <h3 className="subtitle">Watch my latest videos</h3>
                    {/* Add video player with most recent video */}

                    {/* Add most recent 5 videos as thumbnail images to click and switch the main video above */}
                    <button
                        href="https://www.youtube.com/channel/UChuhEhCujTGP1mfmPdtuVhA"
                        className="button_1"
                    >
                        Watch More
                    </button>
                </div>
            </div>
        </div>
    );
}