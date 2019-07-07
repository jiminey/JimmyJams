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
            <h2 className="header-name">Hi, {currentUser.username}!</h2>
            <button className="header-button" onClick={logout}>Log Out</button>
        </hgroup>
    );

    return (
        currentUser ?
            personalGreeting(currentUser, logout) :
            sessionLinks()
    );
};

export default Greeting;
