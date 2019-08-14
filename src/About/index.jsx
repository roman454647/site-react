import React from 'react';
import './style.scss';
import { cookImg, divider, dish } from '../variables/export-img';

const About = () => (
  <section id="about" className="wrapper-about">
    <div className="section-about">
      <div className="about-left">
        <h1>Just the right food</h1>
        <img className="divider" src={divider} alt="divider" />
        <p>
          If you’ve been to one of our restaurants, you’ve seen – and
          <br />
          tasted – what keeps our customers coming back for more.
          <br />
          Perfect materials and freshly baked food, delicious Lambda
          <br />
          cakes, muffins, and gourmet coffees make us hard to resist!
          <br />
          Stop in today and check us out!
        </p>
        <img className="cook" src={cookImg} alt="cook" />
      </div>
      <div className="about-right">
        <img className="dish-plate" src={dish} alt="dish" />
      </div>
    </div>
  </section>
);

export default About;
