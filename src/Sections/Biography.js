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
import EntrGridList from "../Components/UI/GridLists/EntrGridList";
import HeadPhoto from "../Components/Personal/HeadPhoto";

const styles = theme => ({
  root: {
    width: "70%",
    margin: "auto"
  },
  appBar: {
    position: "fixed"
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
            <Toolbar className="AppBar">
              <Typography variant="h6" color="inherit" className={classes.flex}>
                Full Biography
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
                <section>
                  <br />
                  <br />
                  <br />
                  <Typography>
                    <Paper className="word-paper">
                      <h2>Biography</h2>
                    </Paper>
                    <Paper className="word-paper">
                      <h3>Child Hood</h3>
                      <p>
                        Matthew learned early on from his mom on the creativity,
                        diligence, prudence and tenacity an individual has
                        enable to work for ones self. He enjoyed the unknown and
                        the verse ideas an entrepreneur will run across with
                        putting on so many different hats in business. Matthew
                        loves the imagination an individual can uphold while
                        working for themselves along with the prudence to
                        understand the only person responsible for an owners
                        business is the owner.
                      </p>
                      <p>
                        Matthew in school never really understood how others
                        thoughts and typically challenged their beliefs. He
                        sought attention by being loud and wild to get others
                        attention. This led to many bullies because many people
                        do not like when someone else takes the spot light from
                        them. He quickly became understanding of people and
                        their psychology because of the physical altercations
                        that happened. He had to learn the times in which people
                        would be planning to attack him or the moments when
                        something did not feel quite right.
                      </p>
                      <p>
                        He once was on a business trip with his father at a
                        young age when he witnessed the awe his potential
                        clients had on their faces when his father was
                        presenting his speech. Matthew enjoyed the speech so
                        much he started examining how people talk and the way in
                        which their language, body gestures, thought processes
                        all come together to persuade anyone to believe in their
                        belief.
                      </p>
                      <p>
                        Matthew was physically bullied constantly from the age
                        of eleven to sixteen. He would get in fights ever other
                        month. He became quite aware of his surrounding and how
                        people acted in school. He was the smallest shortest and
                        in most cases the lightest out of his whole grade of
                        four hundred plus students. He was the easiest enable to
                        bully becuase he thought if he had a reaction to others
                        actions it would give him notice. This often was a
                        negative side effect of Matthew's acknoledgement of
                        other people becuase they would bully him to get the
                        reaction they desired.
                      </p>
                      <p>
                        Once Matthew grew in height he had been lifting for 3
                        years. This was the breaking point for many bullies
                        becuase he could not be physically pushed around as
                        easily and Matthew began to become more comfortable with
                        himself. He did not seek much attention from others
                        becuase he knew their intentions.
                      </p>
                    </Paper>
                    <Paper className="word-paper">
                      <h3>College</h3>
                      <p>
                        Matthew started college in 2013 at Southwest Minnesota
                        State University. He went to school to play football and
                        to get a degree. When he was attending he noticed how
                        much others feel the desire to party and drink.
                      </p>
                      <p>
                        He realized many people enjoyed music while partying.
                        His friend Cole got a djing board and Matthew started
                        expirementing with mixing songs together. After a while
                        Matthew was the one who would be mixing songs together
                        in the dorm rooms. Matthew enjoyed setting the
                        enviroment rather than part taking in the drunk
                        shinanigons.
                      </p>
                      <p>
                        Once Matthew got back to his hometown in the summer
                        after his first year of college he started learning how
                        to produce music with another producer. He woudl help
                        give pointers and learn from the other producer. He got
                        the confidence to start producing his own music with
                        Ableton.
                      </p>
                      <p>
                        Matthew started to learn how to make music through
                        playing guitar and paino which helped him hone in his
                        skills to producing. He took a huge amount of
                        inpsiration from Jon Bellion.
                      </p>
                      <p>
                        He took a class in philosophy his sophomore year in
                        college. When he took the class he thought it was
                        interesting at first. Once he started understanding it
                        more he found out how complex each theory is and the
                        different understandings people can have on the world
                        around them. Matthew started to savor the incredible
                        perspectives each could give to the student.
                      </p>
                      <p>
                        After Matthew found the way of how people thought even
                        more interesting. He started researching psychology and
                        neurology in his free time. He loved to understand the
                        cause and effect relationship between everything. The
                        more he delved into the understanding of it all the more
                        detailed his life started to be perceived.
                      </p>
                      <p>
                        When he transfered schools to University of South Dakota
                        he had plenty of free time because he was not doing
                        football anymore. He started researching for the future
                        on different avenues he will do after college. Matthew
                        came back to the one solution he always had but never
                        actively pursude; entrepreneurship.
                      </p>
                      <p>
                        His teacher was a incredible infulence on his
                        understanding and expiremtation of understanding the
                        ideals that went into business. He particapted in
                        several entrepreneurship weekends becuase of his
                        teacher. These weekends taught Matthew the pace at which
                        entrepreneurs thought and the ideas that came from other
                        business people.
                      </p>
                      <p>Matthew created his own djing website with wix and </p>
                    </Paper>
                    <Paper className="word-paper">
                      <h3>Young Adult</h3>
                      <p>
                        Matthew got a internship with a martial arts dojo. He
                        was the general manager in charge of the login in of
                        customers, website design, and cleaning of the facility.
                      </p>
                      <p>
                        after a few months his dad became worried becuase of the
                        problems with no income source from the dojo. Then his
                        dad's coworker asked if Matthew would like to learn from
                        him about a different division of the AJ.
                      </p>
                      <p>
                        Matthew accepted the oppurtunity for the internship
                        where he learned a great deal of information on each
                        portion of a business.
                      </p>
                      <p>
                        Through that time Matthew had a seventy minute car ride
                        to burn one way each day. Matthew hated the news and
                        radio while listening while going to work. After a while
                        he got the idea to use Audible to listen to audio books.
                        From then on out he got deep into reading and listening
                        to information. He loved the different takes on a
                        subject and the intense amount of knowledge in eight
                        hours of a single audio book.
                      </p>
                      <p>
                        negotiating tactics Educated himself on previous
                        intellectual creatives such as Thomas Jefferson, Nikola
                        Tesla, Elon musk, ray dalio.
                      </p>
                      <p>
                        Matthew had a falling out with his best
                        friend/girlfriend. He did not spend enough time with her
                        becuase of how much he was dedicated to his work on
                        music. (self awareness, philosophy, stoicism)
                      </p>
                      <p>
                        23 - laid off because of steel tariff learned self
                        taught programming (codecademy, reading from library,
                        learn from Nick Bolles)
                      </p>
                      <p>
                        Learning other side of programming learned hacking
                        (multiple hacking books)
                      </p>
                    </Paper>
                    <div className="background">
                      <HeadPhoto />
                    </div>
                    <Paper className="word-paper">
                      <h3>Current</h3>
                      <p>
                        Matthew spends his time researching better programming
                        tactics, creativity with ethical hacking, training of
                        exercising, enlightment from philosophies, relaxation of
                        guitar, discovering knowledge from books, along with
                        listening to people.
                      </p>
                    </Paper>
                  </Typography>
                </section>
                <Paper className="word-paper">
                  <h2>Favorite entrepreneurship books</h2>
                </Paper>
                <Paper className="word-paper">
                  <EntrGridList className="Books" />
                </Paper>
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
