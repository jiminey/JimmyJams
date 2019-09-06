import { connect } from 'react-redux';
import NavBar from './navbar'
import { fetchAllUsers } from '../../actions/user_actions'
import {logout} from '../../actions/session_actions'

const mapStateToProps = state => {
    return ({
        users: state.entities.users,
        currentUser: state.session.currentUser
    })
};

const mapDispatchToProps = dispatch => ({
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    logout: () => dispatch(logout())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavBar);
