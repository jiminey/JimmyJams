import { connect } from 'react-redux';

import { fetchSong } from '../../actions/song_actions';
import SongShow from '../song/song_show'


const mapStateToProps = (state, ownProps) => {
    
    let songId = ownProps.match.params.songId
    let song = state.entities.song[songId]

    return ({
        song,
        currentUser: state.session.currentUser
    })
};

const mapDispatchToProps = dispatch => ({
    fetchSong: (id) => dispatch(fetchSong(id))
    
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SongShow);
