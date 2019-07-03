import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
        this.props.history.push('/')
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

    render() {
        return (
            <div>
                {this.renderErrors()}
                <h2>Welcome to the Form (in session_form.jsx)</h2>
                Please {this.props.formType} or {this.props.navLink}
                {this.renderErrors()}
                <form onSubmit={this.handleSubmit}>

                    <label>Username:
                        <input type="text"
                            value={this.state.username}
                            onChange={this.handleChange('username')}
                        />
                    </label>

                    <br/>
                    <label>Password:
                        <input type="password"
                            value={this.state.password}
                            onChange={this.handleChange('password')}
                        />
                    </label>

                    <br/>
                    <input type='submit' value={this.props.formType} />

                </form>
            </div>
        );
    }
}

export default SessionForm;