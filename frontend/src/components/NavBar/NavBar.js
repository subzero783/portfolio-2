import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { homeNavBarLink } from "../../functions";
import Glitch from "../Glitch/Glitch";
import SocialMedia from "../SocialMedia/SocialMedia";
import "./NavBar.scss";

const check_window_innerwidth = () => {
  if (window.innerWidth < 991) {
    return "translate(0, -100%)";
  } else {
    return "";
  }
};

const burger_click = (e) => {
  if (window.innerWidth < 991) {
    document.getElementsByClassName("logo-and-nav-container")[0].classList.toggle("active");
  }
  document.getElementsByClassName("burger")[0].classList.toggle("burger--active");
  document.getElementById("tn-nav").classList.toggle("burger--active");
};

const onWindowResize = () => {
  document.getElementById("tn-nav").classList.remove("burger--active");
  document.getElementsByClassName("burger")[0].classList.remove("burger--active");
  document.getElementById("tn-nav").style.transform = check_window_innerwidth();
};
window.addEventListener("resize", onWindowResize);

window.onscroll = function () {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  if (scrolled > 50) {
    document.getElementById("navbar").classList.add("scrolled");
  } else {
    document.getElementById("navbar").classList.remove("scrolled");
  }
};

const on_window_page_scroll = () => {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  if (scrolled > 50) {
    document.getElementById("navbar").classList.add("scrolled");
  } else {
    document.getElementById("navbar").classList.remove("scrolled");
  }
};

const NavBar = () => {
  const navbar_link_click = (e) => {
    if (window.innerWidth < 991) {
      document.getElementsByClassName("burger")[0].classList.toggle("burger--active");
      document.getElementById("tn-nav").classList.toggle("burger--active");
    }
  };

  window.addEventListener("scroll", on_window_page_scroll);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, []);

  return (
    <div id="navbar">
      <div className="container">
        <div className="logo-and-burger-container">
          <div className="extra"></div>
          <div className="top-logo-container">
            <div id="top-logo" data-aos="fade-right">
              <Glitch className="main-logo" text="G" />
            </div>
          </div>
          <div className="burger" onClick={burger_click}>
            <div className="burger__patty"></div>
          </div>
        </div>
        <div className="logo-and-nav-container">
          <div id="top-logo" data-aos="fade-right">
            <Glitch className="main-logo" text="G" />
          </div>
          <nav
            data-aos="fade-left"
            id="tn-nav"
            style={{
              transform: check_window_innerwidth(),
            }}>
            <ul>
              <li>
                <a href="/" onClick={homeNavBarLink}>
                  Home
                </a>
              </li>
              <li>
                <a onClick={navbar_link_click} href="/#developer-gus">
                  Videos
                </a>
              </li>
              <li>
                <a onClick={navbar_link_click} href="/blog">
                  Blog
                </a>
              </li>
              <li>
                <a onClick={navbar_link_click} href="/#about">
                  About
                </a>
              </li>
              <li>
                <a onClick={navbar_link_click} href="/#recent-projects">
                  Portfolio
                </a>
              </li>
              <li>
                <a onClick={navbar_link_click} href="/#services">
                  Services
                </a>
              </li>
              <li>
                <a onClick={navbar_link_click} href="/#contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <SocialMedia />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
