import React from "react";
import AudioPlayerContainer from "../audioplayer/audioplayer_container";
import NavBarContainer from "../navbar/navbar_container";
import UserSongItem from "../../components/song/user_song_item";
import UserIndexItem from "../user/user_index_item";

class UserShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }
  componentDidMount() {
    let userId = this.props.match.params.userId;
    this.props.fetchUser(userId);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteSong(this.props.song.id);
  }

  render() {
    let song = this.props.songs.map(song => {
      return (
        <div>
          <div key={song.title}>
            <UserSongItem
              key={song.title}
              path={this.props.location.pathname}
              song={song}
              users={this.props.users}
              playSong={this.props.playSong}
              pauseSong={this.props.pauseSong}
              playState={this.props.playState}
              currentSong={this.props.currentSong}
              currentAudio={this.props.currentAudio}
              deleteSong={this.props.deleteSong}
              currentUser={this.props.currentUser}
              user={this.props.user}
            />
          </div>
        </div>
      );
    });

    let userId = this.props.match.params.userId || -1;
    let user = this.props.users[userId] || -1;

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

        <div className="show-body">
          {/* {this.props.songs} */}

          <div className="show-top">
            <div className="show-top-left">
              <div className="show-top-left-2">
                <img className="user-pic" src={user.photoUrl} alt="" />
                <div className="top-words">
                  <div className="user-top-artist">{user.username}</div>
                </div>
              </div>

              <div></div>
            </div>

            <div className="show-top-right">
              <div className="top-right-words"></div>

              <div></div>
            </div>
          </div>

          <div className="show-bottom">
            <div className="main-page-content">
              <div className="music-content">
                <div className="user-song-content">{song}</div>
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
          </div>
        </div>

        <AudioPlayerContainer />
      </div>
    );
  }
}

export default UserShow;
