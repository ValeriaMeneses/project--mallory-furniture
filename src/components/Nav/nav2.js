import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav2 extends Component {
  render(){
    return(
      <nav className = "nav2">
        <Link to ="/category/seating">Seating</Link>
        <Link to ="/category/tables">Tables</Link>
        <Link to ="/category/desks">Desk</Link>
        <Link to ="/category/storage">Storage</Link>
        <Link to ="/category/bedroom">Bedroom</Link>
        <Link to ="/category/miscellaneous">Misc</Link>
      </nav>
    )
  }
}

export default Nav2
