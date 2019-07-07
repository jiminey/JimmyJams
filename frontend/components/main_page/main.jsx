import React from 'react' 


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
                        <div className='header-logo'>LOGO</div>
                        <button className='home'>Home</button>
                        <button className='stream'>Stream</button>
                        <button className='library'>Library</button>
                    </div>

                    <div className='main-middle'>
                        <input className='search' type="text" placeholder="Search"/>
                    </div>

                    <div className='main-right'>
                        <div className='upgrade' >Upgrade</div>
                        <div className='upload'>Upload</div>
                        <div className='username'>Jimmy Nguyen</div>
                        <div className='bell'>Bell</div>
                        <div className='mail'>Mail</div>
                        <div className='dropdown'>. . .</div>
                    </div>

                </header>
            </div>
        ) 
    };
};



export default Main
