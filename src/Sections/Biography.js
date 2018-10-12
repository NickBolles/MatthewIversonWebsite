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
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
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
        <Button onClick={this.handleClickOpen}>Full Bio</Button>
        <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar className="outside-container">
              <Typography variant="h6" color="inherit" className={classes.flex}>
                Full Bio
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
          <Typography className="outside-container">
            <div className={classes.root}>
              <section>
                  <ExpansionPanelSummary >
                  <Typography>
                      <b>Biography</b>
                      <Paper>
                        <h3>Child Hood</h3>
                        <p>
                          Matthew learned early on from his mom on the
                          creativity, diligence, prudence and tenacity an
                          individual has enable to work for ones self. He
                          enjoyed the unknown and the verse ideas an
                          entrepreneur will run across with putting on so many
                          different hats in business. Matthew loves the
                          imagination an individual can uphold while working for
                          themselves along with the prudence to understand the
                          only person responsible for an owners business is the
                          owner.
                        </p>
                        <p>
                          Matthew in school never really understood how others
                          thoughts and typically challenged their beliefs. He
                          sought attention by being loud and wild to get others
                          attention. This led to many bullies because many
                          people do not like when someone else takes the spot
                          light from them. He quickly became understanding of
                          people and their psychology because of the physical
                          altercations that happened. He had to learn the times
                          in which people would be planning to attack him or the
                          moments when something did not feel quite right.
                        </p>
                        <p>
                          He once was on a business trip with his father at a
                          young age when he witnessed the awe his potential
                          clients had on their faces when his father was
                          presenting his speech. Matthew enjoyed the speech so
                          much he started examining how people talk and the way
                          in which their language, body gestures, thought
                          processes all come together to persuade anyone to
                          believe in their belief.
                        </p>
                        <p>
                          Matthew was physically bullied constantly from the age
                          of eleven to sixteen. He would get in fights ever
                          other month. He became quite aware of his surrounding
                          and how people acted in school. He was the smallest
                          shortest and in most cases the lightest out of his
                          whole grade of four hundred plus students. He was the
                          easiest enable to bully becuase he thought if he had a
                          reaction to others actions it would give him notice.
                          This often was a negative side effect of Matthew's
                          acknoledgement of other people becuase they would
                          bully him to get the reaction they desired.
                        </p>
                        <p>
                          Once Matthew grew in height he had been lifting for 3
                          years. This was the breaking point for many bullies
                          becuase he could not be physically pushed around as
                          easily and Matthew began to become more comfortable
                          with himself. He did not seek much attention from
                          others becuase he knew their intentions.
                        </p>
                        </Paper>
                        <Paper>
                        <h3>College</h3>
                        <p>
                          18 - start college did not like free time saw how much
                          people partied and enjoyed drinking and music was
                          always involved. 19 - see peoples interest in music
                          found nearo science interesting, psychology
                          interesting 20 - went to entrepreneurship events with
                          collegiate Organization on campus which would go to
                          events with 4-10 other universities to converse about
                          making real products and services. 21 - DJ at several
                          events
                        </p>
                        </Paper>
                        <Paper>
                        <h3>Young Adult</h3>
                        <p>
                          reading on long car rides 22 - sales job with dad, got
                          into reading, negotiating tactics Educated himself on
                          previous intellectual creatives such as Thomas
                          Jefferson, Nikola Tesla, Elon musk, ray dalio.
                        </p>
                        <p>
                          23 - laid off because of steel tariff girlfriend broke
                          up with him (self awareness, philosophy, stoicism)
                          learned self taught programming (codecademy, reading
                          from library, learn from Nick Bolles) learned hacking
                          (multiple hacking books)
                        </p>
                        </Paper>
                        <Paper>
                        <h3>Current</h3>
                        <p>
                          Matthew spends his time researching better programming
                          tactics, creativity with ethical hacking, training of
                          exercising, enlightment from philosophies, relaxation
                          of guitar, along with listening and understand with
                          books and people.
                        </p>
                      </Paper>
                      </Typography>
                      </ExpansionPanelSummary>
                <h2>Favorite entrepreneurship books</h2>
                <EntrGridList className="Books"/>
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
