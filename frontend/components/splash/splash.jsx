import React from 'react' 
import GreetingContainer from './greeting/greeting_container'
import {Route} from 'react-router-dom'


class Splash extends React.Component {

    constructor(props){
        super(props)
    }
    
    render() {
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

                        <button className='splash-upload-btn'>Start uploading today</button>
                    </div>

                    <div className='body-content'>
                        <div className='body-search'>
                            <div className='splash-search'>
                                <input className='search' type="text" placeholder="   Search for artists, bands, tracks, podcasts" />
                            </div>

                            <div className='or'>or</div>

                            <button className='splash-yourown-btn'>Upload your own</button>
                        </div>

                        <div className='body-text'>
                            Hear what’s trending for free in the JimmyJams community
                        </div>

                        <div className='splash-songs'>

                            <div className='splash-row'>
                                <div className='pic-area'>
                                    <div className='pic-splash'>
                                    </div>
                                    <p> No Role Modelz - J</p>
                                    <p className='section-body'>Related tracks</p>
                                </div>

                                <div className='pic-area'>
                                    <div className='pic-splash'>
                                    </div>
                                    <p> No Role Modelz - J</p>
                                    <p className='section-body'>Related tracks</p>
                                </div>

                                <div className='pic-area'>
                                    <div className='pic-splash'>
                                    </div>
                                    <p> No Role Modelz - J</p>
                                    <p className='section-body'>Related tracks</p>
                                </div>

                                <div className='pic-area'>
                                    <div className='pic-splash'>
                                    </div>
                                    <p> No Role Modelz - J</p>
                                    <p className='section-body'>Related tracks</p>
                                </div>

                                <div className='pic-area'>
                                    <div className='pic-splash'>
                                    </div>
                                    <p> No Role Modelz - J</p>
                                    <p className='section-body'>Related tracks</p>
                                </div>

                                <div className='pic-area'>
                                    <div className='pic-splash'>
                                    </div>
                                    <p> No Role Modelz - J</p>
                                    <p className='section-body'>Related tracks</p>
                                </div>

                            </div>


                        <div className='splash-row'>
                            <div className='pic-area'>
                                <div className='pic-splash'>
                                </div>
                                <p> No Role Modelz - J</p>
                                <p className='section-body'>Related tracks</p>
                            </div>

                            <div className='pic-area'>
                                <div className='pic-splash'>
                                </div>
                                <p> No Role Modelz - J</p>
                                <p className='section-body'>Related tracks</p>
                            </div>

                            <div className='pic-area'>
                                <div className='pic-splash'>
                                </div>
                                <p> No Role Modelz - J</p>
                                <p className='section-body'>Related tracks</p>
                            </div>

                            <div className='pic-area'>
                                <div className='pic-splash'>
                                </div>
                                <p> No Role Modelz - J</p>
                                <p className='section-body'>Related tracks</p>
                            </div>

                            <div className='pic-area'>
                                <div className='pic-splash'>
                                </div>
                                <p> No Role Modelz - J</p>
                                <p className='section-body'>Related tracks</p>
                            </div>

                            <div className='pic-area'>
                                <div className='pic-splash'>
                                </div>
                                <p> No Role Modelz - J</p>
                                <p className='section-body'>Related tracks</p>
                            </div>

                        </div>

                        <button className='splash-trending-btn'>Explore trending playlists</button>


                        </div>
                    </div>

                    <div className='bottom-content'>
                        
                    </div>

                </div>

        
        )
    }
}
    



export default Splash
