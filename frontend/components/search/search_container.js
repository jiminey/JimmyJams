import { connect } from 'react-redux';
import { receiveSearchResults } from '../../actions/search_actions';
import Search from './search';

const mapStateToProps = (state) => {

    return {
        results: state.results,
        loggedIn: Boolean(state.session.id)
    }
}

const mapDispatchToProps = dispatch => ({
    receiveSearchResults: (results) => dispatch(receiveSearchResults(results))
})

export default connect(mapStateToProps, mapDispatchToProps)(Search); 