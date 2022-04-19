import { useContext } from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/images/cart.svg';

import { CartContext } from '../../context/CartContext';

import './CartIcon.scss';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartItemCount } = useContext(CartContext)

  const toggleIsCartOpen = (e) => {
    e.stopPropagation()
    setIsCartOpen(!isCartOpen)
  }

  return (
    <div id='cart' className='cart-icon-container' onClick={toggleIsCartOpen}>
      <ShoppingIcon id='cart-icon' className='shopping-icon' />
      <span id='cart-count' className='item-count'>{cartItemCount}</span>
    </div>
  );
};

export default CartIcon;