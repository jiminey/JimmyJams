import React from 'react' 
import {Link} from 'react-router-dom'


class Main extends React.Component {

    constructor(props){

        super(props)
        this.state = {

        };
    }

   
    render() {
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
                        <input className='search' type="text" placeholder="Search"/>
                    </div>
                <div>
                    
                </div>
                    <div className='main-right'>
                        <div className='upgrade' >Upgrade</div>
                        <div className='upload'>
                            <Link className='upload'to='/upload'>Upload</Link>
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
                            <h1 className='section-title'>New Music Now</h1>
                            <h3 className='section-body'>The latest hits, updated all the time</h3>
                        </div>
                        <div className='row'>

                            <div className='pic-area'> 
                                <div className='pic-main'>
                                </div>
                                    <p>SunFlower - Po..</p>
                                    <p className='section-body'>Related tracks</p>
                            </div>

                            <div className='pic-area'>
                                <div className='pic-main'>
                                </div>
                                <p>SunFlower - P</p>
                                <p className='section-body'>Related tracks</p>
                            </div>

                            <div className='pic-area'>
                                <div className='pic-main'>
                                </div>
                                <p>SunFlower - P</p>
                                <p className='section-body'>Related tracks</p>
                            </div>

                            <div className='pic-area'>
                                <div className='pic-main'>
                                </div>
                                <p>SunFlower - P</p>
                                <p className='section-body'>Related tracks</p>
                            </div>
                            
                        </div>
                    </div>

                    <div className='section'>
                        <div className='section-content'>
                            <h1 className='section-title'>JimmyJams Charts</h1>
                                <h3 className='section-body'>The most played tracks on JimmyJams this week</h3>
                        </div>
                        <div className='row'>
                            <div className='pic-area'>
                                <div className='pic-main'>
                                </div>
                                <p>SunFlower - Po..</p>
                                <p className='section-body'>Related tracks</p>
                            </div>

                            <div className='pic-area'>
                                <div className='pic-main'>
                                </div>
                                <p>SunFlower - P</p>
                                <p className='section-body'>Related tracks</p>
                            </div>

                            <div className='pic-area'>
                                <div className='pic-main'>
                                </div>
                                <p>SunFlower - P</p>
                                <p className='section-body'>Related tracks</p>
                            </div>

                            <div className='pic-area'>
                                <div className='pic-main'>
                                </div>
                                <p>SunFlower - P</p>
                                <p className='section-body'>Related tracks</p>
                            </div>
                        </div>
                    </div>

                    <div className='section'>
                        <div className='section-content'> 
                            <h1 className='section-title'>More of what you like</h1>
                                <h3 className='section-body'>Suggestions based on what you've liked or played</h3>
                        </div>
                        <div className='row'>
                            <div className='pic-area'>
                                <div className='pic-main'>
                                </div>
                                <p>SunFlower - Po..</p>
                                <p className='section-body'>Related tracks</p>
                            </div>

                            <div className='pic-area'>
                                <div className='pic-main'>
                                </div>
                                <p>SunFlower - P</p>
                                <p className='section-body'>Related tracks</p>
                            </div>

                            <div className='pic-area'>
                                <div className='pic-main'>
                                </div>
                                <p>SunFlower - P</p>
                                <p className='section-body'>Related tracks</p>
                            </div>

                            <div className='pic-area'>
                                <div className='pic-main'>
                                </div>
                                <p>SunFlower - P</p>
                                <p className='section-body'>Related tracks</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* music content */}



            <div className='main-col'>
                
                <div className='who-to-follow'>
                    <div className='wtf-title'>
                        <i className='wtf-text' class="fa fa-users" aria-hidden="true"> Who to follow</i>
                        <p>View All</p>
                    </div>

                <div className='display-threes'>
                    <div className='small-pic'> 
                        <p className='small-title'>
                        Logic
                        </p>
                        <p className='small-body'>
                            1-800-273-8255 (feat. A..)
                        </p>
                        <p className='icon' >
                            <i class="fa fa-play fa-xs" aria-hidden="true" > 61.5M </i>
                            <i class="fa fa-heart fa-xs" aria-hidden="true"> 743K </i>
                            <i class="fa fa-retweet fa-xs" aria-hidden="true"> 34.1K </i>
                            <i class="fa fa-comment fa-xs" aria-hidden="true"> 8,845 </i>
                        </p>
                    </div>
                    <div className='small-pic'> 
                        <p className='small-title'>
                        Logic
                        </p>
                        <p className='small-body'>
                            1-800-273-8255 (feat. A..)
                        </p>
                        <p className='icon' >
                            <i class="fa fa-play fa-xs" aria-hidden="true" > 61.5M </i>
                            <i class="fa fa-heart fa-xs" aria-hidden="true"> 743K </i>
                            <i class="fa fa-retweet fa-xs" aria-hidden="true"> 34.1K </i>
                            <i class="fa fa-comment fa-xs" aria-hidden="true"> 8,845 </i>
                        </p>
                    </div>
                    <div className='small-pic'> 
                        <p className='small-title'>
                        Logic
                        </p>
                        <p className='small-body'>
                            1-800-273-8255 (feat. A..)
                        </p>
                        <p className='icon' >
                            <i class="fa fa-play fa-xs" aria-hidden="true" > 61.5M </i>
                            <i class="fa fa-heart fa-xs" aria-hidden="true"> 743K </i>
                            <i class="fa fa-retweet fa-xs" aria-hidden="true"> 34.1K </i>
                            <i class="fa fa-comment fa-xs" aria-hidden="true"> 8,845 </i>
                        </p>
                    </div>
                </div>
                
