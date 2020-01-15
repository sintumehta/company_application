import React, { Component } from 'react';
import './App.css';

// Import Bootstrap CSS and JS
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
class NavBar extends Component {

  constructor(props) {
    super(props);
     this.state={
       displayNavMenuFlag:false,
     }
  }

  componentDidMount() {
  
  }
  onChange=()=>{

  }
  render() {
    return (
     
        <div className="row"> 
        <NavBarCard handleOnClickOnHeader={this.props.handleOnClickOnHeader} displayNavMenuFlag={this.props.displayNavMenuFlag}  />
        </div>
    );
  }

}

export default NavBar;
const NavBarCard = ({handleOnClickOnHeader,displayNavMenuFlag}) => (
  <div>
  <nav class="navbar navbar-inverse fixed-top" style={{backgroundColor:"gray"}}>
  <div class="container">
    <ul class="nav navbar-nav navbar-left">
    <input type="search"  placeholder="search" className="search-field-width input-text-radius"/>
    </ul>
    <ul class="dropdown navbar-right">
   <button onClick={(e)=>handleOnClickOnHeader(e,"dsfds")} class="dropbtn">Items list</button>
    <div id="myDropdown" class={displayNavMenuFlag?"dropdown-content":"dropdown-content displayMenu"}>
    <a href="#category" onClick={(e)=>handleOnClickOnHeader(e,"COTEGORY")}>Categories</a>
    <a href="#list"  onClick={(e)=>handleOnClickOnHeader(e,"COMPANY_LIST")} >List</a>
  </div>
   </ul>
  </div>
</nav>
</div>
);