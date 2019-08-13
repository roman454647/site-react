import React from 'react';
import './style.scss';
import menuDivider from '../image/menu-divider.png';
import SalatList from './SalatList';
import StarterList from './StartersList';
import AppetisersList from './AppetisersList';
import MainList from './MainList';
import PartOfMenu from '../PartOfMenu';

const Menu = () => (
  <section id="menu" className="wrapper-menu">
    <div className="section-menu">
      <div className="left-part">
        <div className="appetisers">
          <h1 className="title">Appetisers</h1>
          <img className="divider3" src={menuDivider} alt="divider3" />
          <PartOfMenu menu={SalatList} />
        </div>

        <div className="Salads">
          <h1 className="title">Salads</h1>
          <img className="divider3" src={menuDivider} alt="divider3" />
          <PartOfMenu menu={StarterList} />
        </div>
      </div>


      <div className="right-part">
        <div className="Starters">
          <h1 className="title">Starters</h1>
          <img className="divider3" src={menuDivider} alt="divider3" />
          <PartOfMenu menu={AppetisersList} />
        </div>

        <div className="Main-Dishes">
          <h1 className="title">Main Dishes</h1>
          <img className="divider3" src={menuDivider} alt="divider3" />
          <PartOfMenu menu={MainList} />

        </div>
      </div>
    </div>
  </section>
);


export default Menu;
