import React,{useRef} from 'react';
import {Link} from 'react-router-dom';
import Glitch from '../Glitch/Glitch';
import './NavBar.scss';

const burger_click = (e) => {
  document.getElementsByClassName("burger")[0].classList.toggle("burger--active");
  document.getElementById("tn-nav").classList.toggle('burger--active');
}

function navbar_link_click_on_mobile(){
  // Add event listener for each list item link in the navbar unordered list on mobile. 
  // When a link in the unordered list is clicked, the burger menu is closed. 
  // This is done by adding the class "burger--active" to the burger menu.
  var navbar_links = document.getElementsByClassName("navbar__link");
  for(var i = 0; i < navbar_links.length; i++){
    navbar_links[i].addEventListener("click", function(){
      document.getElementsByClassName("burger")[0].classList.toggle("burger--active");
      document.getElementById("tn-nav").classList.toggle('burger--active');
    });
  }
}
navbar_link_click_on_mobile();


function page_scroll(){
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
                <a className="navbar__link" href='#about'>About</a>
              </li>
              <li>
                <a className="navbar__link" href='#portfolio'>Portfolio</a>
              </li>
              <li>
                <a className="navbar__link" href='#services'>Services</a>
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