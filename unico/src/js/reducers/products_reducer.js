/**
 * Created by pratikgarala on 13/5/17.
 */

import ActionTypes from '../constants/action_types';

export function productsReducer(state = {}, action) {
    switch(action.type) {
        case ActionTypes.GetProductsRequested: {
            return Object.assign({}, state, {
                inProgress: true,
                error: '',
                success: ''
            });
        }
        case ActionTypes.GetProductsRejected: {
            return Object.assign({}, state, {
                inProgress: false,
                error: 'Error in getting products.',
            });
        }
        case ActionTypes.GetProductsFulfilled: {
            const newState = Object.assign({}, state, {
                inProgress: false,
                success: 'Got products.',
                products: action.products,
            });
            return newState;
        }
        case ActionTypes.SetTotalProducts: {
            const newState = Object.assign({}, state, {
                success: 'Total Product set',
                totalProducts: action.totalProducts,
            });
            return newState;
        }
        case ActionTypes.SetTotalCost: {
            const newState = Object.assign({}, state, {
                success: 'Total Cost set',
                totalCost: action.totalCost,
            });
            return newState;
        }
        case ActionTypes.AddProductToCart: {
            const newState = Object.assign({}, state, {
                success: 'Products Added in the cart',
                productsInCart: action.productsInCart,
            });
            return newState;
        }
        case ActionTypes.RemoveProductFromCart: {
            const newState = Object.assign({}, state, {
                success: 'Product removed from the cart',
                productsInCart: action.productsInCart,
                totalCost: action.totalCost,
                totalProducts: action.totalProducts
            });
            return newState;
        }
        default:
            return state;
    }
}