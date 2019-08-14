import React, { Fragment } from 'react';
import imageLine from '../image/line.png';

export default function PartOfMenu({ menu }) {
  const menuElements = menu.map(element =>(
    <div className={element.className}>
      <h1>
        {element.name}
        <span className="price">{element.price}</span>
      </h1>
      <img src={imageLine} alt="line" />
      <p>{element.description}</p>
    </div>
));

  return (
    <Fragment>
      {menuElements}
    </Fragment>
  );
}
