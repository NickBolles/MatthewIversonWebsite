import React, { Component } from "react";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import LinearProgress from "@material-ui/core/LinearProgress";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

class Skills extends Component {
  render() {
    return (
      <Paper>
        <Grid item xs={12}>
          <Chip
            label="Docker"
            color="primary"
            avatar={
              <Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png" />
            }
          />
          <div style={{ display: "flex" }}>
            {this.props.skill}
            <LinearProgress
              width="100px"
              variant="determinate"
              style={{ width: "60%", marginLeft: "auto", marginRight: "20" }}
              progress={this.props.progress}
            />
          </div>
        </Grid>
      </Paper>
    );
  }
}

export default Skills;
