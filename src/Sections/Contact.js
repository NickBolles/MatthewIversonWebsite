import React, { Component } from "react";
import { Typography, Paper } from "@material-ui/core";

class Contact extends Component {
  render() {
    return (
      <Paper>
      <Typography className="contact-list">
        <Typography>Contact Me</Typography>
        <Typography>
          Email: matthewiver@protonmail.com
        </Typography>
        <Typography>
        Skype ID: **********
        </Typography>
        <Typography>Copyright © Matthew Iverson</Typography>
      </Typography>
      </Paper>
    );
  }
}

export default Contact;
