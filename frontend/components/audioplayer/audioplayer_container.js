import { connect } from 'react-redux';
import AudioPlayer from './audioplayer';
import {playSong, pauseSong, resume} from '../../actions/audioplayer_actions'


const msp = state => ({
   songUrl : state.player.songUrl ,
   playState: state.player.playState,
   currentSong: state.entities.songs[state.player.songId],
   songList: state.player.songList
});

const mdp = dispatch => ({

    playSong: (songUrl) => dispatch(playSong(songUrl)),
    pauseSong: () => dispatch(pauseSong()), 
    resume: () => dispatch(resume())
});

export default connect(msp, mdp)(AudioPlayer);