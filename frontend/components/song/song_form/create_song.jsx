import React from 'react'
import {Link} from 'react-router-dom'
import AudioPlayerContainer from '../../audioplayer/audioplayer_container'
import NavBarContainer from '../../navbar/navbar_container'
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
        this.showname = this.showname.bind(this);

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


        this.props.createSong(formData).then( res => this.props.history.push(`/library`) )

    }
    
    handleAlbumCover(e) {
        let reader = new FileReader();
        let file = e.currentTarget.files[0];
        
        reader.onloadend = () =>
        this.setState({ album_coverUrl: reader.result, album_coverFile: file });
    
        if (file) {
            reader.readAsDataURL(file);
        } 

        var name = document.getElementById('fileInput');
        alert('Selected file name: ' + e.currentTarget.files.item(0).name + ' ' + e.currentTarget.files.item(0).type)
    }

    handleSongFile(e) {
        let reader = new FileReader();
        let file = e.currentTarget.files[0];

        reader.onloadend = () =>
            this.setState({ song_fileUrl: reader.result, song_fileFile: file });

        if (file) {
            reader.readAsDataURL(file);
        }
        alert('Selected file: ' + e.currentTarget.files.item(0).name + '  ' + e.currentTarget.files.item(0).type)
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
                    <div> <input className='form-upload-btn' type="submit" value="Upload" /></div>
                </div>
            )
        }
    }

    showname() {
        
    };


    render () {
        return (
            <div>
                
                <NavBarContainer/>

                <div className='upload-main'>
                    <div className='upload-size'>
                        <input type="submit" value="Upload a track cover" className='upl-btns'/>
                        
                        <input type="submit" value="Upload an audio file" className='upl-btns2'/>
                        
                    <form onSubmit={this.handleSubmit} >
                        <div className='form-content' >
                            <h1 className='fh1'>Choose and upload your tracks and albums here</h1>
                            <br />
                            <label>Title:
                                <input
                                    className='artist-input'
                                    onChange={this.handleChange('title')}
                                    type="text"
                                    placeholder='  Enter the title of the track'
                                    
                                    />
                            </label>
                            <br />
                            <label>Artist:
                                <input
                                    className='artist-input'
                                    onChange={this.handleChange('artist')}
                                    type="text"
                                    placeholder="  Enter the name of artist"
                                    
                                    />
                            </label>
                            <br />
                            <input  
                                className='image-btn'
                                onChange={this.handleAlbumCover}
                                type="file"
                                accept='image/*'
                                id="fileInput"
                                />
                            <input
                                className='file-btn'
                                onChange={this.handleSongFile}
                                type="file"
                                accept='audio/*'
                                id="fileInput"
                                />
                            
                            
                                {this.loading()}
                    


                        </div>
                     
                    </form>
                    
                    <p className='fine-print-upload'>
                            Provide FLAC, WAV, ALAC or AIFF for best audio quality. <span className='blue-hyperlink-upload'> Learn more about high quality audio (HQ).</span>
                    </p>
    
                </div>

                    <p className='fine-print-under'>
                        <span className='blue-hyperlink-upload'> Supported file types and sizes </span>
                        ⁃ <span className='blue-hyperlink-upload'> Upload troubleshooting tips  </span>
                        ⁃ <span className='blue-hyperlink-upload'> Copyright FAQs </span>
                    </p>
                    <p className='fine-print-under1'>
                        By uploading, you confirm that your sounds comply with our
                        ⁃ <span className='blue-hyperlink-upload'> Terms of Use </span>
                        and you don't infringe anyone else's rights.
                    </p>

                    <p className='fine-print-under2'>
                        <span> Legal </span> 
                        ⁃
                        <span> Privacy </span>
                        ⁃
                        <span> Cookies </span>
                        ⁃
                        <span> Imprints </span>
                        ⁃
                        <span> Charts </span>
                        ⁃
                        <span> Popular searches </span>
                    </p>

                    <p  className='fine-print-under3' > 
                        <span className='blue-hyperlink-upload'>Language: </span>
                         English (US)
                    </p>
            </div>

                <AudioPlayerContainer /> 

            </div>
        )
    }
}



export default CreateSong