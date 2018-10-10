import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import Paper from "@material-ui/core/Paper";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import EntrGridList from "../Components/UI/GridLists/EntrGridList";

const styles = theme => ({
  root: {
    width: "70%",
    margin: "auto"
  },
  appBar: {
    position: "relative"
  },
  flex: {
    flex: 1
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
});

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class Biography extends React.Component {
  state = {
    open: false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button onClick={this.handleClickOpen}>Auto Biography</Button>
        <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <Typography variant="h6" color="inherit" className={classes.flex}>
                AutoBiography
              </Typography>
              <IconButton
                color="inherit"
                onClick={this.handleClose}
                aria-label="Close"
              >
                <CloseIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <Typography>
            <div className={classes.root}>
              <section>
                <ExpansionPanel>
                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.heading}>
                      Matthew Iverson has an unique and valuable vision towards
                      how he lives. He builds his ideas out beautifully,
                      typically over the doubts and opposition of others.
                      Matthew has solidified his approach to life with the
                      philosophy of stoicism. He loves bringing his ideas to
                      fruition to help aid others in their lives. Matthew has
                      always had a sense of entrepreneurship and creativity in
                      his veins because of his mother who taught him all about
                      them from a young age. His Father taught him about how to
                      deliver on a deal and knowledge of the importance of being
                      able to have a analytical and business mind. Together his
                      parents taught him the foundation of how to create his
                      vision to thrive in business. Matthew loves creating,
                      guiding and inspiring by his actions rather than forcing
                      others into boxes with fear, how other “leaders” create
                      the culture in their business. Matthew strives to create a
                      better existences for all of us.
                    </Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography>
                      LONG BIO!
                      <Paper>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit
                        vulputate velit malesuada posuere dis cras, nec vehicula
                        magna cursus semper sapien eros dictumst praesent
                        commodo fermentum. Ligula rhoncus nulla elementum
                        pretium euismod dictumst odio suscipit faucibus nisi
                        magnis, neque ullamcorper aptent ultrices viverra
                        phasellus nullam interdum quam. Vehicula sollicitudin
                        ridiculus aliquet libero eleifend cum arcu, facilisi ac
                        sociosqu consequat senectus aliquam id erat, suspendisse
                        orci praesent tellus ante ultricies. Porttitor odio
                        semper convallis libero magna et facilisis erat, id
                        hendrerit pulvinar blandit feugiat parturient natoque,
                        nullam senectus commodo rhoncus lobortis inceptos sed.
                        Feugiat sed justo quis montes dis massa accumsan rutrum
                        ad luctus aenean augue vel posuere inceptos, ligula
                        molestie curae metus cubilia morbi nibh donec sodales
                        platea sagittis faucibus semper elementum. Aptent
                        scelerisque semper vitae augue magna torquent praesent
                        nascetur fringilla, per sapien mi quam porttitor sodales
                        condimentum justo, litora tempus sed vel accumsan
                        placerat urna potenti.Lorem ipsum dolor sit amet
                        consectetur adipiscing elit vulputate velit malesuada
                        posuere dis cras, nec vehicula magna cursus semper
                        sapien eros dictumst praesent commodo fermentum. Ligula
                        rhoncus nulla elementum pretium euismod dictumst odio
                        suscipit faucibus nisi magnis, neque ullamcorper aptent
                        ultrices viverra phasellus nullam interdum quam.
                        Vehicula sollicitudin ridiculus aliquet libero eleifend
                        cum arcu, facilisi ac sociosqu consequat senectus
                        aliquam id erat, suspendisse orci praesent tellus ante
                        ultricies. Porttitor odio semper convallis libero magna
                        et facilisis erat, id hendrerit pulvinar blandit feugiat
                        parturient natoque, nullam senectus commodo rhoncus
                        lobortis inceptos sed. Feugiat sed justo quis montes dis
                        massa accumsan rutrum ad luctus aenean augue vel posuere
                        inceptos, ligula molestie curae metus cubilia morbi nibh
                        donec sodales platea sagittis faucibus semper elementum.
                        Aptent
                      </Paper>
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
                <h2>
                Favorite entrepreneurship books
                </h2>
                <EntrGridList />
              </section>
            </div>
          </Typography>
        </Dialog>
      </div>
    );
  }
}

Biography.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Biography);
