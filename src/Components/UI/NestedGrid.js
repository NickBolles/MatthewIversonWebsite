import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import DummyImgMediaCard from "./DummyImgMediaCard";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

function FormRow(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <Grid item xs={4}>
        <Paper className={classes.paper}>
          <DummyImgMediaCard
            image="../Pictures/MyWebsite.png"
            alt="My First Website"
            title="My First Website"
            description="I created my first project independently within 5 days which is the website you are looking at currently."
          />
        </Paper>
      </Grid>
    </React.Fragment>
  );
}

FormRow.propTypes = {
  classes: PropTypes.object.isRequired
};

function NestedGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={8}>
        <Grid item xs={12} container spacing={24}>
          <FormRow classes={classes} />
        </Grid>
      </Grid>
    </div>
  );
}

NestedGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NestedGrid);

/* EXAMPLE

      <Grid item xs={4}>
        <Paper className={classes.paper}>
          <DummyImgMediaCard
            image="LINKtowebsite"
            alt="alternate name if image is not available"
            title="Name"
            description="descriptive sentences on the project and how it was created"
          />
        </Paper>
      </Grid>

*/