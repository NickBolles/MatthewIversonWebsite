import React, { Component } from 'react';
import { List, ListItem, ListItemIcon, Grid} from "@material-ui/core"


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Grid xs={6}>
          </Grid>
          <Grid xs={6}>
            <h2>Contact Me</h2>
            <hr/>
            <div className="contact-list">
                <ListItem>
                  <ListItemIcon style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    matthewiver@protonmail.com
                  </ListItemIcon>
                </ListItem>     
                <ListItem>
                  <ListItemIcon style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-skype" aria-hidden="true"/>
                    MySkypeID
                  </ListItemIcon>
                </ListItem>
              </List>
            </div>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default Contact;
