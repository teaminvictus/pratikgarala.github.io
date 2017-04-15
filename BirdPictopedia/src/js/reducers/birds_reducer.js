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
                matchBirds : birds,
                birdsForPage : birds.length > 9 ? birds.slice(0, 9) : birds
            });
            return newState;
        }
        case ActionTypes.filterBirdsByName: {

            const matchBirds = action.matchBirds;
            const newState = Object.assign({}, state, {
                inProgress: false,
                success: 'Got filtered birds.',
                matchBirds : matchBirds,
                birdsForPage : matchBirds.length > 9 ? matchBirds.slice(0, 9) : matchBirds
            });
            return newState;
        }
        case ActionTypes.changeBirdsForPage: {
            const birdsForPage = action.birdsForPage;
            const newState = Object.assign({}, state, {
                inProgress: false,
                success: 'Got filtered birds.',
                birdsForPage : birdsForPage
            });
            return newState;
        }
        case ActionTypes.birdSelected: {
            const newState = Object.assign({}, state, {
                inProgress: false,
                success: 'Bird Selected',
                selectedBird : action.selectedBird,
                birdUrl : action.birdUrl
            });
            return newState;
        }
        default:
            return state;
    }
}
