// import React, { Component } from 'react';
// import request from 'superagent';
// import { Switch, Route, Link } from 'react-router-dom';
//
// import ContainerOfProducts from './containerProducts.js'
//
//
// class AllProducts extends Component{
//   componentWillMount = () => {
//     request
//       .get('https://mallory-furniture-admin.now.sh/api/v1/products')
//       .then(data => {
//         console.log(data.body);
//         this.setState({
//           products: data.body
//         })
//       })
//   }
//
//   constructor() {
//     super();
//
//     this.state = {
//       products: [],
//       show:'all'
//
//   }
// }
//   _changeList =(val)=>{
//     this.setState({
//           show: val
//         })
//   }
//   render(){
//     // let filtro = this.state.products.filter(function(sale){
//     //   if (this.state.show === "all") return true;
//     //   if (sale.onSale === true) return true;
//     //   if (name.onSale === false) return true;
//     //   console.log('=====================');
//     //   console.log(sale);
//     // })
//
//     if (this.state.products.length > 0) {
//       let items = this.state.products.map(function (element) {
//         // console.log(element);
//         return <ContainerOfProducts img={element.imageLink} pTexto = {element.item} price = {element.price} />
//       });
//       return (
//         <div className = "all">
//
//           <div className = "buttonAllSale">
//             <h1>All Products</h1>
//             <h3>All available listings</h3>
//             <span className="alinear">
//                 <button className = "allItems" >All Items</button>
//                 <button className = "onSale" >On Sale</button>
//                 <div className = "count">
//                   <p><span className = "numero">{this.state.products.length}</span> items showing</p>
//                 </div>
//             </span>
//           </div>
//           <div className = "featuredApi">
//             {items}
//           </div>
//         </div>
//       )
//     } else {
//       return <p>Loading users...</p>
//     }
//   }
// }
// export default AllProducts
