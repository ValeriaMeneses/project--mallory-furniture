import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import ContainerOfProducts from '../containerProducts.js';

class SectionProduct extends Component{
  render(){
    let arrayOf6 = this.props.data
    let prac = function () {
      if (arrayOf6.length > 0 ) {
        let newAr = arrayOf6.map(function (element, i) {
          return <ContainerOfProducts key= {i} id = {element._id} img ={element.imageLink} pTexto = {element.item} price = {element.price} />

        }).slice(0, 6)
        return newAr
      } else {
        return <h4> LOADING PRODUCTS...</h4>
      }
    }



    return(
      <div className = "featuredApi">
        {prac()}
      </div>
    )
  }
}
export default SectionProduct
