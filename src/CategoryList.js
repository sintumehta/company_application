import React, { Component } from 'react';
import './App.css';

// Import Bootstrap CSS and JS
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
export default class CategoryList extends Component {

  constructor(props) {
    super(props);
   
  }

  componentDidMount() {
  
  }

  render() {
    let {handleOnClickOnHeader}={...this.props};
    return (
      <React.Fragment>
         <div className="row" style={{padding:"10px"}}>
     <div className="col-12">
      <h1 className="text-center">Category Details</h1>
      <h5 className="text-center">A list of all the Category on the directory</h5>
        </div>
          <div className="col-12 offset-1">
            <div className="card-deck container"></div>
        <div className="row"> 
           <a href="#list" className="category-link" onClick={(e)=>handleOnClickOnHeader(e,"COMPANY_LIST")}>Category  list  1 </a>   
        </div>
         <div className="row"> 
         Category  list 2       
     </div>
     </div>
     </div>
     </React.Fragment>
    );
  }

}