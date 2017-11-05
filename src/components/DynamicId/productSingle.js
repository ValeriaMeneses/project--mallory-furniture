import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

class ProductSingle extends Component{
  render(){
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
              <button>Add to Cart</button>
            </div>
          </div>
        </div>
      )
  }
}

export default ProductSingle;
