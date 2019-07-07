import React from 'react'
import {Link} from 'react-router-dom'

class CreateSong extends React.Component {
    constructor(props){
        super(props)
        this.state = { 
            title: '', 
            albumCoverURL: null, 
            albumCoverFile: null, 
            song_fileURL: null, 
            song_file: null, 
            loading: false 
        };
    }





    render () {
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

                <div upload-form-content>
                    <form >
                        <div >
                            <br />
                            <label> Title
                                <input
                                    type="text"
                                    placeholder='HELLO'
                        
                                />
                            </label>
                            <br />
                            <label> Artist
                                <input
                                    type="text"
                                    placeholder="Enter your password here "
                                
                                />
                            </label>
                            <br />
                            <input
                                type="submit"
                                value='choose files to upload'
                            />
                        </div>
                        <br />
                        <p className='blue-hyperlink-help'>Need help?</p>
                        <br />
                        <p className='fine-print'>
                            We may use your email and devices
                            for updates and tips on SoundCloud's
                            products and services,
                            and for activities notifications.
                            You can unsubscribe for free at any time in your
                        notification settings.</p>
                        <br />
                        <p className='fine-print'>We may use information you provide us in
                        order to show you targeted ads as described
                        in our <span className='blue-hyperlink'>Privacy Policy.</span></p>
                    </form>
                </div>
            </div>
        )
    }
}



export default CreateSong