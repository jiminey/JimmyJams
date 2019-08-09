import { connect } from 'react-redux';
import NavBar from './navbar'
import { fetchAllUsers } from '../../actions/user_actions'


const mapStateToProps = state => {
    return ({
        users: state.entities.users,
        currentUser: state.session.currentUser
    })
};

const mapDispatchToProps = dispatch => ({
    fetchAllUsers: () => dispatch(fetchAllUsers())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavBar);
