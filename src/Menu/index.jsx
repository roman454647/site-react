import React from 'react';
import './style.scss';
import menuDivider from '../image/menu-divider.png';
import imageLine from '../image/line.png';


function Menu() {
  return (
    <section id="menu" className="wrapper-menu">
      <div className="section-menu">
        <div className="left-part">
          <div className="appetisers">
            <h1 className="tittle">Appetisers</h1>
            <img
              className="divider3"
              src={menuDivider}
              alt="divider3"
            />

            <h1>
              Tzatsiki
              <span className="price">$3.99</span>
            </h1>
            <img src={imageLine} alt="line" />
            <p>Refreshing traditional cucumber and garlic yoghurt dip.</p>

            <h1>
              Aubergine_Salad
              <span className="price">$5.50</span>
            </h1>
            <img src={imageLine} alt="line" />
            <p>.Pureed eggplant, garlic, green pepper and tomato dip.</p>

            <h1>
              Aubergine Salad
              <span className="price">$5.25</span>
            </h1>
            <img src={imageLine} alt="line" />
            <p>Pureed eggplant, garlic, green pepper and tomato dip.</p>
          </div>

          <div className="Salads">
            <h1 className="tittle">Salads</h1>
            <img
              className="divider3"
              src={menuDivider}
              alt="divider3"
            />

            <h1>
              OLive Special
              <span className="price">$5.99</span>
            </h1>
            <img src={imageLine} alt="line" />
            <p>Refreshing traditional cucumber and garlic yoghurt dip.</p>

            <div className="special">
              <h2>special</h2>
              <h1>
                Greek Salad
                <span className="price">$5.50</span>
              </h1>
              <img src={imageLine} alt="line" />

              <p>Pureed eggplant, garlic, green pepper and tomato dip.</p>
            </div>

            <h1>
              Gusto Salad
              <span className="price">$5.25</span>
            </h1>
            <img src={imageLine} alt="line" />
            <p>Pureed eggplant, garlic, green pepper and tomato dip.</p>
          </div>
        </div>
        <div className="right-part">
          <div className="Starters">
            <h1 className="tittle">Starters</h1>
            <img
              className="divider3"
              src={menuDivider}
              alt="divider3"
            />

            <h1>
              Hamoul
              <span className="price">$3.99</span>
            </h1>
            <img src={imageLine} alt="line" />
            <p>Refreshing traditional cucumber and garlic yoghurt dip.</p>

            <h1>
              Spinach Pie
              <span className="price">$5.50</span>
            </h1>
            <img src={imageLine} alt="line" />
            <p>Pureed eggplant, garlic, green pepper and tomato dip.</p>
          </div>

          <div className="Main-Dishes">
            <h1 className="tittle">Main Dishes</h1>
            <img
              className="divider3"
              src={menuDivider}
              alt="divider3"
            />

            <h1>
              Cornish Mackerel
              <span className="price">$5.99</span>
            </h1>
            <img src={imageLine} alt="line" />
            <p>Refreshing traditional cucumber and garlic yoghurt dip.</p>

            <div className="special">
              <h2>special</h2>
              <h1>
                Roast Lamb
                <span className="price">$5.50</span>
              </h1>
              <img src={imageLine} alt="line" />
              <p>Pureed eggplant, garlic, green pepper and tomato dip.</p>
            </div>

            <h1>
              Fried Chicken
              <span className="price">$5.25</span>
            </h1>
            <img src={imageLine} alt="line" />
            <p>Pureed eggplant, garlic, green pepper and tomato dip.</p>

            <h1>
              Pastitsio
              <span className="price">$5.99</span>
            </h1>
            <img src={imageLine} alt="line" />
            <p>Refreshing traditional cucumber and garlic yoghurt dip.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Menu;
