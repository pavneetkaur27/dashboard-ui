import React, { Component } from 'react'
import {connect} from "react-redux";
import { withRouter } from 'react-router-dom';

class MainNavbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            active : 1,
            anchorEl : null,
            menuid :'',
            open :'',
            arr : [ {id: 1,jname: 'Full Time'},{id: 2,jname: 'Part Time',},{id: 3,jname: 'Internship',}],
            openEditJobModal : false,
            openCloseJobModal : false,
            selectedJob : ''
        }
    }


    render() {

        return (
            <div>
                sds
            </div>
        )
    }
}

const mapStateToProps = state => {
  return {
      orgpanel : state.organisationReducer
  }
}

const mapDispatchToProps = {fetchResturant};

export default withRouter(connect( mapStateToProps, mapDispatchToProps)(MainNavbar));  