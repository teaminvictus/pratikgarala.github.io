/**
 * Created by pratikgarala on 10/4/17.
 */

import { combineReducers } from 'redux';
import { birdsReducer } from './birds_reducer';

const rootReducer = combineReducers({
    birds: birdsReducer
});

export default rootReducer;