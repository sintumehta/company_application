import React, { Component } from 'react';
import './App.css';

// Import Bootstrap CSS and JS
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import ComponyList from './ComponyList';
import CategoryList from './CategoryList';
import CompanyDetails from './ComponyDetails';
export default class Body extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    let { showHomeContentFlag, showCompanyListFlag, showCotegoryListFlag, showCompanyDetailFlag, handleOnClickOnHeader } = { ...this.props };
    return (<div className="container" onClick={(e) => handleOnClickOnHeader(e, "MOUSE_OUT")} >
      {showHomeContentFlag ? <HomeContent /> : null}
      {showCompanyListFlag ? <ComponyList {...this.props} /> : null}

      {showCotegoryListFlag ? <CategoryList {...this.props} /> : null}
      {showCompanyDetailFlag ? <CompanyDetails {...this.props} /> : null}
    </div>);
  }

}
const HomeContent = () => {
  return <React.Fragment>
    {/* <div className="custom-container">
    <div className="row">
       <div className="col-sm-12 welcome-text-align"  > 
            Welcome 
       </div>
    </div>
  </div> */}
  </React.Fragment>
}