import { connect } from "react-redux"
import { signup } from "../../actions/session_actions"
import SessionForm from './SessionForm'
const mapState = (state) => ({
    errors: Object.values(state.errors),
    formType: "Sign Up"
})

const mapDispatch = (dispatch) => ({
    action: (user) => dispatch(signup(user))
})

export default connect(mapState, mapDispatch)(SessionForm)