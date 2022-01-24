import { connect } from "react-redux";
import {login} from '../../actions/session_actions'
import SessionForm from './SessionForm'
const mapState = (state) => ({
    errors: state.errors.session,
    formType: "Sign-In"
})

const mapDispatch = (dispatch) => ({
    action: (user) => dispatch(login(user)),
    loginDemo: (user) => dispatch(login(user))
})

export default connect(mapState, mapDispatch)(SessionForm)