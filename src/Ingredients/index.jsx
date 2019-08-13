import React from 'react';
import './style.scss';
import divider1 from '../image/Divider1.png';
import bread from '../image/image.png';
import cari from '../image/image1.png';
import wheat from '../image/image2.png';

export default () => (
  <section id="ingredients" className="wrapper-ingredients">
    <div className="section-ingredients">
      <h1>Fine ingredient</h1>
      <div className="divider-wrapper">
        <img className="divider" src={divider1} alt="divider1" />
      </div>
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
      <div className="product-image">
        <img src={bread} alt="bread" />
        <img src={cari} alt="cari" />
        <img src={wheat} alt="wheat" />
      </div>
    </div>
  </section>
);
