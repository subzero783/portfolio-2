
import React,{ useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import './RecentProjects.scss';

import {activate_text_fade_down} from '../../../../functions';


const page_scroll_2 = () => {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if(
        scrolled >= document.getElementById("recent-projects").offsetTop - 200
        &&
        scrolled <  document.getElementById("contact").offsetTop
        ){
        activate_text_fade_down(true, document.querySelectorAll(".recent-projects-title > div"));
    }else{
        activate_text_fade_down(false, document.querySelectorAll(".recent-projects-title > div"));
    }
}

export default function RecentProjects(){

    useEffect(() => {
        AOS.init({
            duration : 2000
        });
        AOS.refresh();
    }, []);

    window.addEventListener('scroll', page_scroll_2);

    return(
        <div id="recent-projects">
            <div className="container">
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
                </div>
            </div>
        </div>
    )
}