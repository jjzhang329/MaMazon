import {
    RECEIVE_ALL_PRODUCTS,
    RECEIVE_PRODUCT
} from '../../actions/products_actions'
import { RECEIVE_ITEMS } from '../../actions/cart_actions';

const productsReducer = (state={}, action)=>{
    Object.freeze(state)
    switch(action.type){
        case RECEIVE_ALL_PRODUCTS:
            return action.products;
        case RECEIVE_PRODUCT:
            return Object.assign({}, state, {[action.product.id]: action.product})
        case RECEIVE_ITEMS:
            return action.items;
        default:
            return state;
    }
}

export default productsReducer;