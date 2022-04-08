import React, {Fragment} from 'react';
import {Link, Outlet} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/images/logo.svg'
import './Navigation.styles.scss'

const Navigation = () => {
  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <Logo className='logo'/>
        </Link>
        <div className='nav-links'>
          <Link className='nav-link' to='/shop'>Shop</Link>
          <Link className='nav-link' to='/signIn'>Sign In</Link>
        </div>
      </div>
      <Outlet/>
    </Fragment>
  );
}

export default Navigation;
