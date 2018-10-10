import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Skills from "../Components/UI/Skills";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
  root: {
    width: "70%",
    margin: "auto"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
});

function PentrationTesting(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>
            Pentration Testing ( September 2018 - Currect )
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <Paper>
              Matthew had a curiosity for the world around him and a creative
              approach to problems. He loves solving problems in the most
              efficient, simplistic and repetitive fashion possible. He enjoys
              discovering new hidden ideas, items and people to find knowledge
              that is beneficial for his priorities. Matthew loves to experiment
              and work on things others find "impossible". While he was working
              on programming he noticed there was a bigger picture he did not
              understand. He decided it would be best if he learned the network
              and exploits enable to better understand programming. This way he
              discovered something he would love which is finding different
              approaches to problems others do not see.
            </Paper>
            <br />
            <Paper>
              <h2>Basic</h2>
              <Skills
                src="http://www.logospike.com/wp-content/uploads/2015/05/Linux_Logo_07.png"
                skill="Linux Scripting"
                progress={40}
              />
            </Paper>
            <br />
            <Paper>
              <h2>Reconnaisance</h2>
              <Skills
                src="https://image.flaticon.com/icons/png/512/34/34067.png"
                skill="Social Engineering"
                progress={30}
              />
              <Skills
                src="https://www.clipartqueen.com/image-files/retro-head-silhouette.png"
                skill="Awareness"
                progress={100}
              />
              <Skills
                src="https://image.flaticon.com/icons/png/512/44/44594.png"
                skill="Lock Picking"
                progress={60}
              />
            </Paper>
            <br />
            <Paper>
              <h2>Scanning</h2>
              <Skills
                src="http://static.movingpackets.net/2014/10/wireshark-logo.png"
                skill="WireShark"
                progress={80}
              />
              <Skills
                src="https://image.flaticon.com/icons/png/512/44/44594.png"
                skill="RouterSploit"
                progress={10}
              />
              <Skills
                src="https://image.flaticon.com/icons/png/512/44/44594.png"
                skill="Net Tools"
                progress={0}
              />
            </Paper>
            <br />
            <Paper>
              <h2>Access</h2>
              <Skills src="" skill="Metasploit" progress={0} />
              <Skills src="" skill="Rubber Ducky" progress={0} />
              <Skills src="" skill="Bash Bunny" progress={0} />
              <Skills src="" skill="Homemade Injectors" progress={0} />
              <Skills src="" skill="Wifi Pineapple" progress={0} />
            </Paper>
            <br />
            <Paper>
              <h2>Covering tracks</h2>
              <Skills src="" skill="Covering tracks" progress={0} />
            </Paper>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

PentrationTesting.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PentrationTesting);
