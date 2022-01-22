import { combineReducers } from "redux";
import usersReducer from './user/users_reducer'

const   entitiesReducers = combineReducers({
    users: usersReducer
})

export default entitiesReducers