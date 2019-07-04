import {Link} from 'react-router-dom'
import React from 'react'

class Greeting extends React.Component{

    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.logout()
    }

    render(){
        let { logout, currentUser } = this.props
         
        const personalGreeting = () => {
            return(
            <div>
                <h2>Hello, {currentUser.username} </h2>
                <button onClick={this.handleClick}>Log Out</button>
            </div>
            )
        }
        
        const sessionLinks = () => {
            
            return (
            <div className="sLinks">
                <div className="singin">
                    <Link to="/login">Sign In</Link> 
                </div>
                <div className="signup">
                    <Link to="/signup">Create Account</Link>   
                </div> 
                 <div className="demologin">
                    <p>Demo Login</p>
                </div> 
            </div>
        )
    }
    
    return currentUser ? personalGreeting() : sessionLinks();
    };
} 



export default Greeting