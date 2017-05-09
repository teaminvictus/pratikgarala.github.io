/**
 * Created by pratikgarala on 6/5/17.
 */
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { getLikelyBirds } from '../actions/get_likelyBirds';

import TreeDetail from '../components/treeDetail';

function mapStateToProps(state) {
    return {
        trees: state.trees
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onGetLikelyBirds: (selectedTree) => dispatch(getLikelyBirds(selectedTree)),
    };
}


const TreeDetailContainer = connect(mapStateToProps, mapDispatchToProps)(TreeDetail);

export default TreeDetailContainer;