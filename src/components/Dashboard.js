import React, { Component } from 'react';
import {connect} from "react-redux";
import { Switch, Route,withRouter } from 'react-router-dom';
import Cookies from 'universal-cookie';
import MainNavbar from './MainNavbar';
import { Sidebar } from 'semantic-ui-react';
const cookies = new Cookies();

class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      dashboardheader : false,
      isLoggedIn : false
    }
  }

  componentWillMount(){
    
  }
  
  componentWillReceiveProps(nextProps){
  }

  render(){
    // console.log(this.props);
    return (
      <div>
        <MainNavbar />
        
        sdsd
      </div>
    );
  }
}


class InvalidPage extends Component {
  render() {
      return (
          <div className="page-not-found">
            Sorry! Page not found.
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