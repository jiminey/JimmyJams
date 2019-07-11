import React from 'react'

class AudioPlayer extends React.Component {
    constructor(props){
        super(props)
    }


    render() {
        return (

            <div className='playbar'>
                
                <div className='playbar-sub'>
                    <div className='playbar-left'>
                    

                        <div className='p1'>
                            <i class="fa fa-step-backward" aria-hidden="true"></i>
                        </div>

                        <div className='p2'>
                            <i class="fa fa-play" aria-hidden="true"></i>
                        </div>

                        <div className='p3'>
                            <i class="fa fa-step-forward" aria-hidden="true"></i>
                        </div>

                      

                    </div>

                </div>

            </div>

        )
    }
}






export default AudioPlayer