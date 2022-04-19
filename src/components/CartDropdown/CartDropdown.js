import {useContext} from 'react';
import {CartContext} from '../../context/CartContext';
import { useNavigate} from 'react-router-dom'
import Button from '../Button/Button';
import './CartDropdown.scss';
import {BASE_URL} from '../../config';


const CartDropdown = () => {
  const { cartItems } = useContext(CartContext)
  const navigate = useNavigate()
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {
          cartItems.length ? (
            cartItems.map( (item) => {
              const { _id, imgs, price, name, quantity } = item
              return (
                <div key={_id} className='cart-item-container'>
                  <img src={`${BASE_URL}/upload/${imgs[0]}`} alt={`${name}`} />
                  <div className='item-details'>
                    <span className='name'>{name}</span>
                    <span className='price'>{quantity} x ${price}</span>
                  </div>
                </div>
              )
            })
          ):(
            <span className='empty-message'>Your cart is empty</span>
          )
        }
      </div>
      <Button buttonType='inverted' onClick={() => {
        console.log('checkout')
        navigate('/checkout')
      }}>CHECKOUT</Button>
    </div>
  )
}

export default CartDropdown;