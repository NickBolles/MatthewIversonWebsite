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
    const { theme } = this.props;

    return (
      <div className="ExpansionPanels" id="PentrationTesting">
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
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}>
            <Paper className="word-paper">
              <h2 >Matthew's love for curiosity</h2>
              </Paper>
              <Paper className="word-paper">
              <Typography>
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
              </Typography>
            </Paper>
            <Paper className="word-paper">
            <PentTestGridList />
            </Paper>
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <Paper className="word-paper">
              <h2>Basic</h2>
              <Skills
                src="http://1000logos.net/wp-content/uploads/2017/03/LINUX-LOGO.png"
                skill="Linux Scripting"
                progress={40}
              />
              <Skills
                src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Ffossbytes.com%2Fwp-content%2Fuploads%2F2016%2F09%2Fgnome-1024x768-kali-linux-2016.2-980x735.png&f=1"
                skill="Kali Linux"
                progress={30}
              />
              <Skills
                src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fd%2Fd5%2FVirtualbox_logo.png&f=1"
                skill="Virtual Machines"
                progress={70}
              />
            </Paper>
            <Paper className="word-paper">
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
            <Paper className="word-paper">
              <h2>Scanning</h2>
              <Skills
                src="http://static.movingpackets.net/2014/10/wireshark-logo.png"
                skill="WireShark"
                progress={80}
              />
              <Skills
                src="https://img.wonderhowto.com/img/49/19/63664325155254/0/seize-control-router-with-routersploit.w1456.jpg"
                skill="RouterSploit"
                progress={10}
              />
              <Skills
                src="http://4.bp.blogspot.com/-5pNZnFd32fA/U8Q73ymG_AI/AAAAAAAAC0Q/m5KavncvvQo/s1600/NWHT+%E2%80%93+Network+Wireless+Hacking+Tools.png"
                skill="Net Tools"
                progress={0}
              />
            </Paper>
            <Paper className="word-paper">
              <h2>Access</h2>
              <Skills src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.opentechinfo.com%2Fwp-content%2Fuploads%2F2017%2F03%2Fmetasploit-min.jpg&f=1" 
              skill="Metasploit" 
              progress={0} />
              <Skills src="https://digitalguardian.com/sites/default/files/rubber-ducky-usb-logo-hak5.jpg" 
              skill="Rubber Ducky" 
              progress={0} />
              <Skills src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fucarecdn.com%2F936d2af6-f968-458e-8ea3-1ab80b3b45a0%2F-%2Fstretch%2Foff%2F-%2Fresize%2F3000x%2F-%2Fquality%2Flighter%2F&f=1" 
              skill="Bash Bunny" progress={0} />
              <Skills src="http://securityaffairs.co/wordpress/wp-content/uploads/2014/02/CHT-CAN-hacking-tools-car.png" 
              skill="Homemade Injectors" 
              progress={0} />
              <Skills src="data:image/png;base64,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" skill="Wifi Pineapple" progress={0} />
            </Paper>
            <Paper className="word-paper">
              <h2>Covering tracks</h2>
              <Skills src="http://3.bp.blogspot.com/-RnHaxmY8G-E/U5dbmxsZ0_I/AAAAAAAAAVc/vPD7yH4tV_M/s1600/hacker_clean+up+2.png" skill="Covering tracks" progress={0} />
            </Paper>
          </TabContainer>
          <TabContainer dir={theme.direction}>
          NOTHING UNTIL I KNOW QUITE A BIT OF HACKING.
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
