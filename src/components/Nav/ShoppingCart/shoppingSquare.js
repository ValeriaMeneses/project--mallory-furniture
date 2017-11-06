import React, { Component } from 'react';

class ShoppingSquare extends Component {
  handleClick(){
    console.log('hi');
  }
  render(){
    return(
      <div className = "shoppingCart">
        <div className = "yourCart">
          <button className = "remove" onClick = {this.handleClick}><i className="fa fa-remove"></i></button>
          <h2>Your Cart</h2>
        </div>
        <div className = "cartContainer">
          <div className = "noItems">
            No Items Cart
          </div>
          <div className = "squareOfProduct">
            <button><i className="fa fa-remove"></i></button>
            <img src="https://mallory-furniture-static.now.sh/product-images/home-desk-3.jpg" />
            <p>Mid Century Modern Small Schoolroom Style Desk</p>
            <span>$ 700</span>
          </div>
        </div>
      </div>
    )
  }
}

export default ShoppingSquare
