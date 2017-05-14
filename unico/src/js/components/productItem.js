/**
 * Created by pratikgarala on 13/5/17.
 */

import React from 'react';

class ProductItem extends React.Component {

    componentDidMount() {
        if (this.props.products.productsInCart == null) {
            const items = [];
            this.props.onAddProductsToCart(items);
        }
    }

    render() {
        return (
            <div className="col-lg-3">
                <img src={this.props.item.imageUrl} />
                <div className= "text-center">
                    <span className="productTitle"> {this.props.item.title} </span>
                </div>
                <div className="text-right">
                    $<span className="cost"> {this.props.item.unitCost} </span> <br />
                    <span className="subText">per unit</span>
                </div>
                <div className="text-left">
                    <span className="subText">{this.props.item.unitsInCartons} units per carton</span> <br />
                    <span className="subText">(${parseFloat(this.props.item.unitsInCartons * this.props.item.unitCost).toFixed(2)})</span>
                </div>
            </div>
        );
    }
}


export default ProductItem;