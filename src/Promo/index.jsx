import React from 'react';
import './style.scss';
import btnBlack from '../image/button-black.png';
import btnWhite from '../image/Button White.png';

const Promo = () => (
  <section className="promo">
    <h1>
      the right ingredients
      <br />
      for the right food
    </h1>

    <div className="buttons">
      <input
        type="image"
        className="book-table"
        name="book-table"
        src={btnBlack}
        alt="book-table"
      />
      <input
        type="image"
        className="see-the-menu"
        name="see-the-menu"
        src={btnWhite}
        alt="see-the-menu"
      />
    </div>
  </section>
);

export default Promo;
