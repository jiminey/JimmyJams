import React from 'react'

class AudioPlayer extends React.Component {
    constructor(props){
        super(props)
    }


    render() {
        return (

            <div className='playbar'>
                
                <div className='playbar-left'>

                    <i class="fa fa-step-backward" aria-hidden="true"></i>
                    <i class="fa fa-play" aria-hidden="true"></i>
                    <i class="fa fa-step-forward" aria-hidden="true"></i>
                    <i class="fa fa-random" aria-hidden="true"></i>
                    <i class="fa fa-repeat" aria-hidden="true"></i>
                </div>


            </div>

        )
    }
}






export default AudioPlayer