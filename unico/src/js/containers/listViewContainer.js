/**
 * Created by pratikgarala on 14/5/17.
 */
import { connect } from 'react-redux';

import {addProductToCart} from '../actions/getProducts';
import ListView from '../components/listView';

function mapStateToProps(state) {
    return {
        products: state.products
    };
}

function mapDispatchToProps(dispatch) {
    return {
        // onAddProductsToCart: (items) => dispatch(addProductToCart(items))
    };
}



const ListViewContainer = connect(mapStateToProps, mapDispatchToProps)(ListView);

export default ListViewContainer;