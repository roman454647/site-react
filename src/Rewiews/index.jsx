import React from 'react';
import './style.scss';
import divSlider from '../image/Divslider.png';

function Rewiews() {
  return (
    <section id="rewiews" className="wrapper-rewiews">
      <div className="Rewiews" style={{ 'max-width': '900px' }}>
        <div className="rewiew">
          <h1>Guest Reviews</h1>
          <img src={divSlider} alt="slider" />
          <p>
            f you’ve been to one of our restaurants, you’ve seen – and
            <br />
            tasted – what keeps our customers coming back for more.
            <br />
            Perfect materials and freshly baked food, delicious Lambda
            <br />
            cakes, muffins, and gourmet coffees make us hard to resist!
            <br />
            Stop in today and check us out!
          </p>
          <h2 className="author">- food inc,New York</h2>
        </div>
      </div>
    </section>
  );
}

export default Rewiews;
