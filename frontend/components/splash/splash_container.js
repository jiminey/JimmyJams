import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import Splash from './splash'
import {fetchAllSongs} from '../../actions/song_actions'
import {fetchAllUsers} from '../../actions/user_actions'

import {playSong, pauseSong} from '../../actions/audioplayer_actions'

const mapStateToProps = state => {    
    return({
        songs: Object.values(state.entities.songs),
        users: state.entities.users,
        playState: state.player.playState,
        currentSong: state.player.currentSong,
        currentAudio: state.player.currentAudio,

    })
};

const mapDispatchToProps = dispatch => ({
    playSong: (song,audio) => dispatch(playSong(song,audio)),
    pauseSong: () => dispatch(pauseSong()),
    openModal: modal => dispatch(openModal(modal)),
    fetchAllSongs: () => dispatch(fetchAllSongs()),
    fetchAllUsers: () => dispatch(fetchAllUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);