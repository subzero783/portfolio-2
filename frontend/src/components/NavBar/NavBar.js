import React,{useRef} from 'react';
import {Link} from 'react-router-dom';
import './NavBar.scss';


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

  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };

  return(
    <div id="navbar">
      <div className="container">
        <div id="top-logo">
          <p className="main-logo">G</p>
        </div>
        <nav id="tn-nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href='#about'>About</a>
            </li>
            <li>
              <a href='#portfolio'>Portfolio</a>
            </li>
            <li>
              <a href='#services'>Services</a>
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
  );

}