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
                <button onClick={this.handleClick}>Log Out</button>
            </div>
            )
        }
        
        const sessionLinks = () => {
            
            return (
            <div className='splash-buttons'>

                <div>  
                    <Link className='signin' to="/login">Sign In</Link> 
                </div>
                
               <div>
                    <Link className='create-account' to="/signup">Create Account</Link>   
               </div>
                
                 <button className='demo-login'>
                    <p>Demo Login </p>
                 </button>

            </div>
        )
    }
    
    return currentUser ? personalGreeting() : sessionLinks();
    };
} 



export default Greeting