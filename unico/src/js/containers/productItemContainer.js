/**
 * Created by pratikgarala on 13/5/17.
 */
import { connect } from 'react-redux';

import {addProductToCart} from '../actions/getProducts';
import ProductItem from '../components/productItem';

function mapStateToProps(state) {
    return {
        products: state.products
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onAddProductsToCart :(items) => dispatch(addProductToCart(items))
    };
}



const ProductItemContainer = connect(mapStateToProps, mapDispatchToProps)(ProductItem);

export default ProductItemContainer;