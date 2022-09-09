
import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.scss';

const activate_text_fade_down = () => {
    var elements = document.querySelectorAll("#about_me > p");
    elements.forEach((element, key) => {
        var timing = "00." + key + 3;
        timing = parseFloat(timing);
        element.style.cssText += "transition-duration:"+(timing)+"s";
        element.classList.add("come_down");
    });
}

const page_scroll = () => {
    window.onscroll = function() {

        var scrolled = window.pageYOffset || document.documentElement.scrollTop;

        if( scrolled >= document.getElementById("about").offsetTop ){
            activate_text_fade_down();
        }
    };
}
page_scroll();

setTimeout(() => {
    activate_text_fade_down();
}, 1000);

export default function About(){

    useEffect(() => {
        AOS.init({
            duration : 2000
        });
        AOS.refresh();
    }, []);

    return(
        <div id="about">
            <div className="container">
                <div className="row">
                    <div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                        <div id="about-me-image" data-aos="fade-down">
                            <img src={process.env.PUBLIC_URL + '/images/gus-amezcua-1.jpeg'} alt="Gustavo Amezcua"/>
                        </div>
                    </div>
                    <div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                        <div id="about-me-text">
                            {/* <h2 id="about_me">About Me</h2> */}
                            <h2 id="about_me">
                                {/* <p style={{transitionDuration: "0.5s"}}>A</p>
                                <p style={{transitionDuration: "0.8s"}}>b</p>
                                <p style={{transitionDuration: "1s"}}>o</p>
                                <p style={{transitionDuration: "1.3s"}}>u</p>
                                <p style={{transitionDuration: "1.6s"}}>t</p>
                                <p>&#32;&#32;</p>
                                <p style={{transitionDuration: "1.9s"}}>M</p>
                                <p style={{transitionDuration: "2.2s"}}>e</p> */}
                                <p>A</p>
                                <p>b</p>
                                <p>o</p>
                                <p>u</p>
                                <p>t</p>
                                <p>  </p>
                                <p>M</p>
                                <p>e</p>
                            </h2>
                            <div className="text-underline-1"></div>
                            <p className="text-1">
                            Full-stack web developer with over 5 years of experience in producing pixel-perfect websites and solutions with advanced knowledge in coding. Eager to support development teams with top-notch coding skills. In previous roles, was able to adopt new CMS platforms such as HubSpot and also new coding technologies such as NodeJS, ReactJS and API Integrations.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}