/**
 * Created by pratikgarala on 13/4/17.
 */
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { getSelectedBird } from '../actions/get_selectedBird';
import { getBirdCount } from '../actions/get_birdcount';
import { selectTree } from '../actions/get_trees';

import BirdDetail from '../components/birdDetail';

function mapStateToProps(state) {
    return {
        birds: state.birds
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onSelectedBird: (birdId) => dispatch(getSelectedBird(birdId)),
        onGetBirdCount: (birdId) => dispatch(getBirdCount(birdId)),
        onSelectTree: (tree) => dispatch(selectTree(tree)),
    };
}


const BirdDetailContainer = connect(mapStateToProps, mapDispatchToProps)(BirdDetail);

export default BirdDetailContainer;