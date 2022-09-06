
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
                        <div id="about-me-text">
                            <h2>About Me</h2>
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