/**
 * Created by pratikgarala on 13/5/17.
 */

import React from 'react';
import ProductCardContainer from '../containers/productCardContainer';

class ProductSection extends React.Component {

    componentWillMount() {
        this.props.onGetProducts();
    }

    render() {
        const products = this.props.products.products;
        return (
            <section id="productSection">
                {products && products.length > 0 ? (
                    <div className="col-lg-12 text-center">
                        {products.map((product, index) => {
                            return (
                                <ProductCardContainer key={index} product={product}/>
                            );
                        })}
                    </div>
                ) : null}
            </section>
        );
    }
}

export default ProductSection;