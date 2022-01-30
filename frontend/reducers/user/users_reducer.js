import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../../actions/session_actions";
import { RECEIVE_ITEMS, ADD_TO_CART, UPDATE_CART } from "../../actions/cart_actions";

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    // debugger
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.user.id]: action.user})
        // case RECEIVE_ITEMS:
        //     return action.items 
        case ADD_TO_CART:
            const nextState = Object.assign({}, state)
             nextState[action.newItem.user_id].cart.push(action.newItem)
             return nextState;
        
        case LOGOUT_CURRENT_USER:
            return {}
        default:
            return state;
    }

}

export default usersReducer;