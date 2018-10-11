import React, { Component } from "react";

class ProfileIntro extends Component {
  render() {
    return (
      <div>
        <img
          src="https://proxy.duckduckgo.com/iur/?f=1&image_host=http%3A%2F%2Fthewallpaper.co%2Fwp-content%2Fuploads%2F2016%2F10%2FFree-City-1080p-Background-HD-hd-wallpapers-background-photos-apple-artworks-high-definition-wallpaper-for-iphone-free-pictures-1920x1080.jpg&u=https://thewallpaper.co/wp-content/uploads/2016/10/Free-City-1080p-Background-HD-hd-wallpapers-background-photos-apple-artworks-high-definition-wallpaper-for-iphone-free-pictures-1920x1080.jpg"
          alt="CityBackground"
          className="City"
          width="100%"
          position="fixed"
        />
        <img
          src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
          alt="avatar"
          className="avatar-img"
          display="inline-block" // make it behave like an image
          position="relative"
          src2="https://www.w3schools.com/howto/img_avatar.png"
        />
        <div className="banner-text">
          <h2>"Know how to play the game."</h2>
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
            <img
              height="80px"
              width="80px"
              href="https://www.linkedin.com/in/matthew-iverson/"
              rel="noopener noreferrer"
              target="_blank"
              alt="Linkedin"
              src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pvhc.net%2Fimg163%2Fcndaokvdqbqrwcfnswes.png&f=1"
            />

            {/* Github */}
            <img
              href="https://github.com/MatthewIver"
              height="80px"
              width="80px"
              rel="noopener noreferrer"
              target="_blank"
              alt="Github"
              src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.iconsdb.com%2Ficons%2Fpreview%2Fwhite%2Fgithub-11-xxl.png&f=1"
            />

            {/* CodeWars */}
            <img
              href="https://www.codewars.com/users/King_BlkDth"
              height="80px"
              width="80px"
              rel="noopener noreferrer"
              target="_blank"
              alt="CodeWars"
              src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.iconsdb.com%2Ficons%2Fpreview%2Fwhite%2Fcode-optimization-xxl.png&f=1"
            />

            {/* Freecodecamp */}
            <img
              href="https://www.freecodecamp.org/matthewiver"
              height="80px"
              width="80px"
              rel="noopener noreferrer"
              target="_blank"
              alt="FreeCodeCamp"
              src="https://thomas-ko.github.io/freecodecamp-redesign/assets/img/logo-footer.svg"
            />

            {/* Youtube */}
            <img
              href="https://youtu.be/MAmJgsMUXOI"
              height="80px"
              width="80px"
              rel="noopener noreferrer"
              target="_blank"
              alt="Youtube"
              src="https://proxy.duckduckgo.com/iur/?f=1&image_host=http%3A%2F%2Fwww.tazhair.com%2Fwp-content%2Fuploads%2F2015%2F06%2Fyoutube-logo.png&u=https://www.tazhair.com/wp-content/uploads/2015/06/youtube-logo.png"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileIntro;
