import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

class ProductSingle extends Component{
  render(){
    return(
        <div className = "productSingle">
          <img src = "https://mallory-furniture-static.now.sh/product-images/dining-table-1.jpg" />
          <div className = "cuadroDeInformacion">
            <div className = "itemProdutc">
              <h2>Development server has disconnected </h2>
              <span>$ 3200</span>
            </div>
            <hr/>
            <div className = "conditionAndMeasurements">
              <div className = "condition">
                <p>Condition</p>
                <span>Very good</span>
              </div>
              <div className = "measurements">
                <p>Measurements</p>
                <span>FF33FFF555J</span>
              </div>
              <button>Add to Cart</button>
            </div>
          </div>
        </div>
      )
  }
}

class DynamicId extends Component{
  render(){
    const Id = this.props.match.params.id;
    let producto  = this.props.data



    let mapOfar = this.props.data.map(function (element) {
      console.log(element);
      return element
    })
    function extractProduct(element) {
      console.log('-----------------------------');
      console.log(element._id);
      console.log('++++++++++++++++++');
    }

    const Prod = producto.filter(extractProduct);
    console.log('==================================');
    console.log(Prod);

    return(
        <div>
        <br/>
          {Id}
          <ProductSingle />
          <p>hi</p>
        </div>
    )
  }
}

export default DynamicId;
