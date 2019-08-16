import React from 'react'
import {Link} from 'react-router-dom'
import SearchContainer from '../search/search_container'


class NavBar extends React.Component {
    constructor(props) {
        super(props)
        this.move = this.move.bind(this)
    }


    componentDidMount() {
        this.props.fetchAllUsers();
    }

    move() {
        this.props.history.push('/');
    }

    search() {

    }

    render() {
        return(
            <div>

                <header className='main-navbar'>

                    <div className='main-left'>
                        <div className='header-logo' onClick={() => this.move()}>

                        </div>

                        <button className='home'>
                            <Link className='home2' to='/main'>Home</Link>
                        </button>

                        <button className='stream'>Stream</button>
                        <button className='library'>
                            <Link to='/library'>Library</Link>
                        </button>
                    </div>

                    <div className='main-middle'>
                        {/* <input className='search' type="search" placeholder="Search" onChange={() => this.search()} /> */}
                        <SearchContainer/>
                    </div>

                    <div>

                    </div>

                    <div className='main-right'>
                        <div className='upgrade' >Upgrade</div>
                        <div className='upload'>
                            <Link className='upload' to='/upload'>Upload</Link>
                        </div>

                        <div className='username'>
                            {/* <Link to={`/users/${this.props.currentUser.id}`}>Jimmy Nguyen</Link> */}
                            Jimmy Nguyen
                        </div>

                        <div className='linked'> </div>
                        <div className='mail'> </div>
                        <div className='dropdown'> . . .</div>

                    </div>

                </header>
            </div>

        )
    }
}


export default NavBar