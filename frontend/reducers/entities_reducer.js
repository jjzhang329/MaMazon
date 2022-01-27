import { combineReducers } from "redux";
import productsReducer from "./products/productsReducer";
import usersReducer from './user/users_reducer'

const   entitiesReducers = combineReducers({
    users: usersReducer,
    products: productsReducer
})

export default entitiesReducers