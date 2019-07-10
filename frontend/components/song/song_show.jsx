import React from 'react'
import {Link} from 'react-router-dom'

class SongShow extends React.Component {
    constructor(props){
        super(props)

        this.state = this.props.song
    };

    componentDidMount() {
        let songId = this.props.match.params.songId ;
        this.props.fetchSong(songId);
    }


    render() {
        
        if (!this.props.song){
            return null;
        }
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






                <div className='show-body'>


                   <div className='show-top'>


                       <div className='show-top-left'>

                       </div>


                       <div className='show-top-left'>

                       </div>

                       
                   </div>



                   <div className='show-bottom'>

                   </div>


                </div> 


            </div>

        )
    };
    
    
};


export default SongShow