import React, {useContext} from 'react';
import {Link, Outlet} from 'react-router-dom';
import {UserContext} from '../../context/UserContext';
import {ReactComponent as Logo} from '../../assets/images/logo.svg'
import './Navigation.styles.scss'
import {CartContext} from '../../context/CartContext';
import CartIcon from '../../components/CartIcon/CartIcon';
import CartDropdown from '../../components/CartDropdown/CartDropdown';

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext)
  const { isCartOpen  } = useContext(CartContext)

  const signOutHandler = async () => {
    localStorage.removeItem('token')
    setCurrentUser(null);
  }

  return (
    <>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <Logo className='logo'/>
        </Link>
        <Link to='/'>
          <h1>EasyShop</h1>
        </Link>
        <div className='nav-links'>
          <Link className='nav-link' to='/shop/products'>Shop</Link>
          {currentUser? (
            <div>
              <span>Hi, {currentUser.displayName}</span>
              <span className='nav-link' onClick={signOutHandler}>
              Sign Out
            </span>
            </div>
          ):(
            <Link className='nav-link' to='/auth'>
              Sign in
            </Link>
          )}
          <CartIcon/>
          {isCartOpen && <CartDropdown />}
        </div>
      </div>
      <Outlet/>
    </>
  )
}

export default Navigation;
