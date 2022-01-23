import { connect } from "react-redux";
import {login} from '../../actions/session_actions'
import SessionForm from './SessionForm'
const mapState = (state) => ({
    errors: Object.values(state.errors),
    formType: "Sign In"
})

const mapDispatch = (dispatch) => ({
    action: (user) => dispatch(login(user))
})

export default connect(mapState, mapDispatch)(SessionForm)