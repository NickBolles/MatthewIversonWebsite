import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Skills from "./Skills";

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

function SimpleExpansionPanel(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>
            Matthew Iverson has an unique and valuable vision towards how he
            lives. He builds his ideas out beautifully, typically over the
            doubts and opposition of others. Matthew has solidified his approach
            to life with the philosophy of stoicism. He loves bringing his ideas
            to fruition to help aid others in their lives. Matthew has always
            had a sense of entrepreneurship and creativity in his veins because
            of his mother who taught him all about them from a young age. His
            Father taught him about how to deliver on a deal and knowledge of
            the importance of being able to have a analytical and business mind.
            Together his parents taught him the foundation of how to create his
            vision to thrive in business. Matthew loves creating, guiding and
            inspiring by his actions rather than forcing others into boxes with
            fear, how other “leaders” create the culture in their business.
            Matthew strives to create a better existences for all of us.
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            LONG BIO!
            <div>
              Lorem ipsum dolor sit amet consectetur adipiscing elit vulputate
              velit malesuada posuere dis cras, nec vehicula magna cursus semper
              sapien eros dictumst praesent commodo fermentum. Ligula rhoncus
              nulla elementum pretium euismod dictumst odio suscipit faucibus
              nisi magnis, neque ullamcorper aptent ultrices viverra phasellus
              nullam interdum quam. Vehicula sollicitudin ridiculus aliquet
              libero eleifend cum arcu, facilisi ac sociosqu consequat senectus
              aliquam id erat, suspendisse orci praesent tellus ante ultricies.
              Porttitor odio semper convallis libero magna et facilisis erat, id
              hendrerit pulvinar blandit feugiat parturient natoque, nullam
              senectus commodo rhoncus lobortis inceptos sed. Feugiat sed justo
              quis montes dis massa accumsan rutrum ad luctus aenean augue vel
              posuere inceptos, ligula molestie curae metus cubilia morbi nibh
              donec sodales platea sagittis faucibus semper elementum. Aptent
              scelerisque semper vitae augue magna torquent praesent nascetur
              fringilla, per sapien mi quam porttitor sodales condimentum justo,
              litora tempus sed vel accumsan placerat urna potenti.Lorem ipsum
              dolor sit amet consectetur adipiscing elit vulputate velit
              malesuada posuere dis cras, nec vehicula magna cursus semper
              sapien eros dictumst praesent commodo fermentum. Ligula rhoncus
              nulla elementum pretium euismod dictumst odio suscipit faucibus
              nisi magnis, neque ullamcorper aptent ultrices viverra phasellus
              nullam interdum quam. Vehicula sollicitudin ridiculus aliquet
              libero eleifend cum arcu, facilisi ac sociosqu consequat senectus
              aliquam id erat, suspendisse orci praesent tellus ante ultricies.
              Porttitor odio semper convallis libero magna et facilisis erat, id
              hendrerit pulvinar blandit feugiat parturient natoque, nullam
              senectus commodo rhoncus lobortis inceptos sed. Feugiat sed justo
              quis montes dis massa accumsan rutrum ad luctus aenean augue vel
              posuere inceptos, ligula molestie curae metus cubilia morbi nibh
              donec sodales platea sagittis faucibus semper elementum. Aptent
              scelerisque semper vitae augue magna torquent praesent nascetur
              fringilla, per sapien mi quam porttitor sodales condimentum justo,
              litora tempus sed vel accumsan placerat urna potenti.Lorem ipsum
              dolor sit amet consectetur adipiscing elit vulputate velit
              malesuada posuere dis cras, nec vehicula magna cursus semper
              sapien eros dictumst praesent commodo fermentum. Ligula rhoncus
              nulla elementum pretium euismod dictumst odio suscipit faucibus
              nisi magnis, neque ullamcorper aptent ultrices viverra phasellus
              nullam interdum quam. Vehicula sollicitudin ridiculus aliquet
              libero eleifend cum arcu, facilisi ac sociosqu consequat senectus
              aliquam id erat, suspendisse orci praesent tellus ante ultricies.
              Porttitor odio semper convallis libero magna et facilisis erat, id
              hendrerit pulvinar blandit feugiat parturient natoque, nullam
              senectus commodo rhoncus lobortis inceptos sed. Feugiat sed justo
              quis montes dis massa accumsan rutrum ad luctus aenean augue vel
              posuere inceptos, ligula molestie curae metus cubilia morbi nibh
              donec sodales platea sagittis faucibus semper elementum. Aptent
              scelerisque semper vitae augue magna torquent praesent nascetur
              fringilla, per sapien mi quam porttitor sodales condimentum justo,
              litora tempus sed vel accumsan placerat urna potenti.Lorem ipsum
              dolor sit amet consectetur adipiscing elit vulputate velit
              malesuada posuere dis cras, nec vehicula magna cursus semper
              sapien eros dictumst praesent commodo fermentum. Ligula rhoncus
              nulla elementum pretium euismod dictumst odio suscipit faucibus
              nisi magnis, neque ullamcorper aptent ultrices viverra phasellus
              nullam interdum quam. Vehicula sollicitudin ridiculus aliquet
              libero eleifend cum arcu, facilisi ac sociosqu consequat senectus
              aliquam id erat, suspendisse orci praesent tellus ante ultricies.
              Porttitor odio semper convallis libero magna et facilisis erat, id
              hendrerit pulvinar blandit feugiat parturient natoque, nullam
              senectus commodo rhoncus lobortis inceptos sed. Feugiat sed justo
              quis montes dis massa accumsan rutrum ad luctus aenean augue vel
              posuere inceptos, ligula molestie curae metus cubilia morbi nibh
              donec sodales platea sagittis faucibus semper elementum. Aptent
              scelerisque semper vitae augue magna torquent praesent nascetur
              fringilla, per sapien mi quam porttitor sodales condimentum justo,
              litora tempus sed vel accumsan placerat urna potenti.
            </div>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>
            Programming ( July 2018 - Current )
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Matthew has always loved computers. He enjoys the input output
            relationship. He is able to understand easily how the cause and
            effect relationship relate. Matthew loves videos games ever since a
            young age. He used to play endless hours of hotwheels, construction
            games and others. Once he became a teenager he learned about PS3.
            Matthew played with friends in first person shooters and absolutely
            loved playing modern warfare 2 all the way to little big planet 1,2,
            and 3 with his sisters. Matthew used to always be curious how the
            internet worked and would poke around at everything since no one was
            telling him “NO” when experimenting with the computer. He would
            download different files and inspect elements because he thought it
            was neat how the web pages were put together. Matthew experimented
            so much he broke 2 computers because of the excessive downloading
            and experimenting at such a young age without understanding
            security. Matthew has always have an abundance of ideas circulating
            in his head. He had very little way to create his ideas with out
            excessive capital to create them. He then turned towards something
            he always loved but never gave it the attention it deserved.
            Computers! He decided if he learned programming he would be able to
            bring his and others ideas to life to promote a better life for
            everything. Matthew started programming by learning Python which is
            a basic back end programming languages which is simple and
            expendable. Then he proceeded to learn HTML, css, js, react, sql,
            node, next, etc. Matthew then added Arduinos to understand the deep
            connection between computers and electricals. Matthew then wanted to
            learn the bigger picture he did not understand this led him to
            ethical hacking. Nick Bolles and Joe Bannon were helping guide
            Matthew to experiment and create rather than ingesting more useless
            knowledge. Matthew decided to listen after a few months of hearing
            them say it. Once he decided to make his own projects the time to
            create was not long enough because Matthew wanted more and more time
            to create his ideas because of how much he loved to invent.
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
            <br /> <h4>Future</h4>
            <Skills
              src="https://olimex.files.wordpress.com/2017/06/arduino-logo-circle-thumb.png"
              skill="C"
              progress={0}
            />
            <Skills
              src="https://olimex.files.wordpress.com/2017/06/arduino-logo-circle-thumb.png"
              skill="GO"
              progress={0}
            />
            <Skills
              src="https://olimex.files.wordpress.com/2017/06/arduino-logo-circle-thumb.png"
              skill="Java"
              progress={0}
            />
            <Skills
              src="https://olimex.files.wordpress.com/2017/06/arduino-logo-circle-thumb.png"
              skill="PHP"
              progress={0}
            />
            <Skills
              src="https://olimex.files.wordpress.com/2017/06/arduino-logo-circle-thumb.png"
              skill="Ruby"
              progress={0}
            />
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
            <br /> <h4>Future</h4>
            <Skills
              src="https://olimex.files.wordpress.com/2017/06/arduino-logo-circle-thumb.png"
              skill="Angular"
              progress={0}
            />
            <br /> <h2>Libraries</h2>
            <Skills
              src="https://wikiprogramming.org/wp-content/uploads/2016/10/jquery-icon.png"
              skill="Jquery"
              progress={40}
            />
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
            <br /> <h2>Platforms</h2>
            <Skills
              src="https://olimex.files.wordpress.com/2017/06/arduino-logo-circle-thumb.png"
              skill="Arduino"
              progress={40}
            />
            <Skills
              src="https://olimex.files.wordpress.com/2017/06/arduino-logo-circle-thumb.png"
              skill="Cordova"
              progress={50}
            />
            <br /> <h4>Future</h4>
            <Skills
              src="https://olimex.files.wordpress.com/2017/06/arduino-logo-circle-thumb.png"
              skill="Rasbery Pi"
              progress={0}
            />
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>
            Pentration Testing ( September 2018 - Currect )
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, had very little way to create his ideas with out
            excessive capital to create them. He then turned towards something
            he always loved but never gave it the attention it deserved.
            Computers! He decided if he learned programming he would be able to
            bring his and others ideas to life to promote a better life for
            everything. Matthew started programming by learning Python which is
            a basic back end programming languages which is simple and
            expendable. Then he proceeded to learn HTML, css, js, react, sql,
            node, next, etc. Matthew then added Arduinos to understand the deep
            connection between computers and electricals. Matthew then wanted to
            learn the bigger picture he did not understand this led him to
            ethical hacking. sit amet blandit leo lobortis eget.
            <br />
            <h2>Basic</h2>
            <Skills
              src="http://www.logospike.com/wp-content/uploads/2015/05/Linux_Logo_07.png"
              skill="Linux Scripting"
              progress={40}
            />
            <br />
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
            <br />
            <h2>Scanning</h2>
            <Skills
              src="http://static.movingpackets.net/2014/10/wireshark-logo.png"
              skill="WireShark"
              progress={80}
            />
            <br />
            <h2>Access</h2>
            <Skills
              src=""
              skill="Metasploit"
              progress={0}
            />
            <br />
            <h2>Covering tracks</h2>
            <Skills
              src=""
              skill="Covering tracks"
              progress={0}
            />
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

SimpleExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleExpansionPanel);
