import { combineReducers } from "redux";
import modalReducer from "./modal_reducer"
import filtersReducer from "./products/filters_reducer";

const uiReducer = combineReducers({
    filters: filtersReducer,
    modal: modalReducer
})

export default uiReducer;