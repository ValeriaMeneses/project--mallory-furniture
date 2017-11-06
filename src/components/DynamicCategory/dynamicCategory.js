import React, { Component } from 'react';

import ContainerOfProducts from '../containerProducts.js'
import Category from './category.js'

class DynamicCategory extends Component {
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

  render() {
    const Type = this.props.match.params.type;
    let category = this.props.data.filter(element => {
      if (element.category === Type  &&  this.state.visibleType === 'all') return true
      if (element.category === Type  &&  this.state.visibleType === 'true'  &&  element.onSale === true) return true

    })
    .map(function(element){
      return <ContainerOfProducts id = {element._id} img ={element.imageLink} pTexto = {element.item} price = {element.price} />
    })

    return (
      <div>

        <div className = "buttonAllSale">
          <Category type = {this.props.match.params.type} />
          <span className="alinear">
              <button className = "allItems" onClick={ ()=>{this._handleClick('all') } }>All Items</button>
              <button className = "onSale" onClick={ ()=>{this._handleClick('true') } }>On Sale</button>
              <div className = "count">
                <p><span className = "numero">{category.length}</span> items showing</p>
              </div>
          </span>
        </div>
        <div className = "featuredApi">
          {category}
        </div>
      </div>)
  }
}

export default DynamicCategory;
