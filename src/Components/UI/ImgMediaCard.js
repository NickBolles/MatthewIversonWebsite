import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    // ⚠️ object-fit is not supported by IE11.
    objectFit: 'cover',
  },
};

function ImgMediaCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={this.props.alt}
          className={classes.media}
          height="140"
          image={this.props.image}
          title={this.props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" title={this.props.title} />
          <Typography component="p" description={this.props.description}/>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button size="small" color="primary">
            GitHub
          </Button>
          <Button size="small" color="primary">
            CodePen
          </Button>
          <Button size="small" color="primary">
            Live Demo
          </Button>
      </CardActions>
    </Card>
  );
}

ImgMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImgMediaCard);

/*
<ImgMediaCard
image="LINKtowebsite"
alt="alternate name if image is not available"
title="Name"
description="descriptive sentences on the project and how it was created"
/>
*/