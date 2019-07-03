import Greeting from './greeting_container'

const Greeting = ({currentUser, logout}) => {

    const personalGreeting = () => (
        <div>
            <h2>Hello, {currentUser.username} </h2>
            <button onClick={(logout)}>Log Out</button>
        </div>
    )

    const sessionLinks = () => (
        <div>
            <Link to="/login"></Link> 
        </div>
    )

    return currentUser ? personalGreeting() : sessionLinks();
};



export default Greeting