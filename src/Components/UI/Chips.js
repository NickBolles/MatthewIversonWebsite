import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing.unit,
  },
});

function handleClick() {
  alert("Matthew's skill in this is {{CircularStatic.Percentage(?)}}"); // eslint-disable-line no-alert
}

function Chips(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Chip
        avatar={<Avatar alt="Docker" src="../../Avatars/docker.png" />}
        label="Chip"
        onClick={handleClick}
        className={classes.chip}
      />
    </div>
  );
}

Chips.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Chips);
