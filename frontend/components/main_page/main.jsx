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
                        <div className='header-logo'>
                        </div>
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
                        <div className='bell'> </div>
                        <div className='mail'> </div>
                        <div class="dropdown">
                            <button onclick="myFunction()" class="dropbtn">. . .</button>
                            <div id="myDropdown" class="dropdown-content">
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div>
                        </div>

                    </div>

                </header>
            </div>
        ) 
    };
};



export default Main
