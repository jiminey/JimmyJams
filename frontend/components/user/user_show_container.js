import { connect } from 'react-redux';
import UserShow from '../user/user_show'

import { deleteSong, updateSong } from '../../actions/song_actions'
import { openModal } from '../../actions/modal_actions'
import { playSong, pauseSong } from '../../actions/audioplayer_actions'
import {fetchUser} from '../../actions/user_actions'


const mapStateToProps = (state, ownProps) => {

    return ({
        users: state.entities.users, 
        user: state.entities.users[ownProps.match.params.userId],
        songs: Object.values(state.entities.songs).filter(song => song.uploader_id == ownProps.match.params.userId),
        errors: state.errors.user,
        currentUser: state.session.currentUser, 
        currentAudio: state.player.currentAudio,
        currentSong: state.player.currentSong,
        songUrl: state.player.songUrl,
        playState: state.player.playState,
        songList: state.player.songList,
    })
};

const mapDispatchToProps = dispatch => ({
    playSong: (song, audio) => dispatch(playSong(song,audio)),
    pauseSong: () => dispatch(pauseSong),
    fetchUser: id => dispatch(fetchUser(id)),
    deleteSong: id => dispatch(deleteSong(id)),
    updateSong: song => dispatch(updateSong(song)),
    openModal: (type, song) => dispatch(openModal(type, song))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserShow);
