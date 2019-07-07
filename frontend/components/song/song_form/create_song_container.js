import {connect} from 'react-redux'
import {createSong} from '../../../actions/song_actions'
import CreateSongForm from '../song_form/create_song'

const mapStateToProps = ({session}) => {

    return ({
        currentUser: session.id,
        
    })
}
    
const mapDispatchToProps = dispatch => ({
    createSong: (song) => dispatch(createSong(song))
}) 


export default connect(mapStateToProps, mapDispatchToProps)(CreateSongForm)
