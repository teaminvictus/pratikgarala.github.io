/**
 * Created by pratikgarala on 10/4/17.
 */

import ActionTypes from '../constants/action_types';

export function birdsReducer(state = {}, action) {
    switch(action.type) {
        case ActionTypes.GetBirdsRequested: {
            return Object.assign({}, state, {
                inProgress: true,
                error: '',
                success: ''
            });
        }
        case ActionTypes.GetBirdsRejected: {
            return Object.assign({}, state, {
                inProgress: false,
                error: 'Error in getting birds.',
            });
        }
        case ActionTypes.GetBirdsFulfilled: {
            const birds = action.birds;
            const newState = Object.assign({}, state, {
                inProgress: false,
                success: 'Got birds.',
                birds : birds,
                matchBirds : birds
            });
            return newState;
        }
        case ActionTypes.filterBirdsByName: {

            const matchBirds = action.matchBirds;
            const newState = Object.assign({}, state, {
                inProgress: false,
                success: 'Got filtered birds.',
                matchBirds : matchBirds
            });
            return newState;
        }
        default:
            return state;
    }
}
