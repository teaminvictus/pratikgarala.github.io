/**
 * Created by pratikgarala on 13/5/17.
 */

import React from 'react';
import ProductItemContainer from '../containers/productItemContainer';

const ProductCard = (props) => (
    <div className="card">
        <span className="addIcon fa fa-3x fa-plus-circle" onClick={() => {props.onAddProductToCart(props.product.items)}}/>
        {props.product.items && props.product.items.length > 0 ? (
            <div>
                {props.product.items.map((item, index) => {
                    return (
                        <ProductItemContainer key={index} item={item} />
                    );
                })}
            </div>
        ) : null}
        {renderRecommendation(props.product)}
    </div>
);

const renderRecommendation = (product) => (

        product.items.length > 1 ? (
            <div className="recommendation">
                <div className="col-sm-6">
                    <span className="number"> {product.items.length} </span>
                    <span className="subText">Items
                            <br/>
                            SELLS WILL TOGETHER* </span>
                </div>
                <div className="col-sm-6">
                    <span className="number"> {product.recommendation.currentLevel}%</span>
                    <span className="subText">
                            <br />
                            Recommended*
                            </span>
                </div>
            </div> ) : null

);

export default ProductCard;
