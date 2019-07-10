import React from 'react'
import { Link } from 'react-router-dom'
import SongIndexItem from '../song/song_index_item'

class CreateSong extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchAllSongs();
        this.props.fetchAllUsers();
    }


 render() {
        
        let songs1 = this.props.songs.sort(function () { return 0.5 - Math.random() }).slice(0, 6).map(song => {
            return (
                <div key={song.id}>
                    <SongIndexItem key={song.id} path={this.props.location.pathname} song={song} users={this.props.users} />
                </div>
            )
        });

        let songs2 = this.props.songs.sort(function () { return 0.5 - Math.random() }).slice(0, 12).map(song => {
            return (
                <div key={song.id}>
                    <SongIndexItem key={song.id} path={this.props.location.pathname} song={song} users={this.props.users} />
                </div>
            )
        });

        let songs3 = this.props.songs.sort(function () { return 0.5 - Math.random() }).slice(0, 4).map(song => {
            return (
                <div key={song.id}>
                    <SongIndexItem key={song.id} path={this.props.location.pathname} song={song} users={this.props.users} />
                </div>
            )
        });

        


        return (
            <div>
                <header className='main-navbar'>

                    <div className='main-left'>
                        <div className='header-logo'>
                            <Link to='/'>HOMEPAGE</Link>
                        </div>
                        <button className='home'>
                            <Link to='/main'>Home</Link>
                        </button>
                        <button className='stream'>Stream</button>
                        <button className='library'>
                            <Link to='/library'>Library</Link>
                        </button>
                    </div>

                    <div className='main-middle'>
                        <input className='search' type="text" placeholder="Search" />
                    </div>
                    <div>

                    </div>
                    <div className='main-right'>
                        <div className='upgrade' >Upgrade</div>
                        <div className='upload'>
                            <Link className='upload' to='/upload'>Upload</Link>
                        </div>
                        <div className='username'>Jimmy Nguyen</div>
                        <div className='bell'> </div>
                        <div className='mail'> </div>
                        <div className='dropdown'> . . .</div>

                    </div>
                </header>

                

                <div className='main-page-content'>

                    <div className='music-content'>

                        <div className='section'>

                            <div className='section-content'>
                                <h1 className='section-title'>JimmyJams Recently played</h1>
                                <h3 className='section-body'>The tracks you recently played </h3>

                                <div className='main-row'>
                                    {songs1}
                                </div>
                            </div>
                        </div>

                        <div className='section'>

                            <div className='section-content'>
                                <h1 className='section-title'>JimmyJams Likes</h1>
                                <h3 className='section-body'>The tracks you recently liked</h3>

                                <div className='main-row-lib'>
                                    {songs2}
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
        </div>
        )
    }
}



export default CreateSong