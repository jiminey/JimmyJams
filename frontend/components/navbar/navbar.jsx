import React from 'react'
import {Link} from 'react-router-dom'
import SearchContainer from '../search/search_container'
import { withRouter } from 'react-router'
import { Route } from 'react-router-dom'

class NavBar extends React.Component {
    constructor(props) {
        super(props)
        this.move = this.move.bind(this)
    }


    componentDidMount() {
        this.props.fetchAllUsers();
    }

    move() {
        // this.props.history.push('/');
    }

    search() {

    }

    render() {
        let pic;

        if (this.props.currentUser.photoUrl) {
            pic = this.props.currentUser.photoUrl
        } else {
            pic = "https://github.com/jiminey/JimmyJams/blob/master/app/assets/images/profilepic.png"
        }
        return(
            <div>

                <header className='main-navbar'>
            
                    <div className='main-left'>
                        <div className='header-logo' onClick={this.move}>
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
                        
                        <img className='prof-pic' src={pic} alt=""/>


                        <div className='username'>
                            {this.props.currentUser.username}
                        </div>
                        

                        <div className="header-group">

                        </div>

                    </div>

                </header>
            </div>

        )
    }
}


export default withRouter(NavBar)