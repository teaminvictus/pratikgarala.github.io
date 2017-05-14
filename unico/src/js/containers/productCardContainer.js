/**
 * Created by pratikgarala on 14/5/17.
 */

import { connect } from 'react-redux';

import {addProductToCart} from '../actions/getProducts';
import ProductCard from '../components/productCard';

function mapStateToProps(state) {
    return {
        products: state.products
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onAddProductToCart: (items) => dispatch(addProductToCart(items))
    };
}



const ProductCardContainer = connect(mapStateToProps, mapDispatchToProps)(ProductCard);

export default ProductCardContainer;