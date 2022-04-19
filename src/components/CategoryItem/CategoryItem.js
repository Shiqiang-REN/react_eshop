import React from 'react';
import './CategoryItem.styles.scss'
import {Link} from 'react-router-dom';

const CategoryItem = (props) => {

  const { _id, name, img } = props
  return (
    <div className='category'>
      <div className='background-img' style={{ backgroundImage: `url(${img})`}}/>
      <div className='category-body'>
        <Link className='nav-link' to={`/shop/${_id}`}>
          <h2>{name}</h2>
          <p>Shop Now</p>
        </Link>
      </div>
    </div>
  );
}

export default CategoryItem;
