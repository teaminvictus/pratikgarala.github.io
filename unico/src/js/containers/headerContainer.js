/**
 * Created by pratikgarala on 14/5/17.
 */
import { connect } from 'react-redux';

import {setTotalProducts, setTotalCost} from '../actions/getProducts';
import Header from '../components/header';

function mapStateToProps(state) {
    return {
        products: state.products
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onSetTotalProducts: (totalProducts) => dispatch(setTotalProducts(totalProducts)),
        onSetTotalCost: (totalCost) => dispatch(setTotalCost(totalCost))
    };
}



const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;