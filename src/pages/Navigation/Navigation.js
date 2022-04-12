import React, {Fragment, useContext} from 'react';
import {Link, Outlet} from 'react-router-dom';
import {UserContext} from '../../context/UserContext';
import { signOutUser } from '../../utils/firebase'
import {ReactComponent as Logo} from '../../assets/images/logo.svg'
import './Navigation.styles.scss'
import {CartContext} from '../../context/CartContext';
import CartIcon from '../../components/CartIcon/CartIcon';
import CartDropdown from '../../components/CartDropdown/CartDropdown';

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext)
  const { isCartOpen, setIsCartOpen  } = useContext(CartContext)

  const signOutHandler = async () => {
    // await signOutUser();
    localStorage.removeItem('token')
    setCurrentUser(null);
  }

  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <Logo className='logo'/>
        </Link>
        <div className='nav-links'>
          <Link className='nav-link' to='/shop'>Shop</Link>
          {currentUser? (
            <span className='nav-link' onClick={signOutHandler}>
              Sign Out
            </span>
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
    </Fragment>
  );
}

export default Navigation;
