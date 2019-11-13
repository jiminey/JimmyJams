import React from "react";

class DeleteSongForm extends React.Component {
  constructor(props) {
    super(props);
    this.songId = this.props.song.id;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.deleteSong(this.songId).then(() => window.location.reload());

    // .then(() => this.props.closeModal());
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <img src={this.props.song.album_coverUrl} alt="" />
        </div>
        <p>
          Are you sure you want to permanently delete {this.props.song.title} by{" "}
          {this.props.song.artist}{" "}
        </p>
        <input type="submit" value="Remove song" />
      </form>
    );
  }
}

export default DeleteSongForm;
