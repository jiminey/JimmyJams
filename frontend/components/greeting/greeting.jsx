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
                <div>
            <Link to="/login">Log In</Link> 
            <Link to="/signup">Sign Up</Link> 
            </div>
        )
    }
    
    return currentUser ? personalGreeting() : sessionLinks();
    };
} 



export default Greeting