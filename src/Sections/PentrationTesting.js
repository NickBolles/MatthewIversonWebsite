import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Skills from "../Components/UI/Skills";
import Paper from "@material-ui/core/Paper";
import PentTestGridList from "../Components/UI/GridLists/PentTestGridList";
import ImgMediaCard from "../Components/UI/ImgMediaCard";

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    margin: "auto",
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
});

class PentrationTesting extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            fullWidth
          >
            <Tab label="Pentration Testing" />
            <Tab label="Skills" />
            <Tab label="Projects" />
            <Tab label="Books" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}>
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
          </TabContainer>
          <TabContainer dir={theme.direction}>
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
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <ImgMediaCard
              image="www.matthewiver.com"
              title="My website"
              description="Created my first ever website from scratch"
            />
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <PentTestGridList />
          </TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

PentrationTesting.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(PentrationTesting);
