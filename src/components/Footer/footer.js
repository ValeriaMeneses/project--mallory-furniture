import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logoBlack from '../../images/mf-logo-black.svg'



class Footer extends Component{
  render(){
    return(
      <footer>
        <div className = "logo-black">
          <img src={logoBlack} />
        </div>

        <hr/>

        <div className = "secciones">
          <div className = "company">
            <h3>Company</h3>
            <nav>
            <Link to ="/">Home</Link>

              <Link to = "/about">About</Link>
              <Link to = "/terms&condition">Term+Conditions</Link>
            </nav>
          </div>

          <div className = "categories">
            <h3>Categories</h3>
            <nav>
              <Link to = "/category/seating">Seating</Link>
              <Link to = "/category/tables">Tables</Link>
              <Link to = "/category/desk">Desk</Link>
            </nav>
          </div>

          <div className = "social">
            <h3>Social</h3>
            <a href = "#"><i className ="fa fa-instagram"></i></a>
            <a href = "#"><i className ="fa fa-twitter"></i></a>
            <a href = "#"><i className ="fa fa-pinterest"></i></a>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
