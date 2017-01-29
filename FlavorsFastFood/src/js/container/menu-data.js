/**
 * Created by pratikgarala on 29/1/17.
 */

import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class MenuData extends Component{

    renderMenu() {
        return this.props.menuData.map((menu) => {
            let className;
            className = "item " + menu.type;
            return (
                <li key={menu.id} className={className} >
                    <a href={"#" + menu.id} className="portfolio-link" data-toggle="modal" data-target={"#" + menu.id}>
                        <div className="caption">
                            <div className="caption-content">
                                <i className="fa fa-search-plus fa-3x"></i>
                            </div>
                        </div>
                        <img src={require("../../images/menu/" + menu.thumbnail)} className="img-responsive" alt="Food" />

                    </a>
                    <h2 className="white">${menu.price}</h2>
                </li>
            );
        });
    }

    render(){
        return(
            <ul id="portfolio">
                {this.renderMenu()}
            </ul>
        );
    }
}

function mapStateToProps(state){
    return {
        menuData : state.menuData
    }
}

export default connect(mapStateToProps)(MenuData);