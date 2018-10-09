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
import ImportContacts from "@material-ui/icons/ImportContacts";

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
      display: "block"
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  }
});

class PrimarySearchAppBar extends React.Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null
  };

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

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
              Matthew Iverson
            </Typography>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
            <IconButton color="inherit">
                <WorkIcon />
              </IconButton>
              <IconButton color="inherit">
                <InsertDriveFile />
              </IconButton>
              <IconButton color="inherit">
                <ComputerIcon />
              </IconButton>
              <IconButton color="inherit">
                <SecurityIcon />
              </IconButton>
              <IconButton color="inherit">
                <ImportContacts />
              </IconButton>
              <IconButton color="inherit">
                <MailIcon />
              </IconButton>
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
