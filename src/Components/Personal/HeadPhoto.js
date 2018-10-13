import React, { Component } from 'react';

class HeadPhoto extends Component {
  render() {
    return (
      <div>
        <img
          src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
          alt="avatar"
          className="avatar-img"
        />
        <h2 className="curiosity">
          "Always be curious."
        </h2>
        <br />
      </div>
    );
  }
}

export default HeadPhoto;
