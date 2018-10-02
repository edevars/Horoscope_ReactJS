import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 300,
    margin: 15,
    height: 350
  },
  media: {
    maxHeight: 250
  },
};

function ImgMediaCard(props) {
  const { classes, title , content, url} = props;
  return (
    <div>
       <Card className={classes.card}>
        <CardMedia
          component="img"
          className={classes.media}
          image={url}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {title}
          </Typography>
          <Typography component="p">
            {content}
          </Typography>
        </CardContent>
    </Card>
    </div>
  );
}

ImgMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default withStyles(styles)(ImgMediaCard);