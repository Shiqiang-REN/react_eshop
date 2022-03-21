import React from 'react';
import CategoryItem from "../CategoryItem/CategoryItem";
import './CategoriesContainer.styles.scss'

const CategoriesContainer = ({categories}) => {
  return (
    <div className='categories'>
      {categories.map( (categoryItem) => <CategoryItem key={categoryItem.id} {...categoryItem} />
      )}
    </div>
  );
}

export default CategoriesContainer;
