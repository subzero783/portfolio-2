
import React from 'react';

import './Services.scss';

import {activate_text_fade_down} from '../../../../functions';

import servicesBgImage from '../../../../../src/images/bg-1.jpeg';

const page_scroll_2 = () => {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if(
        scrolled >= document.getElementById("services").offsetTop - 200
        &&
        scrolled <  document.getElementById("recent-projects").offsetTop
        ){
        activate_text_fade_down(true, document.querySelectorAll(".services-title > div"));
    }else{
        activate_text_fade_down(false, document.querySelectorAll(".services-title > div"));
    }
}

export default function Services(){

    window.addEventListener('scroll', page_scroll_2);

    return(
        <div id="services">
            {/* <img id="services-bg" src={servicesBgImage} alt="services background image" /> */}
            <div className="container">
                <div className="row">
                    <div className="title-1">
                        <h2 className="services-title">
                            <div>M</div>
                            <div>y</div>
                            <div className="empty_text"></div>
                            <div>S</div>
                            <div>e</div>
                            <div>r</div>
                            <div>v</div>
                            <div>i</div>
                            <div>c</div>
                            <div>e</div>
                            <div>s</div>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}