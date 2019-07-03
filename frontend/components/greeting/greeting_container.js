
import Greeting from './greeting'
import { connect } from 'react-redux'
import { logout } from '../../actions/session_actions'
//if logged in display welcome message and logout 
//if not logged in display sign in and sign up 
const mapStateToProps = (state) => ({
    currentUser: state.session.currentUser
    
})

const mapDispatchToProps = dispatch => ({
    logout : () => dispatch(logout())
})



export default connect(mapStateToProps,mapDispatchToProps)(Greeting)