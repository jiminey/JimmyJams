import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(this.props.closeModal);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    async demoLogin(e) {
        e.preventDefault();

        const demoUser = {
            username: 'jimmythanhnguyen',
            password: 'pleasehireme'
        };

        const sleep = ms => new Promise(res => setTimeout(res, ms));

        document.getElementById('username').focus();
        for (let i = 1; i <= demoUser.username.length; i++) {
            this.setState({ username: demoUser.username.substr(0, i) });
            await sleep(50);
        }

        await sleep(250);

        document.getElementById('password').focus();
        for (let i = 1; i <= demoUser.password.length; i++) {
            this.setState({ password: demoUser.password.substr(0, i) });
            await sleep(50);
        }

        await sleep(250);

        document.getElementById('session-submit-btn').click();
    }

    render() {
        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <button className='facebook-btn' onClick={this.demoLogin}>Continue with Facebook</button>
                    <br />
                    <button className='demologin-btn'onClick={this.demoLogin}>Continue with Demo</button>
                    <br />
                    <p>or </p>
                    <br />

          <br />
                    {/* <div className='modal-escape'class onClick={this.props.closeModal} className="close-x">X</div> */}
                    {this.renderErrors()}
                    <div className="login-form">
                        <br />
                        <label>
                            <input type="text" placeholder="Your username or Profile URL *"
                                value={this.state.username}
                                onChange={this.update('username')}
                                className="login-input"
                                id="username"
                            />
                        </label>
                        <br />
                        <label>
                            <input type="password" placeholder="Password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                                id="password"
                            />
                        </label>
                        <br />
                        <input className="session-submit" type="submit" value={this.props.formType} id='session-submit-btn'/>
                    </div>
                    <br />
                        <p className='fine-print'>We may use your email and devices for updates and tips on SoundCloud's products and services, and for activities notifications. You can unsubscribe for free at any time in your notification settings.

We may use information you provide us in order to show you targeted ads as described in our Privacy Policy.</p>
                </form>
            </div>
        );
    }
}

export default withRouter(SessionForm);
