import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import Blog from "../../pages/Blog/Blog";
import BlogPost from "../../pages/BlogPost/BlogPost";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import NavBar from "../NavBar/NavBar";
// import SiteMap from "../SiteMap/SiteMap";
// import NewsletterSignup from "../../pages/NewsletterSignup/NewsletterSignup";
// import ThankYouPage from "../../pages/ThankYouPage/ThankYouPage";

export default function RouterComponent(props) {
  const [currentLocation, setCurrentLocation] = useState();
  useEffect(() => {
    const getCurrentLocation = () => {
      let location = window.location.pathname.split("/");
      setCurrentLocation(location[1]);
    };

    getCurrentLocation();
  }, []);

  return (
    <Router>
      <div className={`App ${currentLocation}`}>
        <NavBar />
        <div id="page-body">
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/blog/" element={<Blog />} />
            <Route path="/blog/category/:category" render={(props) => <Blog {...props} />} />
            <Route path="/blog/:post" element={<BlogPost />} />
            {/* <Route path="/hubspot-form/" element={<NewsletterSignup />} /> */}
            {/* <Route path="/thank-you/:item" element={<ThankYouPage />} /> */}
            {/* <Route path="/sitemap" element={<SiteMap />} /> */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
