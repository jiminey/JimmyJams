import React from 'react' 
import GreetingContainer from './greeting/greeting_container'
import {Route} from 'react-router-dom'
import SongIndexItem from '../song/song_index_item'
import AudioPlayerContainer from '../audioplayer/audioplayer_container'



class Splash extends React.Component {

    constructor(props){
        super(props)
        this.move = this.move.bind(this)
    }

    componentDidMount() {
        this.props.fetchAllSongs();
        this.props.fetchAllUsers();
    }

    move(e) {
        this.props.history.push('/library')
    }
    
    render() {
        
        let songs = this.props.songs.slice(0, 12).map( song => {
            return (
                <div key={song.id}>
                    <SongIndexItem key={song.id} path={this.props.location.pathname} song={song} users={this.props.users} />
                </div>
            )
        });


        return ( 
                <div className='main-content'>

                    <header className='splash-header'>
                        <div className='splash-nav-left'>
                            <img className='logo-pic' src="whitecloudlogo.png" alt='lost picture' />
                            <p className='logo-word'>JimmyJams</p>
                        </div>
                        <div>
                            <Route exact path='/' component={GreetingContainer} />  
                        </div>
                    </header>

                    <div className='banner' >
                        <h2 className='banner-main-text'>What's next in music is first on JimmyJams</h2>

                        <h3 className='banner-text'>Upload your first track and begin your journey. JimmyJams
                                gives <br /> you space to create, find your fans, and
                                connect with other <br /> artists.</h3>

                    <button className='splash-upload-btn' onClick={() => this.props.openModal('login')} >Start uploading today</button>
                    </div>

                    <div className='body-content'>
                        <div className='body-search'>
                            <div className='splash-search'>
                                <input className='search' type="text" placeholder="   Search for artists, bands, tracks, podcasts" />
                            </div>

                            <div className='or'>or</div>

                        <button className='splash-yourown-btn' onClick={() => this.props.openModal('login')} >Upload your own</button>
                        </div>

                        <div className='body-text'>
                            Hear what’s trending for free in the JimmyJams community
                        </div>

                        <div className='splash-songs'>

                            <div className='splash-rows'>
                                {songs}
                            </div>

                        <button className='splash-trending-btn' onClick={() => this.props.openModal('login')} >Explore trending playlists</button>


                        </div>
                    </div>

                    <div className='bottom-content'>
                        
                    </div>
                
                <AudioPlayerContainer/>
            </div>

        )
    }
}




export default Splash
