/**
 * Created by pratikgarala on 10/4/17.
 */

import ActionTypes from '../constants/action_types';
import database from './database';

export function getBirds() {
    return dispatch => {
        dispatch(getBirdsRequestedAction());
        return database.ref('birds_master').once('value', snap => {
            const birds = snap.val();
            dispatch(getBirdsFulfilledAction(birds))
        })
            .catch((error) => {
                console.log(error);
                dispatch(getBirdsRejectedAction());
            });
    }
}


function getBirdsRequestedAction() {
    return {
        type: ActionTypes.GetBirdsRequested
    };
}

function getBirdsRejectedAction() {
    return {
        type: ActionTypes.GetBirdsRejected
    }
}

function getBirdsFulfilledAction(birds) {
    return {
        type: ActionTypes.GetBirdsFulfilled,
        birds
    };
}