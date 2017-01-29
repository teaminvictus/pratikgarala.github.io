import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


class PortfolioList extends Component{

    renderPortfolio() {
        return this.props.portfolio.map((portfolio) => {
            return (
                <div key={portfolio.id} className="col-sm-6 portfolio-item">
                    <a href={"#" + portfolio.id} className="portfolio-link" data-toggle="modal">
                        <div className="caption">
                            <div className="caption-content">
                                <i className="fa fa-search-plus fa-3x"></i>
                            </div>
                        </div>
                        <img src={require("../../img/portfolio/" + portfolio.thumbnail)} className="img-responsive img-shadow" alt="" />
                    </a>
                </div>
            );
        });
    }

    render(){
        return(
            <div className="row">

                {this.renderPortfolio()}
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        portfolio : state.portfolio
    }
}

export default connect(mapStateToProps)(PortfolioList);