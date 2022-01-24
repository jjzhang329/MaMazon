import { connect } from "react-redux"
import { signup, login } from "../../actions/session_actions"
import SessionForm from './SessionForm'
const mapState = (state) => ({
    errors: state.errors.session,
    formType: "Sign-Up"
})

const mapDispatch = (dispatch) => ({
    action: (user) => dispatch(signup(user)),
    loginDemo: (user) => dispatch(login(user))
})

export default connect(mapState, mapDispatch)(SessionForm)