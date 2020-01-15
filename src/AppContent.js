import React, { Component } from 'react';
import './App.css';
import Header from './Header';

import Body from './Body';
// Import Bootstrap CSS and JS
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

class AppContent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      companies: [],
      showCompanyListFlag:true,
      showHomeContentFlag:true,
      showCotegoryListFlag:false,
      showCompanyDetailFlag:false,
      companyObjet:null,
      displayNavMenuFlag:false,
    };
    this.defaultRoutingFlag={
      showCompanyListFlag:false,
      showHomeContentFlag:false,
      showCotegoryListFlag:false,
      showCompanyDetailFlag:false,
      companyObjet:null,
      displayNavMenuFlag:false,
    }
  }
  handleOnClickOnHeader=(event,eventTypeConst)=>{
    if(eventTypeConst==="HOME"){
      this.setState({showCompanyListFlag:false,showHomeContentFlag:true,showCotegoryListFlag:false,showCompanyDetailFlag:false,displayNavMenuFlag:false})
    }else if(eventTypeConst==="COMPANY_LIST"){
    this.setState({showCompanyListFlag:true,showHomeContentFlag:false,showCotegoryListFlag:false,showCompanyDetailFlag:false,displayNavMenuFlag:false})
    }else if(eventTypeConst==="COTEGORY"){
      this.setState({showCompanyListFlag:false,showHomeContentFlag:false,showCotegoryListFlag:true,showCompanyDetailFlag:false,displayNavMenuFlag:false})
    }else if(eventTypeConst==="MOUSE_OUT"){
      //alert("sldkkdsk")
      this.setState({displayNavMenuFlag:false})
    }else{
      //alert("sldkkdsk")
      this.setState({displayNavMenuFlag:!this.state.displayNavMenuFlag})
    }
    
  }

  onClickHandlerOnCompanyList=(data,eventType)=>{
    this.setState(()=>{
      if(eventType==="BACK"){
       let defaultRoutingObj=Object.assign({},this.defaultRoutingFlag);
       return {...defaultRoutingObj,showCompanyListFlag:true};
      }else{
        let defaultRoutingObj=Object.assign({},this.defaultRoutingFlag);
        return {...defaultRoutingObj,showCompanyDetailFlag:true,companyObjet:data};
      }
    })
  }
  
  render() {
    return (
      <div className="container mt-5">
        <Header  {...this.state} {...this}/>
        <Body {...this.state} {...this} />     
        </div>
    );
  }

}

export default AppContent;


