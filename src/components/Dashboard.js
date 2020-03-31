import React, { Component } from 'react';
import MainNavbar from './MainNavbar';

class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
     }
  }

  render(){
    return (
      <div className="main-body">
        <MainNavbar />
      </div>
    );
  }
}


export default (Dashboard);