import { useContext } from 'react';

import { CartContext } from '../../context/CartContext';
import './CheckoutItem.scss'
import {BASE_URL} from '../../config';


const CheckoutItem = ({ cartItem }) => {
  const { name, imgs, price, quantity } = cartItem;

  const { clearItemFromCart, addItemToCart, removeItemToCart } =
    useContext(CartContext);

  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={`${BASE_URL}/upload/${imgs[0]}`} alt={`${name}`} />
      </div>
      <span className='name'> {name} </span>
      <span className='quantity'>
        <div className='arrow' onClick={() => {removeItemToCart(cartItem)}}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => {addItemToCart(cartItem)}}>
          &#10095;
        </div>
      </span>
      <span className='price'> {price}</span>
      <div className='remove-button' onClick={() => {clearItemFromCart(cartItem)}}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;