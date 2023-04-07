// import React, { useState, useEffect, createContext } from "react";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Blog from "./pages/Blog/Blog";
import BlogPost from "./pages/BlogPost/BlogPost";
// import AboutPage from './pages/AboutPage';
// import ArticlesListPage from './pages/ArticlesListPage';
// import ArticlePage from './pages/ArticlePage';
// import SignUpPage from  './pages/SignUpPage';
// import LoginPage from  './pages/LoginPage';
// import UserDashboard from  './pages/UserDashboard';
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import NavBar from "./components/NavBar/NavBar";

import NewsletterSignup from "./pages/NewsletterSignup/NewsletterSignup";
import ThankYouPage from "./pages/ThankYouPage/ThankYouPage";

import "./App.scss";

// export const Context = createContext();

function App() {
  // const [videos, setVideos] = useState([]);
  const [currentLocation, setCurrentLocation] = useState();

  useEffect(() => {
    // const fetchVideos = async () => {
    //   fetch(`/api/videos/`)
    //     .then((response) => response.json())
    //     .then((data) => {
    //       if (data !== undefined && data !== null) {
    //         setVideos(data.items);
    //       } else {
    //         console.log("NO YouTube videos");
    //         setVideos(undefined);
    //       }
    //     });
    // };

    const getCurrentLocation = () => {
      let location = window.location.pathname.split("/");
      setCurrentLocation(location[1]);
    };

    getCurrentLocation();
    // fetchVideos();
  }, []);

  return (
    <Router>
      <div className={`App ${currentLocation}`}>
        <NavBar />
        <div id="page-body">
          {/* <Context.Provider value={videos}> */}
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/blog/" element={<Blog />} />
            <Route path="/blog/:post" element={<BlogPost />} />
            {/* <Route path="/about" element={AboutPage}/>
            <Route path="/articles" element={ArticlesListPage}/>
            <Route path="/article/:name" element={ArticlePage}/>
            <Route path="/user/signup" element={SignUpPage}/>
            <Route path="/user/login" element={LoginPage}/>
            <Route path="/user/dashboard" element={UserDashboard}/> */}
            <Route path="/hubspot-form/" element={<NewsletterSignup />} />
            <Route path="/thank-you/:item" element={<ThankYouPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          {/* </Context.Provider> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
