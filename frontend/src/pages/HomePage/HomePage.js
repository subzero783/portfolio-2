import React, { useEffect } from "react";
// Hero component
import Hero from "../../components/Hero/Hero";

// Sections components
import YouTubeVideos from "./sections/YouTubeVideos/YouTubeVideos";
import About from "./sections/About/About";
import Services from "./sections/Services/Services";
import RecentProjects from "./sections/RecentProjects/RecentProjects";
import Contact from "./sections/Contact/Contact";

import MetaInfo from "../../components/MetaInfo/MetaInfo";

function HomePage() {
  // const [pageFeaturedImage, setPageFeaturedImage] = useState(null);

  useEffect(() => {
    const go_to_section = () => {
      const sectionHref = window.location.href;
      const n = sectionHref.lastIndexOf("#");
      const result = sectionHref.substring(n + 1);
      const theSection = document.getElementById(result);
      theSection.scrollIntoView({ behavior: "smooth" });
    };

    if (window.location.href.includes("#")) {
      go_to_section();
    }
  }, []);

  return (
    <>
      <MetaInfo title="Developer Gus | Full Stack Web Developer" description="Full-stack web developer with over 6 years of experience in producing pixel-perfect websites and solutions with advanced knowledge in coding. Eager to support development teams with top-notch coding skills. In previous roles, was able to adopt new CMS platforms such as HubSpot and also new coding technologies such as NodeJS, ReactJS and API Integrations." canonical="https://developergus.com/" />
      <div id="homepage-container">
        <Hero />
        <YouTubeVideos />
        <About />
        <Services />
        <RecentProjects />
        <Contact />
      </div>
    </>
  );
}

export default HomePage;
