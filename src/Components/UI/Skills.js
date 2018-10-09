import React, { Component } from "react";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import LinearProgress from "@material-ui/core/LinearProgress";
import Grid from "@material-ui/core/Grid";

class Skills extends Component {
  render() {
    return (
        <Grid item xs={12}>
        <Grid item xs={3}>
          <Chip
            label="Docker"
            color="primary"
            avatar={
              <Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png" />
            }
          />
          </Grid>
          
          <div style={{ display: "flex" }}>
            {this.props.skill}
            <Grid item xs={9}>
            <LinearProgress
              variant="determinate"
              style={{ width: "70%", marginLeft: "auto", marginRight: "20", marginBelow: "2px" }}
              progress={this.props.progress}
            />
            </Grid>
          </div>
        </Grid>
    );
  }
}

export default Skills;
