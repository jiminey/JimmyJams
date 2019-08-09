import { connect } from 'react-redux';

import Button from './button'
import { playSong, pauseSong } from '../../actions/audioplayer_actions'


const mapStateToProps = (state, ownProps) => {
    let songId = 0;
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
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Button);
