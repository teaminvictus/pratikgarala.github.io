import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


class PortfolioList extends Component{

    renderPortfolio() {
        return this.props.portfolio.map((portfolio) => {
            return (
                <a key={portfolio.id} href={"#" + portfolio.id} className="portfolio-link" data-toggle="modal">
                    <div className="caption">
                        <div className="caption-content">
                            <i className="fa fa-search-plus fa-3x"></i>
                        </div>
                    </div>
                    <img src={require("../../img/portfolio/" + portfolio.thumbnail)} className="img-responsive" alt="" />
                </a>
            );
        });
    }

    render(){
        return(
            <div className="row">
                <div className="col-lg-12 portfolio-item">
                    {this.renderPortfolio()}
                </div>
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