import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import SectionProduct from './section.js';

class FeaturedProducts extends Component{
  render(){
    return(
      <div className = "featured-products">
        <h1>Featured Products</h1>
        <h3>Check out some of our favorite listings</h3>

        <SectionProduct data = {this.props.data} />

        <Link to = "/all-products" className = "allProducts">All Products</Link>
      </div>
    )
  }
}

export default FeaturedProducts;
