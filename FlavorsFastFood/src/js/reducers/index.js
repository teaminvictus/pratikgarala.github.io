import {combineReducers} from 'redux';

import MenuOptionReducer from './reducer-menu-options';
import MenuData from './reducer-menu';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
    menuOptions: MenuOptionReducer,
    menuData: MenuData
});

export default allReducers
