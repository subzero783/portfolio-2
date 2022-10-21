
import React,{ useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import './Services.scss';

import {activate_text_fade_down} from '../../../../functions';

import bg2 from '../../../../images/bg2.jpg';
import serviceMobile from '../../../../images/services-icons/mobile.png';
import serviceWeb from '../../../../images/services-icons/web.png'
import serviceFrontend from '../../../../images/services-icons/front-end.png'
import serviceBackend from '../../../../images/services-icons/back-end.png'
import serviceWordpress from '../../../../images/services-icons/wordpress-white.png'
import serviceSeo from '../../../../images/services-icons/seo2.png'


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

    useEffect(() => {
        AOS.init({
            offset: 400
        });
    }, []);

    window.addEventListener('scroll', page_scroll_2);

    return(
        <div id="services">
            <div className="services-bg-image-container">
                <img className="services-bg-image" src={bg2} alt="services background image" />
            </div>
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
                    <div className="list-of-services">
                        <ul>
                            <li data-aos="fade-up" data-aos-duration="1000">
                            {/* <li> */}
                                <div className="service-content">
                                    <div className="service-icon-container">
                                        <img className="service-icon" src={serviceMobile} alt="Responsive web design service icon" />
                                    </div>
                                    <h4 className="text-2">Responsive Web Design</h4>
                                    <div className="underline-1"></div>
                                </div>
                            </li>
                            <li data-aos="fade-down" data-aos-duration="1000">
                            {/* <li> */}
                                <div className="service-content">
                                    <div className="service-icon-container">
                                        <img className="service-icon" src={serviceWeb} alt="Web development service icon" />
                                    </div>
                                    <h4 className="text-2">Web Development</h4>
                                    <div className="underline-1"></div>
                                </div>
                            </li>
                            <li data-aos="fade-right" data-aos-duration="1000">
                            {/* <li> */}
                                <div className="service-content">
                                    <div className="service-icon-container">
                                        <img className="service-icon" src={serviceFrontend} alt="UI/UX Front-end development service icon" />
                                    </div>
                                    <h4 className="text-2">UI/UX Front-end Development</h4>
                                    <div className="underline-1"></div>
                                </div>
                            </li>    
                            <li data-aos="fade-left" data-aos-duration="1000">
                            {/* <li> */}
                                <div className="service-content">
                                    <div className="service-icon-container">
                                        <img className="service-icon" src={serviceBackend} alt="Back-end Development service icon" />
                                    </div>
                                    <h4 className="text-2">Back-end Development</h4>
                                    <div className="underline-1"></div>
                                </div>
                            </li>    
                            <li data-aos="fade-down-right" data-aos-duration="1000">
                            {/* <li> */}
                                <div className="service-content">
                                    <div className="service-icon-container">
                                        <img className="service-icon" src={serviceWordpress} alt="WordPress Development service icon" />
                                    </div>
                                    <h4 className="text-2">WordPress Development</h4>
                                    <div className="underline-1"></div>
                                </div>
                            </li>    
                            <li data-aos="fade-down-left" data-aos-duration="1000">
                            {/* <li> */}
                                <div className="service-content">
                                    <div className="service-icon-container">
                                        <img className="service-icon" src={serviceSeo} alt="Search Engine Optimization service icon" />
                                    </div>
                                    <h4 className="text-2">Search Engine Optimization</h4>
                                    <div className="underline-1"></div>
                                </div>
                            </li>    
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}