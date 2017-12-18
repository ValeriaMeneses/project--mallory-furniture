import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

class ProductSingle extends Component{
  constructor(){
    super()
    this.state = {
      send: false
    }
        this.sendProduct = this.sendProduct.bind(this);
  }
  sendProduct = function () {
    if (this.state.send === false) {
      this.setState({
        send: true
      })
    }else {
      this.setState({
        send: false
      })
    }
    // console.log(this.state.send);
  }
  render(){
    if (this.state.send === true) {
      // console.log(this.props);
    }
    return(
        <div className = "productSingle">
          <img src = {this.props.img} />
          <div className = "cuadroDeInformacion">
            <div className = "itemProdutc">
              <h2>{this.props.item} </h2>
              <span>$ {this.props.price}</span>
            </div>
            <hr/>
            <div className = "conditionAndMeasurements">
              <div className = "condition">
                <p>Condition</p>
                <span>{this.props.condition}</span>
              </div>
              <div className = "measurements">
                <p>Measurements</p>
                <span>W:{this.props.width}  </span>
                <span>L:{this.props.length}  </span>
                <span>H:{this.props.height}</span>
              </div>
              <button onClick = {this.sendProduct}>Add to Cart</button>
            </div>
          </div>
        </div>
      )
  }
}

export default ProductSingle;
