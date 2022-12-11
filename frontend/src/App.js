import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Blog from "./pages/Blog/Blog";
// import AboutPage from './pages/AboutPage';
// import ArticlesListPage from './pages/ArticlesListPage';
// import ArticlePage from './pages/ArticlePage';
// import SignUpPage from  './pages/SignUpPage';
// import LoginPage from  './pages/LoginPage';
// import UserDashboard from  './pages/UserDashboard';
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import NavBar from "./components/NavBar/NavBar";
import "./App.scss";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      fetch(`/api/videos/`)
        .then((response) => response.json())
        .then((data) => {
          setVideos(data.items);
        });
    };
    fetchVideos();
  }, []);

  return (
    <Router>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Routes>
            <Route
              exact
              path="/"
              element={<HomePage youtubeVideos={videos} />}
            />
            <Route path="/blog" element={<Blog youtubeVideos={videos} />} />
            {/* <Route path="/about" element={AboutPage}/>
            <Route path="/articles" element={ArticlesListPage}/>
            <Route path="/article/:name" element={ArticlePage}/>
            <Route path="/user/signup" element={SignUpPage}/>
            <Route path="/user/login" element={LoginPage}/>
            <Route path="/user/dashboard" element={UserDashboard}/> */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
