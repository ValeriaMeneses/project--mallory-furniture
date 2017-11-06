import React, { Component } from 'react';
import request from 'superagent';
import { Switch, Route, Link } from 'react-router-dom';

import ContainerOfProducts from './containerProducts.js'

class AllProducts extends Component{
  constructor(){
    super()
    this.state = {
      visibleType: 'all'
    }
  }

  _handleClick(val){
    this.setState({
      visibleType: val
    })
  }

  render(){
    let estado = this.props.data
    let filter = estado.filter(element => {
      if (this.state.visibleType === 'all') return true
      if (this.state.visibleType === 'true'  &&  element.onSale === true) return true
    })
    .map(function(element){
      return <ContainerOfProducts id = {element._id} img ={element.imageLink} pTexto = {element.item} price = {element.price} />
    })
    
    return (
      <div className = "all">

        <div className = "buttonAllSale">
          <h1>All Products</h1>
          <h3>All available listings</h3>
          <span className="alinear">
              <button className = "allItems" onClick={ ()=>{this._handleClick('all') } } >All Items</button>
              <button className = "onSale" onClick={ ()=>{this._handleClick('true') } } >On Sale</button>
              <div className = "count">
                <p><span className = "numero">{filter.length}</span> items showing</p>
              </div>
          </span>
        </div>

        <div className = "featuredApi">
          {filter }
        </div>
      </div>
    )
  }
}

export default AllProducts
