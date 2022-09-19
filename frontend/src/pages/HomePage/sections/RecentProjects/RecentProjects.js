
import React,{ useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import './RecentProjects.scss';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import PortfolioItem from '../../../../components/PortfolioItem/PortfolioItem';

import portfolioImage1 from '../../../../images/portfolio-images/hand-holding-cell-phone.jpeg';

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

    const slider_settings = {
        dots: true,
        swipe: true,
        infinite: false,
        speed: 500,
        // slidesToScroll: this.state.width < 500 ? 1 : 2,
        slidesToScroll: 1, 
        arrows: false,
        autoplay: true,
        autoplaySpeed: 10000,
        loop: true,
        slidesToShow: 3
        // slidesToShow: this.state.width < 500 ? 1 : this.state.width > 500 && this.state.width <= 1024 ? 3 : 4,
    }    

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
                    <Slider {...slider_settings}>
                        <PortfolioItem
                            key={1}
                            image={portfolioImage1}
                            alt="hand holding cell phone"
                            link={"https://driftpcola.com/home/"}
                            title={"Drift Pcola"}
                            category={"WordPress Development"}
                        />
                    </Slider>
                </div>
            </div>
        </div>
    )
}