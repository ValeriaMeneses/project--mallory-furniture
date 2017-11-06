import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav1 from './nav1.js'
import Nav2 from './nav2.js'
import logo from '../../images/mf-logo-white.svg'
import ShoppingCart from './ShoppingCart/shoppingCart.js'

class NavMenu extends Component {
  render(){
    return(
      <header>
        <img src={logo} />
        <Nav1 />
        <Nav2 />
        <ShoppingCart />
      </header>
    )
  }
}

export default NavMenu
