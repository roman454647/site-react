import React from 'react';
import './style.scss';
import image5 from '../image/image5.png';
import icons from '../image/icons-foo.png';

function Footer() {
  return (
    <footer id="footer">
      <div className="info">
        <div className="About">
          <h1>About Us</h1>
          <img src={image5} alt="im5" />
          <p>
            Lambdas new and expanded Chelsea location
            <br />
            epresents a truly authentic Greek patisserie,
            <br />
            featuring breakfasts of fresh croissants and
            <br />
            steaming bowls of café.
            <br />
            Lamda the best restaurant in town
          </p>
        </div>
        <div className="open">
          <h1>Opening Hours</h1>
          <img src={image5} alt="im5" />
          <p>
            <span>Mon-Thu</span>
            7:00am-8.00pm
          </p>
          <p>
            <span>Fri-Sun</span>
            7:00am-10.00pm
          </p>
        </div>
        <div className="Our-Location">
          <h1>Our Location</h1>
          <img src={image5} alt="im5" />
          <p>
            19th Paradise Street Sitia
            <br />
            128 Meserole Avenue
          </p>
          <img src={icons} alt="if" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
