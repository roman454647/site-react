import React from 'react';
import Navbar from '../Navbar';
import Promo from '../Promo';
import './style.scss';

function Header() {
  return (
    <section id="home" className="container">
      <Navbar />
      <Promo />
    </section>
  );
}

export default Header;
