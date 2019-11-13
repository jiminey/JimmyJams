import { connect } from "react-redux";
import SongShow from "../song/song_show";
import { deleteSong, updateSong, fetchSong } from "../../actions/song_actions";
import { openModal } from "../../actions/modal_actions";
import { playSong, pauseSong } from "../../actions/audioplayer_actions";
import { createComment, deleteComment } from "../../actions/comment_action";
import { fetchAllUsers } from "../../actions/user_actions";

const mapStateToProps = (state, ownProps) => {
  let songId = ownProps.match.params.songId;
  let song = state.entities.songs[songId];
  return {
    users: state.entities.users,
    songUrl: state.player.songUrl,
    playState: state.player.playState,
    songList: state.player.songList,
    song,
    currentUser: state.session.currentUser,
    currentSong: state.entities.songs[state.player.songId],
    currentAudio: state.player.currentAudio,

    comments: state.entities.comments
  };
};

const mapDispatchToProps = dispatch => ({
  playSong: (song, audio) => dispatch(playSong(song, audio)),
  pauseSong: () => dispatch(pauseSong()),
  deleteSong: id => dispatch(deleteSong(id)),
  updateSong: song => dispatch(updateSong(song)),
  openModal: (type, song) => dispatch(openModal(type, song)),

  createComment: (comment, songId) => dispatch(createComment(comment, songId)),
  deleteComment: id => dispatch(deleteComment(id)),
  fetchSong: id => dispatch(fetchSong(id)),
  fetchAllUsers: () => dispatch(fetchAllUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(SongShow);
