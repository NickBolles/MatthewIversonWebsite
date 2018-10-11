import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import SecurityIcon from "@material-ui/icons/Security";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import MailIcon from "@material-ui/icons/Mail";
import ComputerIcon from "@material-ui/icons/Computer";
import InsertDriveFile from "@material-ui/icons/InsertDriveFile";
import WorkIcon from "@material-ui/icons/Work";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  root: {
    width: "100%",
    position: "fixed",
    zIndex: "999"
  },
  grow: {
    flexGrow: 1
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "flex"
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  }
});

class PrimarySearchAppBar extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              className={classes.title}
              link="page-top"
              variant="h6"
              color="inherit"
              noWrap
            >
              <Button primaryTextColor="white">Matthew Iverson</Button>
            </Typography>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <a href="/Biography" className="NavButtons">
                <IconButton color="inherit">
                  <WorkIcon />
                </IconButton>
              </a>
              <a href="/" className="NavButtons">
                <IconButton color="inherit">
                  <InsertDriveFile />
                </IconButton>
              </a>
              <a href="/Programming" className="NavButtons">
                <IconButton color="inherit">
                  <ComputerIcon />
                </IconButton>
              </a>
              <a href="/PentrationTesting" className="NavButtons">
                <IconButton color="inherit">
                  <SecurityIcon />
                </IconButton>
              </a>
              <a href="/Contact" className="NavButtons">
                <IconButton color="inherit">
                  <MailIcon />
                </IconButton>
              </a>
            </div>
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
