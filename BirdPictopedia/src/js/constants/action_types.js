/**
 * Created by pratikgarala on 10/4/17.
 */
const actionTypes = {
    GetBirdsRequested: 'GET_BIRDS_REQUESTED',
    GetSelectedBirdRequested: 'GET_SELECTED_BIRD_REQUESTED',
    GetBirdsRejected: 'GET_BIRDS_REJECTED',
    GetSelectedBirdRejected: 'GET_SELECTED_BIRD_REJECTED',
    GetBirdsFulfilled: 'GET_BIRDS_FULFILLED',
    GetSelectedBirdsFulfilled: 'GET_SELECTED_BIRD_FULFILLED',

    filterBirdsByName: 'FILTER_BIRDS_BY_NAME',
    birdSelected: 'BIRD_SELECTED',
    changeBirdsForPage : 'CHANGE_BIRDS_FOR_PAGE'
};

export default actionTypes;