import { connect } from 'react-redux'
import { updateSong } from '../../../actions/song_actions'
import UpdateSongForm from '../song_form/update_song'


const mapStateToProps = ({ session }) => {

    return ({
        currentUser: session.id,

    })
}

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    updateSong: song => dispatch(updateSong(song))
})


export default connect(mapStateToProps, mapDispatchToProps)(UpdateSongForm)
