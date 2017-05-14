/**
 * Created by pratikgarala on 14/5/17.
 */

import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/root_reducer';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';


const logger = createLogger();
export const store = createStore(
    rootReducer,
    applyMiddleware(thunk, promise, logger)
);
