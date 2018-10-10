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
            avatar={<Avatar src={this.props.src} />}
            label={this.props.skill}
            color="primary"
          />
        </Grid>
        <div style={{ display: "flex" }}>
          <Grid item xs={11}>
            <LinearProgress
              variant="determinate"
              value={this.props.progress}
              style={{
                width: "65%",
                marginLeft: "auto"
              }}
            />
          </Grid>
        </div>
      </Grid>
    );
  }
}

export default Skills;

/*
<Skills
src="LINKtowebsite"
skill="Name of skill"
progress={0}
/>
*/
