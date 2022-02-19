import {
    RECEIVE_ALL_PRODUCTS,
    RECEIVE_PRODUCT
} from '../../actions/products_actions'
import { RECEIVE_ITEMS, UPDATE_CART } from '../../actions/cart_actions';
import { CREATE_REVIEW, UPDATE_REVIEW, DELETE_REVIEW } from '../../actions/review_actions';

const productsReducer = (state={}, action)=>{
    Object.freeze(state)
    const nextState = Object.assign({}, state)
    switch(action.type){
        case RECEIVE_ALL_PRODUCTS:
            return action.products;
        case RECEIVE_PRODUCT:
            
            // return Object.assign(nextState, {[action.product.id]: action.product})
            return Object.assign({}, { [action.product.id]: action.product })
        // case RECEIVE_ITEMS:
        //     return action.items;


        default:
            return state;
    }
}

export default productsReducer;