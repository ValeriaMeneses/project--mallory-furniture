import React, { Component } from 'react';

import ContainerOfProducts from './containerProducts.js'

import imgSeating from '../images/category-seating.png'
import imgTables from '../images/category-tables.png'
import imgDesks from '../images/category-desks.png'
import imgStorage from '../images/category-storage.png'
import imgBedroom from '../images/category-bedroom.png'
import imgMisc from '../images/category-miscellaneous.png'




class Category extends Component{
  render(){
    if (this.props.type === 'seating')
      return(
        <div className = "tituloOfCategories">
          <img src = {imgSeating}/>
          <h1>Seating</h1>
          <h3>All seating products</h3>
        </div>
      )

    if (this.props.type === 'tables')
      return(
        <div className = "tituloOfCategories">
          <img src = {imgTables}/>
          <h1>Tables</h1>
          <h3>All tables products</h3>
        </div>
      )
    if (this.props.type === 'desks')
      return(
        <div className = "tituloOfCategories">
          <img src = {imgDesks}/>
          <h1>Desks</h1>
          <h3>All desks products</h3>
        </div>
      )
    if (this.props.type === 'storage')
      return(
        <div className = "tituloOfCategories">
          <img src = {imgStorage}/>
          <h1>Storage</h1>
          <h3>All storage products</h3>
        </div>
      )
    if (this.props.type === 'bedroom')
      return(
        <div className = "tituloOfCategories">
          <img src = {imgBedroom}/>
          <h1>Bedroom</h1>
          <h3>All bedroom products</h3>
        </div>
      )
    if (this.props.type === 'miscellaneous')
      return(
        <div className = "tituloOfCategories">
          <img src = {imgMisc}/>
          <h1>Miscellaneous</h1>
          <h3>All miscellaneous products</h3>
        </div>
      )
  }
}
class DynamicCategory extends Component {
  render() {
    const Type = this.props.match.params.type;
    let category = this.props.data.filter(element => {
      return element.category === Type
    })
    .map(function(element){
      return <ContainerOfProducts id = {element._id} img ={element.imageLink} pTexto = {element.item} price = {element.price} />
    })

    return (
      <div>

      <div className = "buttonAllSale">
          <Category type = {this.props.match.params.type} />
          <span className="alinear">
              <button className = "allItems" >All Items</button>
              <button className = "onSale" >On Sale</button>
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
