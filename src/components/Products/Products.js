import ProductCard from '../ProductCard/ProductCard';

const Products = ({products}) => {



  return (
    <div>
      <div className='products-container'>
        {products.map( (product) => {
          return <ProductCard key={product._id} product={product} />
        })}
      </div>
    </div>
  );
}

export default Products;
