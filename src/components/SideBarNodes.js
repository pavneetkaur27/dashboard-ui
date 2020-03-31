import React, { Component } from 'react';
import {connect} from "react-redux";
import { Switch, Route,withRouter } from 'react-router-dom';
import Cookies from 'universal-cookie';
import MainNavbar from './MainNavbar';
const cookies = new Cookies();

class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
     }
  }

  componentWillMount(){
    
  }
  
  componentWillReceiveProps(nextProps){
  }

  render(){
    return (
      <div>
        
        sdsd
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
     
  }
}

const mapDispatchToProps = {};


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Dashboard))