
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
                        <div id="about-me-text" className="title-1">
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
                                            description: "<ul> <li>Use the Adobe Creative Suite including PhotoShop and Illustrator and also use Figma to modify and optimize designs. Develop websites from the designs created on Figma files. Incorporate technical SEO and also put the users experience first when writing code. </li><li>Integrate websites into GitHub repositories and add automatic deployment with GitHub Actions. Including using version-control interface frameworks such as SourceTree. </li><li>Create, manage and update responsive/cross-browser compatible WordPress websites. Developed with ACF, REST APIs, JavaScript, ReactJS and CSS pre-processing frameworks (SASS/LESS).</li><li>Document code by writing comments and instructions for content updates and also for other developers to have clear instructions. </li></ul>"
                                        },
                                        "2021 - 2022" : {
                                            title: "Web Developer",
                                            institution: "Innovision LLC",
                                            description: "<ul> <li>Manage and update eCommerce sites. Perform Cross-Browser development by testing the development of sites on common browsers and devices using BrowserStack. </li><li>Create, manage, and update WordPress sites using custom themes and manage and update Drupal sites. </li><li>Create APIs using NodeJS, JavaScript, MongoDB, PHP, and WordPress.</li><li>Integrate websites with API connections with Google Spreadsheet, Google Maps, and WordPress. </li><li>Create ReactJS websites using GraphQL with WordPress as the Headless CMS, and with SCSS, Apollo React, and Git/GitHub. </li><li>Create custom WordPress themes that include using Gulp, SCSS, Git/GitHub, and Advanced Custom Fields. Provide recommendations and implement ways to improve workflow and processes using web technologies such as better SEO and strategic website development.</li></ul>"
                                        },
                                        "2019 - 2020" : {
                                            title: "Developer",
                                            institution: "VSSL Agency",
                                            description: "<ul> <li>Manage eCommerce websites that use WooCommerce. </li><li>Manage the development of creating and re-designing websites using PHP with advanced MySQL queries and Plugin customization that uses Object Oriented PHP. </li><li>Full-Stack development by setting up a website with GatsbyJS, ReactJS, and WordPress using API integration. </li><li>Do maintenance work on many WordPress websites such as backups, PHP 7.3+ upgrades, granting access, coding (MySQL, PHP, JavaScript, CSS, jQuery, Bootstrap), SEO improvements, updating content, managing all websites through WPEngine and ManageWP. </li><li>Create websites, landing pages, and blogs on WordPress. Manage and create HubSpot templates for websites, landing pages, blogs, and emails using the HubL coding language. </li><li>Collaborate with designers and client managers to create and follow the technical guidelines for custom HTML emails. Custom application integration on WordPress sites. Learn the ReactJS programming language.</li></ul>"
                                        },
                                        "2019 - 2019" : {
                                            title: "Web Developer",
                                            institution: "123Websites",
                                            description: "<p>Collaborate with re m ote programmers to d e v elo p a custom WordPress theme that will be used by thousands of clients. Using efficient and best practices for coding by using the programming languages of MySQL, PHP, JavaScript, HTML5, CSS and SCSS and creating documentation.</p>"
                                        },
                                        "2018 - 2019" : {
                                            title: "Web Developer",
                                            institution: "EPhost",
                                            description: "<ul> <li>Collaborate with Graphic Designer, Server Manager and Project Manager to create WordPress websites and fix technical issues with client’s websites. </li><li>Develop WordPress websites using the latest DIVI theme and other themes. </li><li>Create eCommerce stores using WooCommerce, backup websites, install the most reliable plugins and use MySQL, PHP, HTML5, CSS3, JavaScript and jQuery and Adobe Photoshop to build websites.</li></ul>"
                                        },
                                        "2017 - 2018" : {
                                            title: "Front End Developer and Social Media Specialist PPC",
                                            institution: "SBHIS Insurance Services",
                                            description: "</ul> <li>Work with a team of Graphic Designers using the Adobe Creative Suite to create designs for websites. </li><li>Designed and developed advanced HTML5, customizable WordPress sites with plugin development using various themes and child-themes. </li><li>Developed landing pages with MySQL, PHP, HTML5, CSS3 and JavaScript, including jQuery. </li><li>Developed a Content Management System with Object-Oriented PHP without using a framework and utilizing the CRUD system with SQL databases and used JavaScript, including jQuery with API integration and the Bootstrap framework. </li><li>Learned new technologies and applied them such as using hardware including Raspberry Pi and the command line. </li></ul>"
                                        },
                                        "2017 - 2017" : {
                                            title: "Web Developer",
                                            institution: "Compounding Wholesalers of Mexico",
                                            description: "<p>Worked with Graphic Designers to build new websites, manage company email users, small IT work and also transfer company data into the CRM of Zoho.</p>"
                                        },
                                        "2016 - 2017" : {
                                            title: "Teacher of Web Design and Programming",
                                            institution: "D4 Reality",
                                            description: "<p>Teaching web design, programming languages and SQL to help people advance in their own careers.</p>"                                            
                                        },
                                        "2016 - 2017" : {
                                            title: "Intern as Publicist and Web Designer",
                                            institution: "Baja Testing Lab",
                                            description: "Managed digital advertising including PPC and CPM, developed websites and created new graphic designs."
                                        }
                                    }}/>
                                </li>
                                <li data-extra-content="education" className={selectedTab === 'education' ? 'active' : ''}>
                                    <Timeline data={{
                                        "2013 - 2017" :  {
                                            title: "Bachelor’s Degree in International Business ",
                                            institution: "CETYS University",
                                            description: ""
                                        },
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