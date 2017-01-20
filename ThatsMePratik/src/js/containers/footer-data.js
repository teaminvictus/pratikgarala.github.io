import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class FooterData extends Component {

    render(){
        return(
            <div className="row">
                <div className="footer-col col-md-4">
                    <h3>Location</h3>
                    <p>{this.props.profile[0].location.houseNo} {this.props.profile[0].location.street}
                        <br/>{this.props.profile[0].location.suburb}, {this.props.profile[0].location.state} {this.props.profile[0].location.postcode}</p>
                </div>
                <div className="footer-col col-md-4">
                    <h3>Around the Web</h3>
                    <ul className="list-inline">
                        <li>
                            <a href={this.props.profile[0].online.github} className="btn-social btn-outline"><i className="fa fa-fw fa-github"></i></a>
                        </li>
                        <li>
                            <a href={this.props.profile[0].online.linkedIn} className="btn-social btn-outline"><i className="fa fa-fw fa-linkedin"></i></a>
                        </li>
                        <li>
                            <a href={this.props.profile[0].online.facebook} className="btn-social btn-outline"><i className="fa fa-fw fa-facebook"></i></a>
                        </li>
                        <li>
                            <a href={this.props.profile[0].online.twitter} className="btn-social btn-outline"><i className="fa fa-fw fa-twitter"></i></a>
                        </li>
                    </ul>
                </div>
                <div className="footer-col col-md-4">
                    <h3>Favorite Quote</h3>
                    <p>{this.props.profile[0].favQuote}</p>
                </div>
            </div>
        );
    }

}

function mapStateToProps(state){
    return{
        profile : state.profile
    }
}

export default connect(mapStateToProps)(FooterData);