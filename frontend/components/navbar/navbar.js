import { connect } from 'react-redux';
import Main from './main'
import { fetchAllSongs } from '../../actions/song_actions'
import { fetchAllUsers } from '../../actions/user_actions'

import { playSong, pauseSong } from '../../actions/audioplayer_actions'

const mapStateToProps = state => {
    return ({
        users: state.entities.users,
        
    })
};

const mapDispatchToProps = dispatch => ({
    fetchAllUsers: () => dispatch(fetchAllUsers())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);
