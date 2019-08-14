import React from 'react';
import { Link } from 'react-router-dom';


class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            loggedIn: this.props.loggedIn
        }
        this.handleSearch = this.handleSearch.bind(this);
        this.handleResultClick = this.handleResultClick.bind(this);
    }

    handleSearch(e) {
        e.preventDefault();
        this.setState({ value: e.target.value });
        this.props.receiveSearchResults(e.target.value)
    }

    handleClick(e) {
        e.preventDefault();
    }

    handleResultClick(e) {
        e.preventDefault();
        this.setState({ value: '' });
    }

    render() {
        let results
        if (this.props.results.length && this.state.value !== '') {
            results = this.props.results.map(result => {
                return (
                    <li className="result-li" key={result.id} onClick={this.handleResultClick}>
                        <Link to={`/teams/${result.id}`} style={{ textDecoration: 'none', color: 'black' }} id="search-link">
                            <div id="search-result-team">{result.title}</div>
                        </Link>
                    </li>
                )
            })
        }

        if (this.props.results.length === 0 && this.state.value !== '') {
            return (
                <div>
                    <form className="main-middle">
                        <input onClick={this.handleClick}
                            onChange={this.handleSearch}
                            type="search" placeholder="Search by song title"
                            className="search-input"
                            value={this.state.value} />
                    </form>
                    <ul className="result-drop-ul">
                        <li className="result-li">
                            No results found
                        </li>
                    </ul>
                </div>
            )
        }

        if (this.props.results.length > 0 && this.state.value === '') {
            return (
                <div>
                    <form className="main-middle">
                        <input onClick={this.handleClick}
                            onChange={this.handleSearch}
                            type="search" placeholder="Search by song title"
                            className="search-input"
                            value={this.state.value} />
                    </form>
                    <ul className="result-drop-ul">
                        {/* <li className="result-li">
                        </li> */}
                    </ul>
                </div>
            )
        }

        return (
            <div className="main-middle">
                <form className="main-middle">
                    <input onClick={this.handleClick}
                        onChange={this.handleSearch}
                        type="search" placeholder="Search by team"
                        className="search-input"
                        value={this.state.value} />
                </form>
                <ul className="result-drop-ul">
                    {results}
                </ul>
            </div>
        )
    }
}

export default Search;