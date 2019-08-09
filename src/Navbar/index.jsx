import React from 'react';
import './style.scss';
import logo from '../image/Logo.png';
import social from '../image/Social.png';

function Navbar() {
  return (
    <header>
      <div className="header_logo">
        <img src={logo} alt="header_logo1" />
      </div>
      <nav>
        <div id="navig" className="navigation">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#ingredients">Igredients</a>
          <a href="#menu">Menu</a>
          <a href="#rewiews">Reviews</a>
          <a href="#book">Reservations</a>
          <a href="#rewiews">
            <span className="span-logo">
              <img src={social} alt="social_icon" />
            </span>
          </a>

          <a href="facebook.com" id="navbar" className="icon">
            &#9776;
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
