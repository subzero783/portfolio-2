import React from 'react';
import {Link} from 'react-router-dom';
import Glitch from '../Glitch/Glitch';
import './NavBar.scss';

const burger_click = (e) => {
  document.getElementsByClassName("burger")[0].classList.toggle("burger--active");
  document.getElementById("tn-nav").classList.toggle('burger--active');
}

const navbar_link_click = (e) => {
  if(window.innerWidth < 768){
    document.getElementsByClassName("burger")[0].classList.toggle("burger--active");
    document.getElementById("tn-nav").classList.toggle('burger--active');
  }
}

const onWindowResize = () => {
  document.getElementById("tn-nav").classList.remove('burger--active');
  document.getElementsByClassName("burger")[0].classList.remove("burger--active");
};
window.addEventListener('resize', onWindowResize);

const page_scroll = () => {
  window.onscroll = function() {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if(scrolled > 50){
      document.getElementById("navbar").classList.add("scrolled");
    }else{
      document.getElementById("navbar").classList.remove("scrolled");
    }
  };
}
page_scroll();

export default function NavBar(){

  return(
    <div id="navbar">
      <div className="container">
        <div className="logo-and-burger-container">
          <div id="top-logo">
            <Glitch className="main-logo" text="G" />
          </div>
          <div className="burger" onClick={burger_click}>
            <div className="burger__patty"></div>
          </div>
        </div>
        <div className="logo-and-nav-container">
          <div id="top-logo">
            <Glitch className="main-logo" text="G" />
          </div>
          <nav id="tn-nav">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <a
                  onClick={navbar_link_click}
                  href='#about'>About</a>
              </li>
              <li>
                <a
                  onClick={navbar_link_click}
                  href='#portfolio'>Portfolio</a>
              </li>
              <li>
                <a
                  onClick={navbar_link_click}
                  href='#services'>Services</a>
              </li>
              <li>
                <a href='#experience'>Experience</a>
              </li>
              <li>
                <a href='#skills'>Skills</a>
              </li>
              <li>
                <a href='#contact'>Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );

}