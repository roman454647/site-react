import React from 'react';
import './style.scss';
import divider1 from '../image/Divider1.png';
import im from '../image/image.png';
import im1 from '../image/image1.png';
import im2 from '../image/image2.png';

function Ingredients() {
  return (
    <section id="ingredients" className="wrapper-ingredients">
      <div className="section-ingredients">
        <h1>Fine ingredient</h1>
        <img
          className="divider2"
          src={divider1}
          alt="divider1"
        />
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
        <div className="product_image">
          <img src={im} alt="im" />
          <img src={im1} alt="im1" />
          <img src={im2} alt="im2" />
        </div>
      </div>
    </section>
  );
}

export default Ingredients;
