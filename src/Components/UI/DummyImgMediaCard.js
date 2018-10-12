import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class DummyImgMediaCard extends Component {
  render() {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          height="300"
          width="100%"
          component="img"
          alt={this.props.alt}
          image={this.props.image}
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
}

export default (DummyImgMediaCard);

/*
<ImgMediaCard
image="LINKtowebsite"
alt="alternate name if image is not available"
title="Name"
description="descriptive sentences on the project and how it was created"
/>
*/