import React, { Component } from "react";
import { Typography, Paper } from "@material-ui/core";

class Contact extends Component {
  render() {
    return (
      <Paper>
      <Typography className="contact-list">
        <Typography className="ContactTitle"><h2>Contact Me</h2></Typography>
        <Typography className="Contact-body">
          Email: matthewiver@protonmail.com
        </Typography>
        <Typography className="Contact-body">
        Skype ID: **********
        </Typography>
        <br />
        <Typography className="fadeOut">Copyright © Matthew Iverson</Typography>
      </Typography>
      </Paper>
    );
  }
}

export default Contact;
