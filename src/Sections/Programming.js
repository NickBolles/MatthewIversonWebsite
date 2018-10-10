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
import ImgMediaCard from "../Components/UI/DummyImgMediaCard";
import CodeGridList from "../Components/UI/GridLists/CodeGridList";

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

class Programming extends React.Component {
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
            <Tab label="Programming" />
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
              Matthew has always loved computers. He enjoys the input output
              relationship. He is able to understand easily how the cause and
              effect relationship relate. Matthew loves videos games ever since
              a young age. He used to play endless hours of hotwheels,
              construction games and others. Once he became a teenager he
              learned about PS3. Matthew played with friends in first person
              shooters and absolutely loved playing modern warfare 2 all the way
              to little big planet 1,2, and 3 with his sisters. Matthew used to
              always be curious how the internet worked and would poke around at
              everything since no one was telling him “NO” when experimenting
              with the computer. He would download different files and inspect
              elements because he thought it was neat how the web pages were put
              together. Matthew experimented so much he broke 2 computers
              because of the excessive downloading and experimenting at such a
              young age without understanding security. Matthew has always have
              an abundance of ideas circulating in his head. He had very little
              way to create his ideas with out excessive capital to create them.
              He then turned towards something he always loved but never gave it
              the attention it deserved. Computers! He decided if he learned
              programming he would be able to bring his and others ideas to life
              to promote a better life for everything. Matthew started
              programming by learning Python which is a basic back end
              programming languages which is simple and expendable. Then he
              proceeded to learn HTML, css, Js, react, sql, node, next, etc.
              Matthew then added Arduinos to understand the deep connection
              between computers and electricity. Matthew then wanted to learn
              the bigger picture he did not understand this led him to ethical
              hacking. Nick Bolles ( www.nickbolles.com ) and Joe Bannon (
              www.joebannon.com )were helping guide Matthew to experiment and
              create rather than ingesting more useless knowledge. Matthew
              decided to listen after a few months of hearing them say it. Once
              he decided to make his own projects the time to create was not
              long enough because Matthew wanted more and more time to create
              his ideas because of how much he loved to invent.
            </Paper>
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <Paper>
              <h2>Languages</h2>
              <Skills
                src="https://maxcdn.icons8.com/Share/icon/Logos/css31600.png"
                skill="CSS (Cascading Style Sheets)"
                progress={90}
              />
              <Skills
                src="https://www.w3.org/html/logo/img/mark-only-icon.png"
                skill="HTML5"
                progress={100}
              />
              <Skills
                src="http://logo-load.com/uploads/posts/2016-09/javascript-logo.png"
                skill="Javascript"
                progress={70}
              />
              <Skills
                src="https://cdn0.iconfinder.com/data/icons/superuser-extension-light/512/675277-data_database_sql_query-512.png"
                skill="SQL"
                progress={50}
              />
              <Skills
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/768px-Python.svg.png"
                skill="Python"
                progress={60}
              />
              <Skills
                src="https://dzone.com/storage/temp/4470473-ts-logo.png"
                skill="Typescript"
                progress={30}
              />
              <Skills
                src="http://midigital.co/wp-content/uploads/2015/05/node-js-logo-web-development.png"
                skill="Node.js"
                progress={80}
              />
              <br />
              <h4>Future Languages</h4>
              <Skills
                src="https://png.icons8.com/color/1600/c-programming"
                skill="C"
                progress={10}
              />
              <Skills
                src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fsdtimes.com%2Fwp-content%2Fuploads%2F2018%2F02%2Fgolang.sh_-490x490.png&f=1"
                skill="GO"
                progress={20}
              />
              <Skills
                src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fcdnd.icons8.com%2Fwp-content%2Fuploads%2F2015%2F07%2Fjava_logo.png&f=1"
                skill="Java"
                progress={5}
              />
              <Skills
                src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn2.iconfinder.com%2Fdata%2Ficons%2Fdesigner-skills%2F128%2Fcode-programming-php-software-develop-command-language-512.png&f=1"
                skill="PHP"
                progress={0}
              />
              <Skills
                src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F7%2F73%2FRuby_logo.svg%2F1024px-Ruby_logo.svg.png&f=1"
                skill="Ruby"
                progress={0}
              />
            </Paper>
            <br />
            <Paper>
              <br /> <h2>Frameworks</h2>
              <Skills
                src="https://www.sambicstech.com/wp-content/uploads/2017/11/django.png"
                skill="Django (Python)"
                progress={5}
              />
              <Skills
                src="http://www.nextplc.co.uk/~/media/Images/N/Next-PLC-V2/content-images/image-gallery/logos/Next-Thin-Master-Logo-2014-Reversed.jpg"
                skill="Next.js"
                progress={30}
              />
              <Skills
                src="https://www.shareicon.net/data/512x512/2016/07/08/117367_logo_512x512.png"
                skill="React (Javascript)"
                progress={90}
              />
              <Skills
                src="https://dwglogo.com/wp-content/uploads/2017/09/Vue_js_logo.png"
                skill="Vue (Javascript)"
                progress={20}
              />
              <br /> <h4>Future Frameworks</h4>
              <Skills
                src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fdwglogo.com%2Fwp-content%2Fuploads%2F2017%2F03%2F1250px-AngularJS_logo.png&f=1"
                skill="Angular (Javascript)"
                progress={0}
              />
            </Paper>
            <br />
            <Paper>
              <br /> <h2>Libraries</h2>
              <Skills
                src="https://wikiprogramming.org/wp-content/uploads/2016/10/jquery-icon.png"
                skill="Jquery"
                progress={40}
              />
            </Paper>
            <br />
            <Paper>
              <br /> <h2>Tools</h2>
              <Skills
                src="https://davidmles.com/wp-content/uploads/2017/03/atom-logo.png"
                skill="Atom"
                progress={30}
              />
              <Skills
                src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Frisingstack-blog.s3.amazonaws.com%2F2016%2FJan%2Fbabel_logo_in_react_js_best_practices_2016-1453212218011.png&f=1"
                skill="Babel"
                progress={70}
              />
              <Skills
                src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.brianweet.com%2Fassets%2Fdocker-blog-1%2Fdocker-logo.png&f=1"
                skill="Docker"
                progress={80}
              />
              <Skills
                src="https://lttng.org/images/dist-logos-icons/192/git.png"
                href="https://git-scm.com/"
                skill="Git"
                progress={95}
              />
              <Skills
                src="https://cdn.auth0.com/blog/testing-react-with-jest/logo.png"
                skill="Jest"
                progress={10}
              />
              <Skills
                src="https://i0.wp.com/blog.toright.com/wp-content/uploads/2016/08/npm-logo.png?fit=810%2C521&ssl=1"
                skill="NPM"
                progress={80}
              />
              <Skills
                src="http://seeklogo.com/images/Y/yarn-logo-F5E7A65FA2-seeklogo.com.png"
                skill="Yarn"
                progress={100}
              />
              <Skills
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Visual_Studio_Code_1.18_icon.svg/512px-Visual_Studio_Code_1.18_icon.svg.png"
                skill="Visual Studio Code"
                progress={80}
              />
              <Skills
                src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fjstherightway.org%2Fassets%2Fimg%2Fwebpack-logo.png&f=1"
                skill="Webpack"
                progress={30}
              />
            </Paper>
            <br />
            <Paper>
              <br /> <h2>Platforms</h2>
              <Skills
                src="https://olimex.files.wordpress.com/2017/06/arduino-logo-circle-thumb.png"
                skill="Arduino"
                progress={40}
              />
              <Skills
                src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Ftelerikhelper.files.wordpress.com%2F2015%2F11%2Fcordova-logo.png&f=1"
                skill="Cordova"
                progress={50}
              />
              <br /> <h4>Future Platforms</h4>
              <Skills
                src="https://proxy.duckduckgo.com/iur/?f=1&image_host=http%3A%2F%2Fmaikel.pro%2Fblog%2Fcontent%2Fimages%2F2015%2F06%2F1428026564_raspberry-128.png&u=https://www.maikel.pro/blog/content/images/2015/06/1428026564_raspberry-128.png"
                skill="Rasbery Pi"
                progress={0}
              />
            </Paper>
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <ImgMediaCard
              image="http://youmeandtrends.com/wp-content/uploads/2015/09/dragon-wallpaper-hd_063725675_21.jpg"
              alt="alternate name if image is not available"
              title="My First Website"
              description="descriptive sentences on the project and how it was created"
            />
            <ImgMediaCard
              image="LINKtowebsite"
              alt="alternate name if image is not available"
              title="Name"
              description="descriptive sentences on the project and how it was created"
            />
            <ImgMediaCard
              image="LINKtowebsite"
              alt="alternate name if image is not available"
              title="Name"
              description="descriptive sentences on the project and how it was created"
            />
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <CodeGridList />
          </TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

Programming.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Programming);
