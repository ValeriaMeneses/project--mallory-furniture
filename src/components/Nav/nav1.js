import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav1 extends Component {
  render(){
    return(
      <nav className= "nav1">
        <Link to ="/">Home</Link>
        <Link to ="/about">About</Link>
        <Link to ="/terms&condition">Term+Conditions</Link>
      </nav>
  )
  }
}

export default Nav1
