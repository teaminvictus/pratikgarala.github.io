/**
 * Created by pratikgarala on 29/1/17.
 */
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class MenuData extends Component{

    renderMenuDetail() {
        return this.props.menuData.map((menu) => {

            return (
                <div className="portfolio-modal modal fade" id={menu.id}  role="dialog" aria-hidden="true">
                    <div className="modal-content">
                        <div className="close-modal" data-dismiss="modal">
                            <div className="lr">
                                <div className="rl">
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-lg-offset-2">
                                    <div className="modal-body">
                                        <h2>{menu.title}</h2>
                                        <hr className="star-primary" />
                                        <img src={require("../../images/menu/" + menu.thumbnail)} className="img-responsive img-centered" alt="" />
                                        <p>
                                            <h4>Ingredients</h4>
                                            <br/>
                                            {menu.ingredients}
                                        </p>
                                        <br/>
                                        <button type="button" className="btn btn-default" data-dismiss="modal">
                                            <i className="fa fa-times"></i> Close
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
    }

    render(){
        return(
            <div>
                {this.renderMenuDetail()}
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        menuData : state.menuData
    }
}

export default connect(mapStateToProps)(MenuData);