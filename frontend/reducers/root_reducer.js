import { combineReducers } from "redux";
import UsersReducer from './users_reducer'

const RootReducers = combineReducers({
    entities: UsersReducer
})

export default RootReducers