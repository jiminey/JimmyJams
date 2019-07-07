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
                        <div className='splash-search'>
                        <input className='search' type="text" placeholder="Search for artists, bands, tracks, podcasts" />
                        </div>

                    </div>

                </div>

        
        )
    }
}
    



export default Splash
