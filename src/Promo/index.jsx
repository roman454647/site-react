import React from 'react';
import './style.scss';

const Promo = () => (
  <section className="promo">
    <h1>
      the right ingredients
      <br />
      for the right food
    </h1>

    <div className="buttons">
      <button
        type="button"
        className="book-table"
        name="book-table"
        alt="book-table"
      >
      Book table
      </button>
      <button
        type="button"
        className="see-all-dishes"
        name="see-all-dishes"
        alt="see-all-dishes"
      >
      See all dishes
      </button>
    </div>
  </section>
);

export default Promo;
