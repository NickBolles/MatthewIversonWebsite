import React, { Component } from "react";

import { Paper } from "@material-ui/core";

class ProfileIntro extends Component {
  render() {
    return (
      <div >
        <Paper className="landing-grid">
        <Paper>
            <img
              src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
              alt="avatar"
              className="avatar-img"
            />
            <div className="banner-text">
              <h1>Matthew Iverson</h1>
              <p>"Know how to play the game."</p>
              <hr />
              <p>
                <a
                  href="https://www.richardhughesjones.com/ray-dalio-principles-shaper-leadership/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Shaper
                </a>{" "}
                |
                <a
                  href="https://donaldrobertson.name/diagram-the-influence-of-socrates-on-stoicism/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Stoic
                </a>{" "}
                |
                <a
                  href="https://www.16personalities.com/intj-personality"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  INTJ-A
                </a>{" "}
                |
                <a
                  href="https://youtu.be/h-KHWUq3B7I"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Entreprenuer
                </a>{" "}
                |
                <a
                  href="https://www.biography.com/people/nikola-tesla-9504443"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Inventor
                </a>{" "}
                |
                <a
                  href="https://www.matthewiver.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Creative
                </a>
              </p>

              <div className="social-links">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/matthew-iverson/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* Github */}
                <a
                  href="https://github.com/MatthewIver"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

                {/* CodeWars */}
                <a
                  href="https://www.codewars.com/users/King_BlkDth"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-code" aria-hidden="true" />
                </a>

                {/* Freecodecamp */}
                <a
                  href="https://www.freecodecamp.org/matthewiver"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-free-code-camp" aria-hidden="true" />
                </a>

                {/* Youtube */}
                <a
                  href="https://youtu.be/MAmJgsMUXOI"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-youtube-square" aria-hidden="true" />
                </a>
              </div>
            </div>
            </Paper>
        </Paper>
      </div>
    );
  }
}

export default ProfileIntro;
