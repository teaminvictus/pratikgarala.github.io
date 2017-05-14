/**
 * Created by pratikgarala on 13/5/17.
 */
import { connect } from 'react-redux';

import {getProducts, setTotalCost, setTotalProducts} from '../actions/getProducts';
import ProductSection from '../components/productSection';

function mapStateToProps(state) {
    return {
        products: state.products
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onGetProducts: () => dispatch(getProducts())
    };
}



const ProductSectionContainer = connect(mapStateToProps, mapDispatchToProps)(ProductSection);

export default ProductSectionContainer;