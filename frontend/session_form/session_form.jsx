import React from "react";
import { withRouter } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props
      .processForm(user)
      .then(this.props.closeModal)
      .then(() => this.props.history.push("/main"));
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  async demoLogin(e) {
    e.preventDefault();

    if (this.props.formType === "Create Account") {
      this.props.openModal();
    }

    const demoUser = {
      username: "jimmythanhnguyen",
      password: "pleasehireme"
    };

    const sleep = ms => new Promise(res => setTimeout(res, ms));

    document.getElementById("username").focus();
    for (let i = 1; i <= demoUser.username.length; i++) {
      this.setState({ username: demoUser.username.substr(0, i) });
      await sleep(50);
    }

    await sleep(250);

    document.getElementById("password").focus();
    for (let i = 1; i <= demoUser.password.length; i++) {
      this.setState({ password: demoUser.password.substr(0, i) });
      await sleep(50);
    }

    await sleep(250);

    document.getElementById("session-submit-btn").click();
  }

  toggleAction() {
    if (this.props.formType === "Create Account") {
      return (
        <div>
          <p className="fine-print">
            If you already have an account with us you are able to{" "}
            {this.props.formType} here. We may use your email and devices for
            updates and tips on JimmyJams's products and services, and for
            activities notifications. You can unsubscribe for free at any time
            in your notification settings.
          </p>
          <br />
          <p className="fine-print">
            We may use information you provide us in order to show you targeted
            ads as described in our{" "}
            <span className="blue-hyperlink">Privacy Policy.</span>
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <p className="fine-print">
            If you do not already have an account with us you are able to{" "}
            {this.props.formType} here. We may use your email and devices for
            updates and tips on JimmyJams's products and services, and for
            activities notifications. You can unsubscribe for free at any time
            in your notification settings.
          </p>
          <br />
          <p className="fine-print">
            We may use information you provide us in order to show you targeted
            ads as described in our{" "}
            <span className="blue-hyperlink">Privacy Policy.</span>
          </p>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <button className="facebook-btn">Continue with Facebook</button>
          <br />
          <button className="demologin-btn" onClick={this.demoLogin}>
            Continue with Demo
          </button>
          <br />
          <p className="modal-break">or </p>
          <br />

          <br />
          {/* <div className='modal-escape'class onClick={this.props.closeModal} className="close-x">X</div> */}
          {this.renderErrors()}
          <div className="login-form">
            <br />
            <label>
              <input
                type="text"
                spellCheck="false"
                placeholder="Your username or Profile URL *"
                value={this.state.username}
                onChange={this.update("username")}
                className="login-input"
                id="username"
              />
            </label>
            <br />
            <label>
              <input
                type="password"
                placeholder="Enter your password here "
                value={this.state.password}
                onChange={this.update("password")}
                className="login-input"
                id="password"
              />
            </label>
            <br />
            <input
              className="session-submit"
              type="submit"
              value={this.props.formType}
              id="session-submit-btn"
            />
          </div>
          <br />
          <p className="blue-hyperlink-help">{this.props.otherForm}</p>
          <br />
          {this.toggleAction()}
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
