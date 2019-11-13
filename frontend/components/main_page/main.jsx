import React from "react";
import { Link } from "react-router-dom";
import SongIndexItem from "../song/song_index_item";
import AudioPlayerContainer from "../audioplayer/audioplayer_container";
import NavBarContainer from "../navbar/navbar_container";
import UserIndexItem from "../user/user_index_item";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.toggleSongsRight1 = this.toggleSongsRight1.bind(this);
    this.toggleSongsLeft1 = this.toggleSongsLeft1.bind(this);
    this.toggleSongsRight2 = this.toggleSongsRight2.bind(this);
    this.toggleSongsLeft2 = this.toggleSongsLeft2.bind(this);
    this.toggleSongsRight3 = this.toggleSongsRight3.bind(this);
    this.toggleSongsLeft3 = this.toggleSongsLeft3.bind(this);
    this.state = {
      right1: 0,
      right2: 0,
      right3: 0
    };
  }

  componentDidMount() {
    this.props.fetchAllSongs();
    this.props.fetchAllUsers();
  }

  toggleSongsRight1(e) {
    let set1 = document.getElementById("set1");
    set1.style.right = "530px";
    this.setState(prevState => {
      return {
        right1: prevState.right1 + 1
      };
    });
  }

  toggleSongsLeft1(e) {
    let set1 = document.getElementById("set1");
    set1.style.right = "0px";
    this.setState(prevState => {
      return {
        right1: prevState.right1 - 1
      };
    });
  }

  renderLeft1(e) {
    if (this.state.right1 > 0) {
      return (
        <div>
          <div
            className="arrow-padding-left"
            onClick={this.toggleSongsLeft1}
          ></div>
          <img
            className="car-arrow-left"
            src="https://github.com/jiminey/JimmyJams/blob/master/app/assets/images/leftarr.png?raw=true"
            alt=""
          />
        </div>
      );
    }
  }
  renderRight1(e) {
    if (this.state.right1 === 0) {
      return (
        <div>
          <div
            className="arrow-padding-right"
            onClick={this.toggleSongsRight1}
          ></div>
          <img
            className="car-arrow"
            src="https://github.com/jiminey/JimmyJams/blob/master/app/assets/images/rightarr.png?raw=true"
            alt=""
          />
        </div>
      );
    }
  }

  toggleSongsRight2(e) {
    let set2 = document.getElementById("set2");
    set2.style.right = "530px";
    this.setState(prevState => {
      return {
        right2: prevState.right2 + 1
      };
    });
  }

  toggleSongsLeft2(e) {
    let set2 = document.getElementById("set2");
    set2.style.right = "0px";
    this.setState(prevState => {
      return {
        right2: prevState.right2 - 1
      };
    });
  }

  renderLeft2(e) {
    if (this.state.right2 > 0) {
      return (
        <div>
          <div
            className="arrow-padding-left"
            onClick={this.toggleSongsLeft2}
          ></div>
          <img
            className="car-arrow-left"
            src="https://github.com/jiminey/JimmyJams/blob/master/app/assets/images/leftarr.png?raw=true"
            alt=""
          />
        </div>
      );
    }
  }
  renderRight2(e) {
    if (this.state.right2 === 0) {
      return (
        <div>
          <div
            className="arrow-padding-right"
            onClick={this.toggleSongsRight2}
          ></div>
          <img
            className="car-arrow"
            src="https://github.com/jiminey/JimmyJams/blob/master/app/assets/images/rightarr.png?raw=true"
            alt=""
          />
        </div>
      );
    }
  }

  toggleSongsRight3(e) {
    let set3 = document.getElementById("set3");
    set3.style.right = "530px";
    this.setState(prevState => {
      return {
        right3: prevState.right3 + 1
      };
    });
  }

  toggleSongsLeft3(e) {
    let set3 = document.getElementById("set3");
    set3.style.right = "0px";
    this.setState(prevState => {
      return {
        right3: prevState.right3 - 1
      };
    });
  }

  renderLeft3(e) {
    if (this.state.right3 > 0) {
      return (
        <div>
          <div
            className="arrow-padding-left"
            onClick={this.toggleSongsLeft3}
          ></div>
          <img
            className="car-arrow-left"
            src="https://github.com/jiminey/JimmyJams/blob/master/app/assets/images/leftarr.png?raw=true"
            alt=""
          />
        </div>
      );
    }
  }
  renderRight3(e) {
    if (this.state.right3 === 0) {
      return (
        <div>
          <div
            className="arrow-padding-right"
            onClick={this.toggleSongsRight3}
          ></div>
          <img
            className="car-arrow"
            src="https://github.com/jiminey/JimmyJams/blob/master/app/assets/images/rightarr.png?raw=true"
            alt=""
          />
        </div>
      );
    }
  }

  render() {
    let songs1 = this.props.songs.slice(4, 12).map(song => {
      return (
        <div key={song.id}>
          <SongIndexItem
            key={song.id}
            path={this.props.location.pathname}
            song={song}
            users={this.props.users}
            playSong={this.props.playSong}
            pauseSong={this.props.pauseSong}
            playState={this.props.playState}
            currentSong={this.props.currentSong}
            currentAudio={this.props.currentAudio}
          />
        </div>
      );
    });

    let songs2 = this.props.songs
      .slice(0, 8)
      .reverse()
      .map(song => {
        return (
          <div key={song.id}>
            <SongIndexItem
              key={song.id}
              path={this.props.location.pathname}
              song={song}
              users={this.props.users}
              playSong={this.props.playSong}
              pauseSong={this.props.pauseSong}
              playState={this.props.playState}
              currentSong={this.props.currentSong}
              currentAudio={this.props.currentAudio}
            />
          </div>
        );
      });

    let songs3 = this.props.songs.slice(0, 8).map(song => {
      return (
        <div key={song.id}>
          <SongIndexItem
            key={song.id}
            path={this.props.location.pathname}
            song={song}
            users={this.props.users}
            playSong={this.props.playSong}
            pauseSong={this.props.pauseSong}
            playState={this.props.playState}
            currentSong={this.props.currentSong}
            currentAudio={this.props.currentAudio}
          />
        </div>
      );
    });

    let users = this.props.users;

    if (this.props.users) {
      users = Object.values(this.props.users);
    }

    let user_index = users.slice(0, 4).map(user => {
      return (
        <div key={user.id}>
          <UserIndexItem key={user.id} user={user} />
        </div>
      );
    });

    return (
      <div>
        <NavBarContainer />

        <div className="main-page-content">
          <div className="music-content">
            <div className="section">
              <div className="section-content">
                <h1 className="section-title">JimmyJams Charts</h1>
                <h3 className="section-body">
                  The most played tracks on JimmyJams this week
                </h3>

                <div className="main-row" id="set1">
                  {songs1}
                </div>
                {this.renderRight1()}
                {this.renderLeft1()}
              </div>
            </div>

            <div className="section">
              <div className="section-content">
                <h1 className="section-title">JimmyJams Charts</h1>
                <h3 className="section-body">
                  The most played tracks on JimmyJams this week
                </h3>

                <div className="main-row" id="set2">
                  {songs2}
                </div>
                {this.renderRight2()}
                {this.renderLeft2()}
              </div>
            </div>

            <div className="section">
              <div className="section-content">
                <h1 className="section-title">JimmyJams Charts</h1>
                <h3 className="section-body">
                  The most played tracks on JimmyJams this week
                </h3>

                <div className="main-row" id="set3">
                  {songs3}
                </div>
                {this.renderRight3()}
                {this.renderLeft3()}
              </div>
            </div>
          </div>
          {/* music content */}

          <div className="main-col2">
            <div className="who-to-follow">
              <div className="wtf-title">
                <i
                  className="wtf-text"
                  className="fa fa-users"
                  aria-hidden="true"
                >
                  {" "}
                  Who to follow
                </i>
                <p>View All</p>
              </div>

              <div>{user_index}</div>
            </div>
            {/* 
                <div className='who-to-follow'>
                    <div className='wtf-title'>
                        <i className='wtf-text' className="fa fa-users" aria-hidden="true"> Listening history</i>
                        <p>View All</p>
                    </div>

                    <div>
                        {user_index}
                    </div>
                </div> */}

            <div className="go-mobile">
              <div className="wtf-title">
                <p>About the creator </p>
                <p>View All</p>
              </div>
            </div>

            <div className="linkedin">
              <a
                className="q"
                href="https://www.linkedin.com/in/jimmythanhnguyen/"
                target="_blank"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>

              <a
                className="q2"
                href="https://www.jimmynguyen.dev"
                target="_blank"
              >
                <i className="fas fa-portrait"></i>
              </a>

              <a
                className="q3"
                href="https://github.com/jiminey"
                target="_blank"
              >
                <i className="fab fa-github-square"></i>
              </a>
            </div>
          </div>
        </div>
        {/* main page content */}
        <AudioPlayerContainer />
      </div>
    );
  }
}

export default Main;
