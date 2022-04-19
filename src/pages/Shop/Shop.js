import './Shop.styles.scss'
import Products from '../../components/Products/Products';
import {useEffect, useState} from 'react';
import {reqProductList, reqProductsByCategory} from '../../api';
import {useParams} from 'react-router-dom';


const Shop = () => {

  const [products, setProducts] = useState([])

  const { categoryId } = useParams()

  useEffect(() => {
    fetchProducts(1,1)
  }, [categoryId])

  const fetchProducts = async (pageNum, pageSize) => {
    let result = []
    if (categoryId === 'products'){
      result = await reqProductList(pageNum, pageSize)
    }else{
      result = await reqProductsByCategory(categoryId, pageNum, pageSize)
    }
    const {status, data} = result
    if(status === 0){
      setProducts([...products, ...data.list])
    }
  }


  const handleLoadMoreProducts = () => {
    fetchProducts(1,5)
  }

  return (
    <>
      <Products products={products}/>
      <div className='loading-container'>
        <button className='btn loading-button' onClick={handleLoadMoreProducts}>Show More Items</button>
      </div>
    </>
  )
}

export default Shop;
