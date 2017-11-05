import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import ProductSingle from './productSingle.js'

class DynamicId extends Component{
  render(){
    let Id = this.props.match.params.id
    let single = this.props.data.filter(element =>{
      return element._id === Id
    })
     .map(function(find){
       return  <ProductSingle img = {find.imageLink} item = {find.item} price = {find.price} condition = {find.condition} width = {find.width} length = {find.length} height = {find.height}/>
     })

    return(
        <div>
        <br/>
          {single}
        </div>
    )
  }
}

export default DynamicId;
