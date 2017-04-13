/**
 * Created by pratikgarala on 13/4/17.
 */
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { selectBird } from '../actions/get_birds';

import BirdDetail from '../components/birdDetail';

function mapStateToProps(state) {
    return {
        birds: state.birds
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onSelectBird: (bird) => dispatch(selectBird())
    };
}


const BirdDetailContainer = connect(mapStateToProps, mapDispatchToProps)(BirdDetail);

export default BirdDetailContainer;