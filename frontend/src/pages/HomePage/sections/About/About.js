
import React, {useState, useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.scss';
import Progress from '../../../../components/Progress/Progress';
import Timeline from '../../../../components/Timeline/Timeline';
import {activate_text_fade_down} from '../../../../functions';


const page_scroll_2 = () => {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if(
        scrolled >= document.getElementById("about").offsetTop - 200
        &&
        scrolled <  document.getElementById("services").offsetTop
        ){
        activate_text_fade_down(true, document.querySelectorAll("#about_me > div"));
    }else{
        activate_text_fade_down(false, document.querySelectorAll("#about_me > div"));
    }
}

export default function About(){

    const [selectedTab, setSelectedTab] = useState('skills');

    window.addEventListener('scroll', page_scroll_2);

    const tab_click = (e) => {
        var tab_data = e.target.getAttribute("data-extra");
        setSelectedTab(tab_data);
    }    

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
                            <h2 id="about_me">
                                <div>A</div>
                                <div>b</div>
                                <div>o</div>
                                <div>u</div>
                                <div>t</div>
                                <div className="empty_text"></div>
                                <div>M</div>
                                <div>e</div>
                            </h2>
                            <div className="text-underline-1"></div>
                            <p className="text-1">
                            Full-stack web developer with over 5 years of experience in producing pixel-perfect websites and solutions with advanced knowledge in coding. Eager to support development teams with top-notch coding skills. In previous roles, was able to adopt new CMS platforms such as HubSpot and also new coding technologies such as NodeJS, ReactJS and API Integrations.
                            </p>
                        </div>
                        <div id="about-extra-content">
                            <div className="buttons-container">
                                <button data-extra="skills" onClick={tab_click} className={selectedTab === 'skills' ? 'active' : ''}>Skills</button>
                                <button data-extra="experience" onClick={tab_click} className={selectedTab === 'experience' ? 'active' : ''}>Experience</button>
                                <button data-extra="education" onClick={tab_click} className={selectedTab === 'education' ? 'active' : ''}>Education</button>
                            </div>
                            <ul>
                                <li data-extra-content="skills" className={selectedTab === 'skills' ? 'active' : ''}>
                                    <Progress value={100} text="ReactJS" />
                                    <Progress value={100} text="NodeJS" />
                                    <Progress value={100} text="MongoDB" />
                                    <Progress value={100} text="JavaScript, jQuery, AJAX" />
                                    <Progress value={100} text="Grunt and Gulp" />
                                    <Progress value={100} text="PHP" />
                                    <Progress value={100} text="MySQL" />
                                    <Progress value={100} text="WordPress" />
                                    <Progress value={100} text="Twitter Bootstrap and Zurb Foundation" />
                                    <Progress value={100} text="Linux and Windows Command Line" />
                                    <Progress value={100} text="Git, GitHub and Bitbucket" />
                                    <Progress value={100} text="Adobe PhotoShop" />
                                    <Progress value={100} text="Online Marketing" />
                                    <Progress value={100} text="SEO" />
                                </li>
                                <li data-extra-content="experience" className={selectedTab === 'experience' ? 'active' : ''}>
                                    <Timeline data={{
                                        "2022 - Present" :  {
                                            title: "UX Front End Developer",
                                            institution: "Ascent Funding LLC in San Diego, CA, USA",
                                            description: "<ul><li>Use the Adobe Creative Suite including PhotoShop and Illustrator and also use Figma  to modify and optimize designs. Develop websites from the designs created on Figma files. Develop by incorporating the WCAF 2.1 AA standards, technical SEO and also put the users experience first when writing code. </li><li>Integrate websites into GitHub repositories and add automatic deployment with GitHub Actions. Including using version-control interface frameworks such as SourceTree. </li><li>Create, manage and update responsive/cross-browser compatible WordPress websites. Developed with ACF, REST APIs, JavaScript, ReactJS and CSS pre-processing frameworks (SASS/LESS). </li><li>Document code by writing comments and instructions for content updates and also for other developers to have clear instructions.</li></ul>"
                                        },
                                        "2007 - 2010" : {
                                            title: "Senior Developer",
                                            institution: "Ipsum Technologies",
                                            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting"
                                        },
                                        "2012 - 2018" : {
                                            title: "Data Scientist",
                                            institution: "Dolor AI",
                                            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting"
                                        },
                                        "2018 - Now" : {
                                            title: "AI Scientist",
                                            institution: "Ipsum AI",
                                            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting"
                                        }
                                    }}/>
                                </li>
                                <li data-extra-content="education" className={selectedTab === 'education' ? 'active' : ''}>
                                    <Timeline data={{
                                        "2001 - 2005" :  {
                                            title: "Junior Developer",
                                            institution: "Lorem Softwares",
                                            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting"
                                        },
                                        "2007 - 2010" : {
                                            title: "Senior Developer",
                                            institution: "Ipsum Technologies",
                                            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting"
                                        },
                                        "2012 - 2018" : {
                                            title: "Data Scientist",
                                            institution: "Dolor AI",
                                            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting"
                                        },
                                        "2018 - Now" : {
                                            title: "AI Scientist",
                                            institution: "Ipsum AI",
                                            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting"
                                        }
                                    }}/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}