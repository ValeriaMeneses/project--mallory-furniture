import React, { Component } from 'react';
import ShoppingSquare from './shoppingSquare.js'

class ButtonShopping extends Component {
  constructor(){
    super()
    this.state = {
      square: false
    }
        this.showSquare = this.showSquare.bind(this);
  }

  showSquare(){
    if (this.state.square === false) {
      this.setState({
        square: true
      })
    }
    else {
      this.setState({
        square: false
      })
    }
  }
  render(){
    if(this.state.square === true){
      return (
        <div>
          <button className = "Cart" onClick = {this.showSquare}><i className="fa fa-shopping-cart"></i></button>
          <ShoppingSquare />
        </div>
      )
    }
    return(
      <button className = "Cart" onClick = {this.showSquare}><i className="fa fa-shopping-cart"></i></button>
    )
  }
}

export default ButtonShopping
