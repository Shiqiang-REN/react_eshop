import React from 'react';
import './CategoryItem.styles.scss'

const CategoryItem = (props) => {

  const { title, imageUrl } = props
  return (
    <div className='category'>
      <div className='background-img' style={{ backgroundImage: `url(${imageUrl})`}}/>
      <div className='category-body'>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
}

export default CategoryItem;
