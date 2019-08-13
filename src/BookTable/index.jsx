import React from 'react';
import './style.scss';
import image3 from '../image/image3.png';
import image4 from '../image/image4.png';
import divider4 from '../image/Divider4.png';
import bookNow from '../image/Book now.png';

export default () => (
  <section id="book" className="book-wrapper">
    <div className="book-form">
      <div className="left-side">
        <img src={image3} alt="nuts with cherry" />
        <img src={image4} alt="meat with rise" />
      </div>
      <div className="right-side">
        <h1>Just the right food</h1>
        <img src={divider4} alt="divider" />
        <p>
          If you’ve been to one of our restaurants, you’ve seen – and tasted
          <br />
          – what keeps our customers coming back for more.
          <br />
          Perfect materials and freshly baked food.
        </p>

        <p>
          <br />
          Delicious Lambda cakes, muffins, and gourmet coffees make
          <br />
          us hard to resist! Stop in today and check us out! Perfect
          <br />
          materials and freshly baked food.
        </p>

        <form name="bookform" action="#" method="post">
          <div className="form-inputs">
            <div className="right-inputs">
              <label htmlFor="name">
                Name
                <input type="text" placeholder="Name*" id="name" />
              </label>
              <label htmlFor="email">
                Email address
                <input type="text" placeholder="Email adress" id="email" />
              </label>
            </div>
            <div className="left-inputs">
              <label htmlFor="date">
                Date
                <input type="date" placeholder="Date" id="date" />
              </label>
              <label htmlFor="party-numbers">
                Party Numbers
                <input
                  type="text"
                  placeholder="Party Numbers*"
                  id="party-numbers"
                />
              </label>
            </div>
          </div>
          <div className="button-block">
            <input
              type="image"
              src={bookNow}
              value="Book now!"
              alt="book now button"
            />
          </div>
        </form>
      </div>
    </div>
  </section>
);
