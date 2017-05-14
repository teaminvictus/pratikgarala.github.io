/**
 * Created by pratikgarala on 14/5/17.
 */
import React from 'react';
import ProductCategory from './productCategory';

class ListView extends React.Component {

    render() {
        const productsInCart = this.props.products.productsInCart;
        var data = [];
        for (var key in productsInCart)
            data.push(productsInCart[key]);

        return (
            <section id="listView" className="hideElement">
                {data && data.length > 0 ? (
                    <div className="container">
                        {data.map((category, index) => {
                            return (
                                <ProductCategory key={index} productCategory={category} index={index}/>
                            );
                        })}
                    </div>
                ) : (
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <div className="msgText">
                                    <h2>There are no products in the cart. <br />
                                        Please add them.</h2>
                                    <br />
                                </div>
                            </div>
                        </div>

                    </div>
                )}
            </section>
        );
    }
}

export default ListView;