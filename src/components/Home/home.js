import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import Header from './header.js'
import FeaturedProducts from './featured.js'


class Home extends Component{
  render(){
    return(
      <div className = "home">
        <Header />
        <FeaturedProducts data = {this.props.data} />

        <div className = "browseCategories">
          <h1>Browse by Categories</h1>
          <h3>Explore by furniture type</h3>
          <div className = "botonesBrowse">
            <Link to ="/category/seating">Seating</Link>
            <Link to ="/category/tables">Tables</Link>
            <Link to ="/category/desk">Desk</Link>
            <Link to ="/category/storage">Storage</Link>
            <Link to ="/category/bedroom">Bedroom</Link>
            <Link to ="/category/misc">Misc</Link>
          </div>
        </div>

      </div>
    )
  }
}

export default Home
