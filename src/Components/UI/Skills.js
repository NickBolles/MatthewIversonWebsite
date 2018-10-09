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
            label={this.props.skill}
            color="primary"
            avatar={
              <Avatar src={this.props.src} />
            }
          />
        </Grid>
        <div style={{ display: "flex" }}>
          <Grid item xs={9}>
            <LinearProgress
              variant="determinate"
              style={{
                width: "70%",
                marginLeft: "auto",
                marginRight: "20",
                marginBelow: "2px"
              }}
              progress={this.props.progress}
            />
          </Grid>
        </div>
      </Grid>
    );
  }
}

export default Skills;
