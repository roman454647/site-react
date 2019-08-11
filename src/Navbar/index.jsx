import React from 'react';
import './style.scss';
import logo from '../image/Logo.png';
import navbarList from '../navbarList';


function Navbar() {
  const navbarL = navbarList.map(navlist => (
    <a key={navlist.key} href={navlist.page_name}>{navlist.name}</a>
  ));

  return (
    <header>
      <div className="header_logo">
        <img src={logo} alt="header_logo1" />
      </div>
      <nav>
        <div id="navig" className="navigation">
          {navbarL}
          <a href="facebook.com" id="navbar" className="icon">
            &#9776;
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
