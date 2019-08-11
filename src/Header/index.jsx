import React from 'react';
import Navbar from '../Navbar';
import Promo from '../Promo';
import './style.scss';

const Header = () => (
  <section id="home" className="container-home">
    <Navbar />
    <Promo />
  </section>
);


export default Header;
