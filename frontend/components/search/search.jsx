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
        this.props.getSearchResults(e.target.value)
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
                        <Link to={`/songs/${result.id}`}>
                            <div>{result.title}</div>
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
                            className="search"
                            value={this.state.value} />
                    </form>
                    <ul>
                        <li>
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
                            className="search"
                            value={this.state.value} />
                    </form>
                    <ul>
                        {results}
                    </ul>
                </div>
            )
        }

        return (
            <div>
                <form className="main-middle">
                    <input onClick={this.handleClick}
                        onChange={this.handleSearch}
                        type="search" placeholder="Search by song title"
                        className="search"
                        value={this.state.value} />
                </form>
                <ul>
                    {results}
                </ul>
            </div>
        )
    }
}

export default Search;