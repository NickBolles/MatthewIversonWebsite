import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import LinearProgress from "@material-ui/core/LinearProgress";
import Skills from "./Skills";

const styles = theme => ({
  root: {
    width: '70%',
    margin: "auto",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
});

function SimpleExpansionPanel(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>
          Matthew Iverson has an unique and valuable vision towards how he lives. He builds his ideas out beautifully, typically over the doubts and opposition of others. Matthew has solidified his approach to life with the philosophy of stoicism. 
He loves bringing his ideas to fruition to help aid others in their lives. Matthew has always had a sense of entrepreneurship and creativity in his veins because of his mother who taught him all about them from a young age. His Father taught him about how to deliver on a deal and knowledge of the importance of being able to have a analytical and business mind. 
Together his parents taught him the foundation of how to create his vision to thrive in business. Matthew loves creating, guiding and inspiring by his actions rather than forcing others into boxes with fear, how other “leaders” create the culture in their business. Matthew strives to create a better existences for all of us.
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            LONG BIO!
            <div>Lorem ipsum dolor sit amet consectetur adipiscing elit vulputate velit malesuada posuere dis cras, nec vehicula magna cursus semper sapien eros dictumst praesent commodo fermentum. Ligula rhoncus nulla elementum pretium euismod dictumst odio suscipit faucibus nisi magnis, neque ullamcorper aptent ultrices viverra phasellus nullam interdum quam. Vehicula sollicitudin ridiculus aliquet libero eleifend cum arcu, facilisi ac sociosqu consequat senectus aliquam id erat, suspendisse orci praesent tellus ante ultricies.

Porttitor odio semper convallis libero magna et facilisis erat, id hendrerit pulvinar blandit feugiat parturient natoque, nullam senectus commodo rhoncus lobortis inceptos sed. Feugiat sed justo quis montes dis massa accumsan rutrum ad luctus aenean augue vel posuere inceptos, ligula molestie curae metus cubilia morbi nibh donec sodales platea sagittis faucibus semper elementum. Aptent scelerisque semper vitae augue magna torquent praesent nascetur fringilla, per sapien mi quam porttitor sodales condimentum justo, litora tempus sed vel accumsan placerat urna potenti.Lorem ipsum dolor sit amet consectetur adipiscing elit vulputate velit malesuada posuere dis cras, nec vehicula magna cursus semper sapien eros dictumst praesent commodo fermentum. Ligula rhoncus nulla elementum pretium euismod dictumst odio suscipit faucibus nisi magnis, neque ullamcorper aptent ultrices viverra phasellus nullam interdum quam. Vehicula sollicitudin ridiculus aliquet libero eleifend cum arcu, facilisi ac sociosqu consequat senectus aliquam id erat, suspendisse orci praesent tellus ante ultricies.

Porttitor odio semper convallis libero magna et facilisis erat, id hendrerit pulvinar blandit feugiat parturient natoque, nullam senectus commodo rhoncus lobortis inceptos sed. Feugiat sed justo quis montes dis massa accumsan rutrum ad luctus aenean augue vel posuere inceptos, ligula molestie curae metus cubilia morbi nibh donec sodales platea sagittis faucibus semper elementum. Aptent scelerisque semper vitae augue magna torquent praesent nascetur fringilla, per sapien mi quam porttitor sodales condimentum justo, litora tempus sed vel accumsan placerat urna potenti.Lorem ipsum dolor sit amet consectetur adipiscing elit vulputate velit malesuada posuere dis cras, nec vehicula magna cursus semper sapien eros dictumst praesent commodo fermentum. Ligula rhoncus nulla elementum pretium euismod dictumst odio suscipit faucibus nisi magnis, neque ullamcorper aptent ultrices viverra phasellus nullam interdum quam. Vehicula sollicitudin ridiculus aliquet libero eleifend cum arcu, facilisi ac sociosqu consequat senectus aliquam id erat, suspendisse orci praesent tellus ante ultricies.

Porttitor odio semper convallis libero magna et facilisis erat, id hendrerit pulvinar blandit feugiat parturient natoque, nullam senectus commodo rhoncus lobortis inceptos sed. Feugiat sed justo quis montes dis massa accumsan rutrum ad luctus aenean augue vel posuere inceptos, ligula molestie curae metus cubilia morbi nibh donec sodales platea sagittis faucibus semper elementum. Aptent scelerisque semper vitae augue magna torquent praesent nascetur fringilla, per sapien mi quam porttitor sodales condimentum justo, litora tempus sed vel accumsan placerat urna potenti.Lorem ipsum dolor sit amet consectetur adipiscing elit vulputate velit malesuada posuere dis cras, nec vehicula magna cursus semper sapien eros dictumst praesent commodo fermentum. Ligula rhoncus nulla elementum pretium euismod dictumst odio suscipit faucibus nisi magnis, neque ullamcorper aptent ultrices viverra phasellus nullam interdum quam. Vehicula sollicitudin ridiculus aliquet libero eleifend cum arcu, facilisi ac sociosqu consequat senectus aliquam id erat, suspendisse orci praesent tellus ante ultricies.

Porttitor odio semper convallis libero magna et facilisis erat, id hendrerit pulvinar blandit feugiat parturient natoque, nullam senectus commodo rhoncus lobortis inceptos sed. Feugiat sed justo quis montes dis massa accumsan rutrum ad luctus aenean augue vel posuere inceptos, ligula molestie curae metus cubilia morbi nibh donec sodales platea sagittis faucibus semper elementum. Aptent scelerisque semper vitae augue magna torquent praesent nascetur fringilla, per sapien mi quam porttitor sodales condimentum justo, litora tempus sed vel accumsan placerat urna potenti.</div>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Programming ( July 2018 - Current )</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          Matthew has always loved computers. He enjoys the input output relationship. He is able to understand easily how the cause and effect relationship relate.
	Matthew loves videos games ever since a young age. He used to play endless hours of hotwheels, construction games and others. Once he became a teenager he learned about PS3. Matthew played with friends in first person shooters and absolutely loved playing modern warfare 2 all the way to little big planet 1,2, and 3 with his sisters.
	Matthew used to always be curious how the internet worked and would poke around at everything since no one was telling him “NO” when experimenting with the computer. He would download different files and inspect elements because he thought it was neat how the web pages were put together. Matthew experimented so much he broke 2 computers because of the excessive downloading and experimenting at such a young age without understanding security.
	Matthew has always have an abundance of ideas circulating in his head. He had very little way to create his ideas with out excessive capital to create them. He then turned towards something he always loved but never gave it the attention it deserved. Computers! He decided if he learned programming he would be able to bring his and others ideas to life to promote a better life for everything.
	Matthew started programming by learning Python which is a basic back end programming languages which is simple and expendable. Then he proceeded to learn HTML, css, js, react, sql, node, next, etc. Matthew then added Arduinos to understand the deep connection between computers and electricals.
	Matthew then wanted to learn the bigger picture he did not understand this led him to ethical hacking.
	Nick Bolles and Joe Bannon were helping guide Matthew to experiment and create rather than ingesting more useless knowledge. Matthew decided to listen after a few months of hearing them say it. Once he decided to make his own projects the time to create was not long enough because Matthew wanted more and more time to create his ideas because of how much he loved to invent.
          <br /> <Chip label="Docker" color="primary" avatar={<Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png" />} /> <LinearProgress width="100px" variant="determinate" value={50} />
          <br /> <Chip label="Docker" color="primary" avatar={<Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png" />} /> <LinearProgress width="100px" variant="determinate" value={50} />
          <br /> <Chip label="Docker" color="primary" avatar={<Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png" />} /> <LinearProgress width="100px" variant="determinate" value={50} />
          <br /> <Chip label="Docker" color="primary" avatar={<Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png" />} /> <LinearProgress width="100px" variant="determinate" value={50} />
          <br /> <Chip label="Docker" color="primary" avatar={<Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png" />} /> <LinearProgress width="100px" variant="determinate" value={50} />
          <br /> <Chip label="Docker" color="primary" avatar={<Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png" />} /> <LinearProgress width="100px" variant="determinate" value={50} />
          <br /> <Chip label="Docker" color="primary" avatar={<Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png" />} /> <LinearProgress width="100px" variant="determinate" value={50} />
          <br /> <Chip label="Docker" color="primary" avatar={<Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png" />} /> <LinearProgress width="100px" variant="determinate" value={50} />
          <br /> <Chip label="Docker" color="primary" avatar={<Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png" />} /> <LinearProgress width="100px" variant="determinate" value={50} />
          <br /> <Chip label="Docker" color="primary" avatar={<Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png" />} /> <LinearProgress width="100px" variant="determinate" value={50} />
          <br /> <Chip label="Docker" color="primary" avatar={<Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png" />} /> <LinearProgress width="100px" variant="determinate" value={50} />
          <br /> <Chip label="Docker" color="primary" avatar={<Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png" />} /> <LinearProgress width="100px" variant="determinate" value={50} />
          <br /> <Chip label="Docker" color="primary" avatar={<Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png" />} /> <LinearProgress width="100px" variant="determinate" value={50} />
          <br /> <Chip label="Docker" color="primary" avatar={<Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png" />} /> <LinearProgress width="100px" variant="determinate" value={50} />
          <br /> <Chip label="Docker" color="primary" avatar={<Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png" />} /> <LinearProgress width="100px" variant="determinate" value={50} />
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Pentration Testing ( September 2018 - Currect )</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, had very little way to create his ideas with out excessive capital to create them. He then turned towards something he always loved but never gave it the attention it deserved. Computers! He decided if he learned programming he would be able to bring his and others ideas to life to promote a better life for everything.
	Matthew started programming by learning Python which is a basic back end programming languages which is simple and expendable. Then he proceeded to learn HTML, css, js, react, sql, node, next, etc. Matthew then added Arduinos to understand the deep connection between computers and electricals.
	Matthew then wanted to learn the bigger picture he did not understand this led him to ethical hacking.
            sit amet blandit leo lobortis eget.
            <br /> <Chip label="Docker" color="primary" avatar={<Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png" />} /> <LinearProgress width="100px" variant="determinate" value={50} />
            <br /> <Chip label="Docker" color="primary" avatar={<Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png" />} /> <LinearProgress width="100px" variant="determinate" value={50} />
            <br /> <Chip label="Docker" color="primary" avatar={<Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png" />} /> <LinearProgress width="100px" variant="determinate" value={50} />
            <br /> <Chip label="Docker" color="primary" avatar={<Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png" />} /> <LinearProgress width="100px" variant="determinate" value={50} />
            <br /> <Chip label="Docker" color="primary" avatar={<Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png" />} /> <LinearProgress width="100px" variant="determinate" value={50} />
            <br /> <Chip label="Docker" color="primary" avatar={<Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png" />} /> <LinearProgress width="100px" variant="determinate" value={50} />
            <br /> <Chip label="Docker" color="primary" avatar={<Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png" />} /> <LinearProgress width="100px" variant="determinate" value={50} />
            <br /> <Chip label="Docker" color="primary" avatar={<Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png" />} /> <LinearProgress width="100px" variant="determinate" value={50} />
            <br /> <Chip label="Docker" color="primary" avatar={<Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png" />} /> <LinearProgress width="100px" variant="determinate" value={50} />
            <br /> <Chip label="Docker" color="primary" avatar={<Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png" />} /> <LinearProgress width="100px" variant="determinate" value={50} />
            <br /> <Chip label="Docker" color="primary" avatar={<Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png" />} /> <LinearProgress width="100px" variant="determinate" value={50} />
            <br /> <Chip label="Docker" color="primary" avatar={<Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png" />} /> <LinearProgress width="100px" variant="determinate" value={50} />
            <br /> <Chip label="Docker" color="primary" avatar={<Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png" />} /> <LinearProgress width="100px" variant="determinate" value={50} />
            <br /> <Chip label="Docker" color="primary" avatar={<Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png" />} /> <LinearProgress width="100px" variant="determinate" value={50} />
            <br /> <Chip label="Docker" color="primary" avatar={<Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png" />} /> <LinearProgress width="100px" variant="determinate" value={50} />
            <br /> <Chip label="Docker" color="primary" avatar={<Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png" />} /> <LinearProgress width="100px" variant="determinate" value={50} />
            <br /> <Chip label="Docker" color="primary" avatar={<Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png" />} /> <LinearProgress width="100px" variant="determinate" value={50} />
            <br /> <Chip label="Docker" color="primary" avatar={<Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png" />} /> <LinearProgress width="100px" variant="determinate" value={50} />
          <Skills/>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

SimpleExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleExpansionPanel);
