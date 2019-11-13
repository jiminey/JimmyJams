import { connect } from "react-redux";
import { getSearchResults } from "../../actions/search_actions";
import Search from "./search";

const mapStateToProps = state => {
  return {
    results: state.results,
    loggedIn: Boolean(state.session.id)
  };
};

const mapDispatchToProps = dispatch => ({
  getSearchResults: results => dispatch(getSearchResults(results))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
