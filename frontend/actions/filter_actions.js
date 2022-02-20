import { fetchAllProducts } from './products_actions'

export const UPDATE_FILTER = 'UPDATE_FILTER';
export const changeFilter = (filter, value) => ({
    type: UPDATE_FILTER,
    filter,
    value
});

export const updateFilter = (filter, value) => (dispatch, getState) => {
    dispatch(changeFilter(filter, value));
    debugger
    localStorage.setItem('filter', JSON.stringify({"department": value}))
    return fetchAllProducts(getState().ui.filters)(dispatch);
};
