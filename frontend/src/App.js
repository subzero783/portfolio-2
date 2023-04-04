import React, { useState, useEffect, createContext } from "react";
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

import HubspotFormCSSJS from "./pages/NewsletterSignup/NewsletterSignup";

import "./App.scss";
import NewsletterSignup from "./pages/NewsletterSignup/NewsletterSignup";

export const Context = createContext();

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      fetch(`/api/videos/`)
        .then((response) => response.json())
        .then((data) => {
          if (data !== undefined && data !== null) {
            setVideos(data.items);
          } else {
            console.log("NO YouTube videos");
            setVideos(undefined);
          }
        });
    };
    fetchVideos();
  }, []);

  return (
    <Router>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Context.Provider value={videos}>
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:post" element={<BlogPost />} />
              {/* <Route path="/about" element={AboutPage}/>
            <Route path="/articles" element={ArticlesListPage}/>
            <Route path="/article/:name" element={ArticlePage}/>
            <Route path="/user/signup" element={SignUpPage}/>
            <Route path="/user/login" element={LoginPage}/>
            <Route path="/user/dashboard" element={UserDashboard}/> */}
              <Route path="/hubspot-form" element={<NewsletterSignup />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Context.Provider>
        </div>
      </div>
    </Router>
  );
}

export default App;
