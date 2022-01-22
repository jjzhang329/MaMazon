import { combineReducers } from "redux";
import sessionReducer from "./session/session_reducer";
import entitiesReducer from './entities_reducer'
import errorsReducer from "./error_reducer";

const rootReducers = combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    errors: errorsReducer
})

export default rootReducers