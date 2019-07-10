import { connect } from 'react-redux'
import Library from '../library/library'
import {fetchAllSongs} from '../../actions/song_actions'
import { fetchAllUsers } from '../../actions/user_actions'

const mapStateToProps = state => {
    return ({
        songs: Object.values(state.entities.songs),
        users: state.entities.users
    })
};

const mapDispatchToProps = dispatch => ({
    fetchAllSongs: () => dispatch(fetchAllSongs()),
    fetchAllUsers: () => dispatch(fetchAllUsers())
});


export default connect(mapStateToProps, mapDispatchToProps)(Library)
