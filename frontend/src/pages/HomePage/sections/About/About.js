
import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.scss';

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
                    </div>
                </div>
            </div>
        </div>
    );
}