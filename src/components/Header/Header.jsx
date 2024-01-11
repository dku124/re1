import React from 'react';
import {Container} from "reactstrap";
import {NavLink, Link} from "react-router-dom";

import logo from '../../asset/images/res-logo.png'
import Login from './../../pages/Login';

const nav__links= [
  {
    display: 'Home',
    path: '/home'
  },
  {
    display: 'Foods',
    path: '/foods'
  },
  {
    display: 'Cart',
    path: '/cart'
  },
  {
    display: 'Contact',
    path: '/contact'
  }
]

const Header = () => {
  return (
    <Container>
      <header className="header d-flex align-items-center justify-content-between">
        <div className="logo">
          <img src={logo} alt="logo" />
          <h5>Tasty Treat</h5>
        </div>

        {/* ---Menu--- */}
        <div className="navigation  d-flex align-items-center gap-5">
          <div className="menu">
            {nav__links.map((item, key)=>(
              <NavLink to={item.path} key= {key}>
                {item.display}
              </NavLink>
            ))}
          </div>
        </div>

        {/* ---Nav Right--- */}
        <div className="nav_right d-flex align-items-center gap-3">
          <span className="cart_icon">
            <i class="ri-shopping-cart-line"></i>
            <span className="cart_badge">2</span>
          </span>
          <span className="user_icon">
            <Link to={Login}><i class="ri-user-line"></i></Link>
          </span>
          <span className="mobile_menu">
            <i class="ri-menu-line"></i>
          </span>
        </div>

      </header>
    </Container>
  );
};

export default Header;