import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MailIcon from "@material-ui/icons/Mail";
import ComputerIcon from "@material-ui/icons/Computer";
import InsertDriveFile from "@material-ui/icons/InsertDriveFile";
import WorkIcon from "@material-ui/icons/Work";
import IconButton from "@material-ui/core/IconButton";
import SecurityIcon from "@material-ui/icons/Security";

const styles = {
  root: {
    flexGrow: 1,
    width: "100%",
    position: "fixed"
  }
};

function SimpleAppBar(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" className="AppBar">
        <Toolbar>
          <Typography variant="h6" className="AppBarTitle">
            <b>Matthew Iverson</b>
          </Typography>
          <div className="HeaderSpace" />
          <Typography>
            <IconButton
              href="#Biography"
              children={<WorkIcon className="NavButtons" />}
            />
          </Typography>
          <Typography>
            <IconButton
              href="#Resume"
              children={<InsertDriveFile className="NavButtons" />}
            />
          </Typography>
          <Typography>
            <IconButton
              href="#Programmer"
              children={<ComputerIcon className="NavButtons" />}
            />
          </Typography>
          <Typography>
            <IconButton
              href="#PenTesting"
              children={<SecurityIcon className="NavButtons" />}
            />
          </Typography>
          <Typography>
            <IconButton
              href="#Contact"
              children={<MailIcon className="NavButtons" />}
            />
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleAppBar);
