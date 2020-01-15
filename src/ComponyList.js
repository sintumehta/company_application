import React, { Component } from 'react';
import './App.css';

// Import Bootstrap CSS and JS
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
export default class ComponyList extends Component {

  constructor(props) {
    super(props);
    this.state = {
        companies: [],
        loadingFlag:true,
      };
  }
  componentDidMount() {
    fetch('https://api.airtable.com/v0/appmLMS3QVU9N99nr/table1?api_key=keyR8SLjdViXTjy4q')
    .then((resp) => resp.json())
    .then(data => {
      console.log(data);
      this.setState({ companies: data.records ,loadingFlag:false});
    }).catch(err => {
      // Error
    });
  }

  render() {
    return (
    <div className="row" style={{padding:"10px"}}>
     <div className="col-12 offset-1 list-header-text">
      <h1 className="text-center">All Companies</h1>
      <h5 className="text-center">A list of all the companies on the directory</h5>
        </div>
       {/*    <div className="jumbotron jumbotron-fluid">
      <h1 className="text-center">All Companies</h1>
      <h5 className="text-center">A list of all the companies on the directory</h5>
     </div> */}
          <div className="col-12 offset-1">
            <div className="card-deck container">{this.state.loadingFlag?<h3>Loading ........</h3>:<React.Fragment>
                {this.state.companies.map(company => <CompanyCard {...company.fields} companyObj={company} onClickHandlerOnCompanyList={this.props.onClickHandlerOnCompanyList}  /> )
              }</React.Fragment>}
            </div>
          </div>
        </div>
    );
  }

}
const CompanyCard = ({ title, tag1, description, logo,onClickHandlerOnCompanyList,companyObj }) => (
    <div className="col-10 border container mt-2 mb-2">
    <div className="row">
      <div className="col-2 mt-2 mb-2">
        <img className="card-img-top pointerCursur" src={logo} alt="company poster" onClick={()=>onClickHandlerOnCompanyList(companyObj,"")} />
      </div>
      <div className="col-9 mt-2 mb-2">
      <h6 className="mt-2 mb-0 font-weight-bold pointerCursur" onClick={()=>onClickHandlerOnCompanyList(companyObj,"")} >{title}</h6>
      <p className="mb-1 text-secondary">{description}</p>
       <div className="badge badge-secondary mb-0">{tag1}</div>
  
      </div>
    </div>
    </div>
  );