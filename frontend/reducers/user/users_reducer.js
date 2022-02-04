import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../../actions/session_actions";
import { RECEIVE_ITEMS, ADD_TO_CART, UPDATE_CART } from "../../actions/cart_actions";

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state)
    // debugger
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.user.id]: action.user})
        // case RECEIVE_ITEMS:
        //     return action.items 
        case ADD_TO_CART:           
            nextState[action.newItem.user_id].cart.push(action.newItem.product_id)
            nextState[action.newItem.user_id].cartCount += action.newItem.quantity
            return nextState;

        case UPDATE_CART:
            debugger
            const user_id = action.quantity.id
            const count = action.quantity.cartCount
            nextState[user_id].cartCount = count
             return nextState

        case LOGOUT_CURRENT_USER:
            return {}
        default:
            return state;
    }

}

export default usersReducer;