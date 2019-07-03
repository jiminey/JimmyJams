import { connect } from 'react-redux';
import SessionForm from './session_form';
import React from 'react';
import {Link} from 'react-router-dom'
import {login} from '../actions/session_actions'
import {withRouter} from 'react-router-dom'


const mapStateToProps = ({errors}) => ({
    errors: errors.session,
    formType: 'Sign In',
    navLink: <Link to="/signup">sign up instead</Link>,
})

const mapDispatchToProps = dispatch => ({
    processForm: (user) => dispatch(login(user))
})






export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm))