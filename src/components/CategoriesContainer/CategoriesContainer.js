import React, {useEffect, useState} from 'react';
import CategoryItem from "../CategoryItem/CategoryItem";
import './CategoriesContainer.styles.scss'
import {categoriesImgs} from '../../mockData';
import {reqCategories} from '../../api';

const CategoriesContainer = () => {

  const [categories, setCategories] = useState([])
  useEffect(() => {
    fetchCategories()
  }, [])

  const fetchCategories = async () => {
    let result = await reqCategories()
    if (result.status === 0) setCategories(result.data)
  }

  return (
    <div className='categories'>
      {categories.map( (categoryItem, index) => {
        categoryItem.img = categoriesImgs[index]
        return <CategoryItem key={categoryItem._id} {...categoryItem} />
        }
      )}
    </div>
  );
}

export default CategoriesContainer;
