import React from "react";

const Header: React.FC = () => {
  return (
    <header id="header">
      <h1 className="site-title">
        <a href="index.html">
          <img src="img/logo.svg" alt="My Work" />
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
              <img className="icon" src="./img/icon-instagram.png" alt="Instagram" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
