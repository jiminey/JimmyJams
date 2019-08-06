import { connect } from 'react-redux';

import { fetchSong } from '../../actions/song_actions';
import SongShow from '../song/song_show'
import {deleteSong, updateSong} from '../../actions/song_actions'
import {openModal} from '../../actions/modal_actions'
import {playSong, pauseSong} from '../../actions/audioplayer_actions'


const mapStateToProps = (state, ownProps) => {
    
    
    let songId = ownProps.match.params.songId;
    let song = state.entities.songs[songId];
    return ({
        songUrl: state.player.songUrl,
        playState: state.player.playState,
        songList: state.player.songList,
        song,
        currentUser: state.session.currentUser,
        currentSong: state.entities.songs[state.player.songId],
    })
};

const mapDispatchToProps = dispatch => ({
    playSong: (song, audio) => dispatch(playSong(song, audio)),
    pauseSong: () => dispatch(pauseSong()), 
    fetchSong: (id) => dispatch(fetchSong(id)),
    deleteSong: id => dispatch(deleteSong(id)),
    updateSong: song => dispatch(updateSong(song)),
    openModal: (type, song) => dispatch(openModal(type, song))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SongShow);
