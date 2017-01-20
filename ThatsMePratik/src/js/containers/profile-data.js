/**
 * Created by pratikgarala on 25/12/16.
 */

import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class HeaderData extends Component{

    render(){
        return(
        <div className="intro-text">
            <span className="name">{this.props.profile[0].firstName + " " + this.props.profile[0].lastName}</span>
            <hr className="star-light" />
            <span className="skills">{this.props.profile[0].occupation}</span>
        </div>
        );
    }
}

function mapStateToProps(state){
    return{
        profile : state.profile
    }
}

export default connect(mapStateToProps)(HeaderData);