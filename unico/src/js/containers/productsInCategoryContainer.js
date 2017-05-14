/**
 * Created by pratikgarala on 14/5/17.
 */

import { connect } from 'react-redux';

import {setTotalProducts, setTotalCost, removeProductFromCart} from '../actions/getProducts';
import ProductInCategory from '../components/productInCategory';

function mapStateToProps(state) {
    return {
        products: state.products
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onSetTotalProducts: (totalProducts) => dispatch(setTotalProducts(totalProducts)),
        onSetTotalCost: (totalCost) => dispatch(setTotalCost(totalCost)),
        onRemoveProductFromCart : (productItem) => dispatch(removeProductFromCart(productItem))
    };
}



const ProductInCategoryContainer = connect(mapStateToProps, mapDispatchToProps)(ProductInCategory);

export default ProductInCategoryContainer;