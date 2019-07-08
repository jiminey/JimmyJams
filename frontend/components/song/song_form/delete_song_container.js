import { connect } from 'react-redux'
import { deleteSong } from '../../../actions/song_actions'
import DeleteSongForm from '../song_form/delete_song'


const mapStateToProps = ({ session }) => {

    return ({
        currentUser: session.id,

    })
}

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    deleteSong: id => dispatch(deleteSong(id))
})


export default connect(mapStateToProps, mapDispatchToProps)(DeleteSongForm)
