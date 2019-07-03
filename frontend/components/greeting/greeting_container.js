
import Greeting from './greeting'
import { connect } from 'react-redux'
import { logout } from '../../actions/session_action'
//if logged in display welcome message and logout 
//if not logged in display sign in and sign up 
const mapStateToProps = ({session, entities:{ users }}) => ({
    currentUser: users[session.id]
    
})

const mapDispatchToProps = dispatch => ({
    logout : () => dispatch(logout())
})



export const connect(mapStateToProps,mapDispatchToProps)(Greeting)