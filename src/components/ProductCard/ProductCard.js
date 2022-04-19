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
        <h5 className='name'>{name}</h5>
        <h5 >${price}</h5>
      </div>
      <div className='buttons-container'>
        {/*<Button buttonType='inverted' onClick={() => {addItemToCart(product)}}>View</Button>*/}
        <Button buttonType='inverted' onClick={() => {addItemToCart(product)}}>Add</Button>
      </div>
    </div>
  );
};

export default ProductCard;