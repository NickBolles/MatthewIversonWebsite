import React from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const styles = {
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    width: 60,
    height: 60,
  },
};

function Avatar(props) {
  const { classes } = props;
  return (
    <div className={classes.row}>
      <Avatar alt="Matthew Iverson" src="/static/images/remy.jpg" className={classes.avatar} />
      <Avatar alt="Matthew Iverson" src="/static/images/remy.jpg" className={classes.avatar} />
    </div>
  );
}

ImageAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Avatar);