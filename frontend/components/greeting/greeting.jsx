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
            <div className='splash-buttons'>

                <button className='signin'>  
                    <Link to="/login">Sign In</Link> 
                </button>
                
               <button className='create-account'>
                    <Link to="/signup">Create Account</Link>   
               </button>
                
                 <button className='demo-login'>
                    Demo Login 
                 </button>

            </div>
        )
    }
    
    return currentUser ? personalGreeting() : sessionLinks();
    };
} 



export default Greeting