import React from 'react';
import './style.scss';
import btnBlack from '../image/button-black.png';
import btnWhite from '../image/Button White.png';


function Promo() {
  return (
    <section className="promo">
      <h1>
        the right ingredients
        <br />
        for the right food
      </h1>

      <div className="buttons">
        <input
          type="image"
          className="white"
          name="imgbtn"
          src={btnBlack}
          alt="image_button_black"
        />
        <input
          type="image"
          className="black"
          name="imgbtn2"
          src={btnWhite}
          alt="img_white_button"
        />
      </div>
    </section>
  );
}

export default Promo;
