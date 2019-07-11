import React from 'react';



const Greeting = ({ currentUser, logout, openModal }) => {

    const sessionLinks = () => (
        <nav className="login-signup">
            <button className='signin-btn' onClick={() => openModal('login')}>Sign In</button>
            &nbsp;&nbsp;
      <button className='signup-btn' onClick={() => openModal('signup')}>Create account</button>

        </nav>
    );
    const personalGreeting = () => (
        <hgroup className="header-group">

            <button className='signup-btn' onClick={logout}>Log out</button>
        </hgroup>
    );

    return (
        currentUser ?
            personalGreeting(currentUser, logout) :
            sessionLinks()
    );
};

export default Greeting;
