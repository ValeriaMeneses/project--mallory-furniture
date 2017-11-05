import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import request from 'superagent';

import './App.css';
import NavMenu from './components/Nav/navMenu.js';
import Footer from './components/Footer/footer.js';

import Home from './components/Home/home.js';
import About from './components/about.js';
import TermsConditions from './components/termsConditions.js';
import AllProducts from './components/allProducts.js';
import DynamicCategory from './components/dynamicCategory.js';
import DynamicId from './components/DynamicId/dynamicId.js';


// <Route path="/product/:id" component={DynamicId} />

class App extends Component {
    componentWillMount = () => {
      request
        .get('https://mallory-furniture-admin.now.sh/api/v1/products')
        .then(data => {
          this.setState({
            products: data.body
          })
        })
    }

    constructor() {
      super();

      this.state = {
        products: []
    }
  }
  render() {
    return (
      <div className="App">
        <NavMenu />
        <br/><br/><br/><br/>
        <Switch>
          <Route exact path="/" render={(props) => (<Home {...props} data={this.state.products}/>)}/>
          <Route exact path="/about" component={About} />
          <Route exact path="/terms&condition" component={TermsConditions} />
          <Route exact path="/all-products" render={(props) => (<AllProducts {...props} data={this.state.products}/>)}/>
          <Route path="/product/:id" render={(props) => (<DynamicId {...props} data={this.state.products}/>)} />
          <Route path="/category/:type" render={(props) => (<DynamicCategory {...props} data={this.state.products}/>)} />

        </Switch>
        <hr/>
        <Footer />

      </div>
    );
  }
}

export default App;
