/**
 * Created by pratikgarala on 24/12/16.
 */
import React from 'react';


class Header extends React.Component {

    componentWillMount() {
        this.props.onSetTotalProducts(0);
        this.props.onSetTotalCost(0);
    }

    render() {
        return (
            <section className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 text-left">
                            <div className="title separator">
                                <span className="name">Total <br /> Products</span>
                                <br />
                                <span className="number"> {this.props.products.totalProducts} </span>
                            </div>
                            <div className="title">
                                <span className="name">Total <br /> Cost</span>
                                <br />
                                $ <span className="number">{this.props.products.totalCost}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}



export default Header;