import ActionTypes from '../constants/action_types';
import database from './database';
import store from '../store/store';

export function getTreesInLocation(postcode){

    console.log(store.getState().trees.trees.filter(tree => tree.vic == 1));
    // console.log(postcode, store.getState().trees.trees.filter(tree => tree.vic.localeCompare("1") == 0 ));
    return "";
}