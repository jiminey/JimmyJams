import React from 'react'


class WaveForm extends React.Component {
    constructor(props) {
        super(props)

        this.waveRef = React.createRef();
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            loading: true,
            width: 800,
            loaderPosition: 0,
            loadingDirection: -1,
        }
    }
}




export default WaveForm;