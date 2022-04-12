import {useContext} from 'react';
import {CartContext} from '../../context/CartContext';
import Button from '../Button/Button';
import './ProductCard.styles.scss'
import {BASE_URL} from '../../config';

const ProductCard = ({ product }) => {
  const { name, price, imgs } = product

  const { addItemToCart } = useContext(CartContext)

  return (
    <div className='product-card-container'>
      {
        imgs.map( (img, index) => {
          return <img key={index} src={`${BASE_URL}/upload/`+img} alt="img"/>
        })
      }
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button buttonType='inverted' onClick={() => {addItemToCart(product)}}>Add to card</Button>
    </div>
  );
};

export default ProductCard;