import React from "react";
import { Link } from "react-router-dom";
import SearchContainer from "../search/search_container";
import { withRouter } from "react-router";
import { Route } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.buttons = this.buttons.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllUsers();
  }

  logout() {
    this.props.history.push("/");
    this.props.logout();
  }

  buttons() {
    let pic;

    if (this.props.currentUser) {
      pic = this.props.currentUser.photoUrl;
    } else {
      pic =
        "https://github.com/jiminey/JimmyJams/blob/master/app/assets/images/profilepic.png?raw=true";
    }

    if (this.props.currentUser) {
      return (
        <div>
          <div className="navbar-user">
            <img className="prof-pic" src={pic} alt="" />

            <Link
              to={`/users/${this.props.currentUser.id}`}
              className="username"
            >
              {this.props.currentUser.username}
            </Link>
          </div>

          <div className="header-group">
            <button className="logout-btn" onClick={() => this.logout()}>
              Log out
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <nav className="login-signup2">
            <button
              className="signin-btn2"
              onClick={() => this.props.openModal("login")}
            >
              Sign In
            </button>
            &nbsp;&nbsp;
            <button
              className="signup-btn2"
              onClick={() => this.props.openModal("signup")}
            >
              Create account
            </button>
          </nav>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <header className="main-navbar">
          <div className="main-nav-content">
            <div className="main-left">
              <div className="header-logo" onClick={this.move}></div>

              <button className="home">
                <Link className="home2" to="/main">
                  Home
                </Link>
              </button>

              <button className="stream">Stream</button>
              <button className="library">
                <Link to="/library">Library</Link>
              </button>
            </div>

            <div className="main-middle">
              <SearchContainer />
            </div>

            <div></div>

            <div className="main-right">
              <div className="upgrade">Upgrade</div>
              <div className="upload">
                <Link className="upload" to="/upload">
                  Upload
                </Link>
              </div>

              {this.buttons()}
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default withRouter(NavBar);
