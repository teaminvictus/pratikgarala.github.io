/**
 * Created by pratikgarala on 10/4/17.
 */

import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { getBirds, displayMatches, selectBird } from '../actions/get_birds';
// import { addToInvite } from '../actions/add_invite';
// import { watchGuestAddedEvent } from '../actions/guest_added_event';
import FindBirds from '../components/findBirds';

function mapStateToProps(state) {
    return {
        birds: state.birds
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onGetBirds: () => dispatch(getBirds()),
        onDisplayMatches: () => dispatch(displayMatches()),
        onSelectBird: (bird) => dispatch(selectBird(bird))
    };
}



const FindBirdsContainer = connect(mapStateToProps, mapDispatchToProps)(FindBirds);

export default FindBirdsContainer;