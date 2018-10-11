import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import SecurityIcon from "@material-ui/icons/Security";
import { withStyles } from "@material-ui/core/styles";
import MailIcon from "@material-ui/icons/Mail";
import ComputerIcon from "@material-ui/icons/Computer";
import InsertDriveFile from "@material-ui/icons/InsertDriveFile";
import WorkIcon from "@material-ui/icons/Work";
import { Link} from "react-router-dom";

const styles = theme => ({
  root: {
    width: "100%",
    position: "fixed",
    zIndex: "999"
  },
  grow: {
    flexGrow: 1
  },
  section: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  }
});

class PrimarySearchAppBar extends React.Component {
  render() {
    const { classes } = this.props;
    const section = [
      <Link to="/Biography" >
        <IconButton children={<WorkIcon className="NavButtons"/>} />
      </Link>,
      <Link to="/Resume" >
        <IconButton children={<InsertDriveFile className="NavButtons"/>} />
      </Link>,
      <Link to="/Programming" >
        <IconButton children={<ComputerIcon className="NavButtons"/>} />
      </Link>,
      <Link to="/PentrationTesting" >
        <IconButton children={<SecurityIcon className="NavButtons"/>} />
      </Link>,
      <Link to="/Contact" >
        <IconButton children={<MailIcon className="NavButtons"/>} />
      </Link>
    ];
    const navLinks = section.map(section => {
      return (
        <div>
          <Link to={"#" + section}>{section}</Link>
        </div>
      );
    });

    return (
      <div className={classes.root}>
        <AppBar position="static" className="AppBar">
          <Toolbar>
            <Link to="/"><b className="NavButtons">Matthew Iverson</b></Link>
            <div className={classes.grow} />
            <div className={classes.section}>{navLinks}</div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

PrimarySearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PrimarySearchAppBar);
