import { combineReducers } from "redux";

import filtersReducer from "./products/filters_reducer";

const uiReducer = combineReducers({
    filters: filtersReducer
})

export default uiReducer;