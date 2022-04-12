import ProductCard from '../../components/ProductCard/ProductCard';
import './Shop.styles.scss'
import {reqProductList} from '../../api';
import {useEffect, useState} from 'react';

const Shop = () => {

  const [products, setProducts] = useState([])
  useEffect(() => {
    fetchProducts(1,10)
  }, [])

  const fetchProducts = async (pageNum, pageSize) => {
    let result = await reqProductList(pageNum, pageSize)
    const {status, data} = result
    if(status === 0){
      setProducts(data.list)
    }
  }

  const handleLoadMoreProducts = () => {

  }

  return (
    <>
      <div className='products-container'>
        {products.map( (product) => {
          return <ProductCard key={product._id} product={product} />
        })}
      </div>
      <div className='loading-container'>
        <button className='btn loading-button' onClick={handleLoadMoreProducts}>Show More Items</button>
      </div>
    </>
  )
}

export default Shop;
