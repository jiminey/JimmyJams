import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import Splash from './splash'
import {fetchAllSongs} from '../../actions/song_actions'
import {fetchAllUsers} from '../../actions/user_actions'

const mapStateToProps = state => {
    return({
        songs: Object.values(state.entities.songs),
        users: state.entities.users
    })
};

const mapDispatchToProps = dispatch => ({
    openModal: modal => dispatch(openModal(modal)),
    fetchAllSongs: () => dispatch(fetchAllSongs()),
    fetchAllUsers: () => dispatch(fetchAllUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);