import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import HeadPhoto from "../Components/Personal/HeadPhoto";

class Landing extends Component {
  render() {
    return (
      <div id="Landing" style={{ width: "100%", margin: "auto" }}>
        <div className="landing-grid">
          <Grid xs={12}>
            <HeadPhoto />
            <div className="banner-text">
              <h1 className="shake">"Know how to play the game."</h1>
              <hr />
              <p>
                <a
                  href="https://www.richardhughesjones.com/ray-dalio-principles-shaper-leadership/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="PersonalDescriptors"
                >
                  Shaper
                </a>{" "}
                |
                <a
                  href="https://donaldrobertson.name/diagram-the-influence-of-socrates-on-stoicism/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="PersonalDescriptors"
                >
                  Stoic
                </a>{" "}
                |
                <a
                  href="https://www.16personalities.com/intj-personality"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="PersonalDescriptors"
                >
                  INTJ-A
                </a>{" "}
                |
                <a
                  href="https://youtu.be/h-KHWUq3B7I"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="PersonalDescriptors"
                >
                  Entreprenuer
                </a>{" "}
                |
                <a
                  href="https://www.biography.com/people/nikola-tesla-9504443"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="PersonalDescriptors"
                >
                  Inventor
                </a>{" "}
                |
                <a
                  href="https://www.matthewiver.com"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="PersonalDescriptors"
                >
                  Creative
                </a>
              </p>

              <div className="social-links">
                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/matthew-iverson/">
                  <img
                    height="60px"
                    width="60px"
                    src="https://mbtskoudsalg.com/images/white-linkedin-logo-png-5.png"
                    rel="noopener noreferrer"
                    target="_blank"
                    alt="Linkedin"
                  />
                </a>

                {/* Github */}
                <a href="https://github.com/MatthewIver">
                  <img
                    src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.iconsdb.com%2Ficons%2Fpreview%2Fwhite%2Fgithub-11-xxl.png&f=1"
                    height="60px"
                    width="60px"
                    rel="noopener noreferrer"
                    target="_blank"
                    alt="Github"
                  />
                </a>

                {/* CodeWars */}
                <a href="https://www.codewars.com/users/King_BlkDth">
                  <img
                    height="60px"
                    width="60px"
                    rel="noopener noreferrer"
                    target="_blank"
                    alt="CodeWars"
                    src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.iconsdb.com%2Ficons%2Fpreview%2Fwhite%2Fcode-optimization-xxl.png&f=1"
                  />
                </a>

                {/* Freecodecamp */}
                <a href="https://www.freecodecamp.org/matthewiver">
                  <img
                    height="60px"
                    width="60px"
                    rel="noopener noreferrer"
                    target="_blank"
                    alt="FreeCodeCamp"
                    src="https://thomas-ko.github.io/freecodecamp-redesign/assets/img/logo-footer.svg"
                  />
                </a>

                {/* Youtube */}
                <a href="https://youtu.be/MAmJgsMUXOI">
                  <img
                    height="60px"
                    width="60px"
                    rel="noopener noreferrer"
                    target="_blank"
                    alt="Youtube"
                    src="https://proxy.duckduckgo.com/iur/?f=1&image_host=http%3A%2F%2Fwww.tazhair.com%2Fwp-content%2Fuploads%2F2015%2F06%2Fyoutube-logo.png&u=https://www.tazhair.com/wp-content/uploads/2015/06/youtube-logo.png"
                  />
                </a>
              </div>
            </div>
          </Grid>
        </div>
        <div>
      </div>
    );
  }
}

export default Landing;
