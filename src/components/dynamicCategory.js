import React, { Component } from 'react';

import imgSeating from '../images/category-seating.png'

class Seating extends Component{
  render(){
    return(
      <div className = "tituloOfCategories">
        <img src = {imgSeating}/>
        <h1>Seating</h1>
        <h3>All seating products</h3>
      </div>
    )
  }
}
class DynamicCategory extends Component {
  render() {
    const Type = this.props.match.params.type;

    return (
      <div>

        <Seating />
        {Type}
      </div>)
  }
}

export default DynamicCategory;
