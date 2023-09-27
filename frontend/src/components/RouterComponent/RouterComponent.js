import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, redirect } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import Blog from "../../pages/Blog/Blog";
import BlogPost from "../../pages/BlogPost/BlogPost";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import NavBar from "../NavBar/NavBar";
// import SiteMap from "../SiteMap/SiteMap";
// import NewsletterSignup from "../../pages/NewsletterSignup/NewsletterSignup";
// import ThankYouPage from "../../pages/ThankYouPage/ThankYouPage";

export default function RouterComponent() {
  useEffect(() => {
    const getCurrentLocation = () => {
      let theRoot = document.getElementById("root");
      theRoot.className = "";
      if (window.location.pathname !== "/") {
        let location = window.location.pathname.split("/");
        if (location.length > 0) {
          if (location.length > 2) {
            theRoot.classList.add(location[1]);
            theRoot.classList.add(location[2]);
          } else {
            theRoot.classList.add(location[1]);
          }
        }
      }
    };

    getCurrentLocation();
  }, []);

  return (
    <Router>
      <div className={`App`}>
        <NavBar />
        <div id="page-body">
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/blog/" element={<Blog />} />
            <Route path="/blog/category/:category" element={<Blog />} />
            <Route path="/blog/category/" element={<NotFoundPage />} />
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
