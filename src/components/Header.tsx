import React from "react";
import logo from "../assets/logo.svg";
import InstagramIcon from "../assets/icon-instagram.png";

const Header: React.FC = () => {
  return (
    <header id="header">
      <h1 className="site-title">
        <a href="index.html">
          <img src={logo} alt="My Work" />
        </a>
      </h1>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#works">Works</a></li>
          <li><a href="#news">News</a></li>
          <li><a href="#contact">Contact</a></li>
          <li>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <img className="icon" src={InstagramIcon} alt="Instagram" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
