import React from 'react'
import {Link} from 'react-router-dom'
import AudioPlayerContainer from '../../audioplayer/audioplayer_container'

class CreateSong extends React.Component {
    constructor(props){
        super(props)
        this.state = { 
            title: '', 
            artist: '',
            album_coverUrl: null, 
            album_coverFile: null, 
            song_fileUrl: null, 
            song_fileFile: null,
            loading: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAlbumCover = this.handleAlbumCover.bind(this);
        this.handleSongFile = this.handleSongFile.bind(this);
        this.loading = this.loading.bind(this);

    }


    handleSubmit(e) {
        e.preventDefault();
        this.setState({ loading: true });

        const formData = new FormData();
        formData.append('song[title]', this.state.title);
        formData.append('song[artist]', this.state.artist);
        if (this.state.album_coverFile) {

            formData.append('song[album_cover]', this.state.album_coverFile);
        }

        if (this.state.song_fileFile) {
            formData.append('song[song_file]', this.state.song_fileFile);
        }


        this.props.createSong(formData).then( res => this.then.history.push(`/library`) )

    }
    
    handleAlbumCover(e) {
        let reader = new FileReader();
        let file = e.currentTarget.files[0];
        
        reader.onloadend = () =>
        this.setState({ album_coverUrl: reader.result, album_coverFile: file });
    
        if (file) {
            reader.readAsDataURL(file);
        } 

    }

    handleSongFile(e) {
        let reader = new FileReader();
        let file = e.currentTarget.files[0];

        reader.onloadend = () =>
            this.setState({ song_fileUrl: reader.result, song_fileFile: file });

        if (file) {
            reader.readAsDataURL(file);
        }
    
    }

    handleChange(field) {
        return e => (
            this.setState({[field]: e.currentTarget.value})
        )
    }


    loading() {
        if (this.state.loading === true) {
            return (
                <div>
                   <div><i className="fas fa-spinner fa-spin"></i> Uploading...</div>
                </div>
            )
        } else {
            return (
                <div>
                    <div> <input type="submit" value="Upload" /></div>
                </div>
            )
        }
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

                <div>
                    <form onSubmit={this.handleSubmit} >
                        <div >
                            <br />
                            <label> Title
                                <input
                                    onChange={this.handleChange('title')}
                                    type="text"
                                    placeholder='Enter song title'
                        
                                />
                            </label>
                            <br />
                            <label> Artist
                                <input
                                    onChange={this.handleChange('artist')}
                                    type="text"
                                    placeholder="Enter name of artist"
                                
                                />
                            </label>
                            <br />
                            <input
                                onChange={this.handleAlbumCover}
                                type="file"
                                accept='image/*'
                            />
                            <input
                                onChange={this.handleSongFile}
                                type="file"
                                accept='audio/*'
                            />
                            
                            
                                {this.loading()}
                    


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

                <AudioPlayerContainer /> 

            </div>
        )
    }
}



export default CreateSong