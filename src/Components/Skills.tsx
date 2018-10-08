import React, { Component } from "react";
import { Grid, Cell, ProgressBar } from "react-mdl";
import Avatar from "../UI/Avatar.tsx";

class Skills extends Component {
  render() {
    return (
      <Grid>
        <Cell col={12}>
          <Avatar />
          <div style={{ display: "flex" }}>
            {this.props.skill}
            <ProgressBar
              Avatar={ <Avatar/>}
              Link = {  }
              style = {{ width: "60%", marginLeft: "auto", marginRight: "20" }}
              progress = { this.props.progress }
            />
          </div>
        </Cell>
      </Grid>
    );
  }
}

export default Skills;
