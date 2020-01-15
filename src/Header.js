import React, { Component } from 'react';
import './App.css';

// Import Bootstrap CSS and JS
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import NavBar from './NavBar';
export default class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return ( <NavBar  {...this.props}></NavBar>);
  }

}
