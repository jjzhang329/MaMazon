import * as SessionApi from "../util/session_api_util"

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER"
export const RECEIVE_SESSION_ERRORS = "RECEIVE_ERRORS"


export const receiveCurrentUser = (currentUser) => ({
    type: RECEIVE_CURRENT_USER,
    user: currentUser
})
export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
})
export const receiveErrors = (errors = []) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})

export const login = (user) => (dispatch) => (
    SessionApi.login(user).then(user => dispatch(receiveCurrentUser(user)),
        (error) => {
            return dispatch(receiveErrors(error.responseJSON))
        }
    )
)

export const logout = () => (dispatch) => (
    SessionApi.logout().then(() => dispatch(logoutCurrentUser()))
)

export const signup = (user) => (dispatch) => (
    SessionApi.signup(user).then((user) => dispatch(receiveCurrentUser(user)),
        (error) => (dispatch(receiveErrors(error.responseJSON)))
    )
)

