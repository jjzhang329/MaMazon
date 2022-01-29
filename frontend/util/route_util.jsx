import React from 'react'
import { connect } from 'react-redux'
import { Redirect, Route, withRouter } from 'react-router-dom';

const mapState = (state) => ({
    loggedIn: Boolean(state.session.id)
})

const Auth = ({ loggedIn, path, component: Component }) => (
    <Route
        path={path}
        render={props => (loggedIn ? <Redirect to="/" /> : <Component {...props} />
        )}
    />
)

const Protected = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={(props) => (
        loggedIn ? (
            <Component {...props} />
        ) : (
            <Redirect to="/login" />
        )
    )} />
);
export const ProtectedRoute = withRouter(connect(mapState)(Protected));
export const AuthRoute = withRouter(connect(mapState)(Auth))