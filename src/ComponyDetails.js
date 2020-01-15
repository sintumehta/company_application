import React, { Component } from 'react';
import './App.css';

// Import Bootstrap CSS and JS
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
export default class ComponyDetails extends Component {

  constructor(props) {
    super(props);
   
  }

  componentDidMount() {
  
  }

  render() {
    let {title}= {...this.props.companyObjet.fields};
    return (<div className="container custom-container">
                  <div className="row"> 
                      <a style={{display: "flex",
    position: "absolute",
    right: "0px",padding:"2px" }} className="backBtnAlign btn-back" onClick={()=>this.props.onClickHandlerOnCompanyList(null,"BACK")}>Back</a>
                   </div>
                   <div className="row"> 
          <div className="col-sm-12"><h3><b>{this.props.companyObjet.fields.title}</b></h3></div>
                  <div className="col-sm-12"><p>{this.props.companyObjet.fields["BIG Description"]} </p></div>
           </div>
        </div>);
  }

}
