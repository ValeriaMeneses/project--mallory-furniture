import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import request from 'superagent';
import DynamicId from './dynamicId.js';



class ContainerOfProducts extends Component{
  render(){
    let idProduct = "/product/" + this.props.id
    return(
      <Link to = {idProduct} key = {this.props._id} className = "containerOfproducts">
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
