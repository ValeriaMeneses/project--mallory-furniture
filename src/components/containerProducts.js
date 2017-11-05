import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import request from 'superagent';
import DynamicId from './DynamicId/dynamicId.js';





class ContainerOfProducts extends Component{
  render(){
    let idProduct = "/product/" + this.props.id
    return(
      <Link to = {idProduct}  className = "containerOfproducts">
        <img src = {this.props.img} href = "imageLink" />
        <div>
          <p>{this.props.pTexto}</p>
          <span className = "price">$ {this.props.price}</span>
        </div>
      </Link>
    )
  }
}

export default ContainerOfProducts
