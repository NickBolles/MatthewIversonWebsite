import React, { Component } from "react";
import { ListItem, ListItemIcon, Grid } from "@material-ui/core";

class Contact extends Component {
  render() {
    return (
      <div class="footer-below">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
        <div className="contact-body">
          <Grid className="contact-grid">
            <Grid xs={3}>
              <h2>Contact Me</h2>
              <hr />
              <div className="contact-list">
                <ListItem>
                  <ListItemIcon
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i /*email icon */ />
                    matthewiver@protonmail.com
                  </ListItemIcon>
                </ListItem>
                <ListItem>
                  <ListItemIcon
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i /*skype icon */ />
                    MySkypeID
                  </ListItemIcon>
                      <strong>
                        Copyright © Matthew Iverson
                        <script>
                          document.write(new Date().getFullYear());
                        </script>
                        2018
                      </strong>
                </ListItem>
              </div>
            </Grid>
          </Grid>
        </div>
        </div>
        </div>
        </div>
        </div>
    );
  }
}

export default Contact;