                </div>

                <div className='who-to-follow'>
                    <div className='wtf-title'>
                        <i class="fa fa-heart" aria-hidden="true"> You might like</i>
                        <p>View All</p>
                    </div>

                    <div className='display-threes'>
                        <div className='small-pic'> 
                            <p className='small-title'>
                            Logic
                            </p>
                            <p className='small-body'>
                                1-800-273-8255 (feat. A..)
                            </p>
                            <p className='icon' >
                                <i class="fa fa-play fa-xs" aria-hidden="true" > 61.5M </i>
                                <i class="fa fa-heart fa-xs" aria-hidden="true"> 743K </i>
                                <i class="fa fa-retweet fa-xs" aria-hidden="true"> 34.1K </i>
                                <i class="fa fa-comment fa-xs" aria-hidden="true"> 8,845 </i>
                            </p>
                         </div>
                        <div className='small-pic'> 
                            <p className='small-title'>
                            Logic
                            </p>
                            <p className='small-body'>
                                1-800-273-8255 (feat. A..)
                            </p>
                            <p className='icon' >
                                <i class="fa fa-play fa-xs" aria-hidden="true" > 61.5M </i>
                                <i class="fa fa-heart fa-xs" aria-hidden="true"> 743K </i>
                                <i class="fa fa-retweet fa-xs" aria-hidden="true"> 34.1K </i>
                                <i class="fa fa-comment fa-xs" aria-hidden="true"> 8,845 </i>
                            </p>
                        </div>
                        <div className='small-pic'> 
                            <p className='small-title'>
                            Logic
                            </p>
                            <p className='small-body'>
                                1-800-273-8255 (feat. A..)
                            </p>
                            <p className='icon' >
                                <i class="fa fa-play fa-xs" aria-hidden="true" > 61.5M </i>
                                <i class="fa fa-heart fa-xs" aria-hidden="true"> 743K </i>
                                <i class="fa fa-retweet fa-xs" aria-hidden="true"> 34.1K </i>
                                <i class="fa fa-comment fa-xs" aria-hidden="true"> 8,845 </i>
                            </p>
                        </div>
                    </div>
                </div>

                <div className='who-to-follow'>
                    <div className='wtf-title'>
                        <i class="fa fa-calendar" aria-hidden="true"> Listening history</i>
                        <p>View All</p>
                    </div>

                    <div className='display-threes'>
                        <div className='small-pic'> 
                            <p className='small-title'>
                            Logic
                            </p>
                            <p className='small-body'>
                                1-800-273-8255 (feat. A..)
                            </p>
                            <p className='icon' >
                                <i class="fa fa-play fa-xs" aria-hidden="true" > 61.5M </i>
                                <i class="fa fa-heart fa-xs" aria-hidden="true"> 743K </i>
                                <i class="fa fa-retweet fa-xs" aria-hidden="true"> 34.1K </i>
                                <i class="fa fa-comment fa-xs" aria-hidden="true"> 8,845 </i>
                            </p>
                         </div>
                        <div className='small-pic'> 
                            <p className='small-title'>
                            Logic
                            </p>
                            <p className='small-body'>
                                1-800-273-8255 (feat. A..)
                            </p>
                            <p className='icon' >
                                <i class="fa fa-play fa-xs" aria-hidden="true" > 61.5M </i>
                                <i class="fa fa-heart fa-xs" aria-hidden="true"> 743K </i>
                                <i class="fa fa-retweet fa-xs" aria-hidden="true"> 34.1K </i>
                                <i class="fa fa-comment fa-xs" aria-hidden="true"> 8,845 </i>
                            </p>
                        </div>
                        <div className='small-pic'> 
                            <p className='small-title'>
                            Logic
                            </p>
                            <p className='small-body'>
                                1-800-273-8255 (feat. A..)
                            </p>
                            <p className='icon' >
                                <i class="fa fa-play fa-xs" aria-hidden="true" > 61.5M </i>
                                <i class="fa fa-heart fa-xs" aria-hidden="true"> 743K </i>
                                <i class="fa fa-retweet fa-xs" aria-hidden="true"> 34.1K </i>
                                <i class="fa fa-comment fa-xs" aria-hidden="true"> 8,845 </i>
                            </p>
                        </div>
                    </div>
                </div>

                <div className='go-mobile'>
                    <div className='wtf-title'>
                        <p>Go mobile</p>
                        <p>View All</p>
                    </div>
                </div>

            </div>

            </div> 
            {/* main page content */}
        </div>
        ) 
    };
};



export default Main
