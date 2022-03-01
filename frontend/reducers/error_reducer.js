import { combineReducers } from "redux";
import sessionErrorsReducer from "./session/sessionErrors_reducer";
import reviewErrorsReducer from "./reviewErrors_reducer";

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    review: reviewErrorsReducer
})

export default errorsReducer;