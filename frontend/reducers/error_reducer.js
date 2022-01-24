import { combineReducers } from "redux";
import sessionErrorsReducer from "./session/sessionErrors_reducer";

const errorsReducer = combineReducers({
    session: sessionErrorsReducer
})

export default errorsReducer;