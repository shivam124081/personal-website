import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import FileIcon from '@material-ui/icons/FolderOpen';
import { LoremIpsum } from "lorem-ipsum";

import galaxy from '../../static/galaxy.jpg'

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    display: "flex",
    flexDirection: "column",
    backgroundColor: '#DCDCDD',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  more: {
    display: 'inline',
    color: '#D5573B',
    borderColor: '#D5573B',
    fontWeight: 'bold',
    marginLeft: 'auto',
    '&:hover' : {
      color: '#033966',
      borderColor: '#D5573B',
      backgroundColor: '#D5573B'
    }
},
}));

export default function GTOC() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <Card className="card">
      <CardHeader
        avatar={
          <FileIcon style={{color: '#D5573B'}}/>
        }
        title="GTOC X"
        subheader="Summer, 2019"
        classes={{
          title: {color:'green'}
        }}
      />
      <CardMedia
        className={classes.media}
        image={galaxy}
        title="Galaxy"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          <div className="project-scroll">
           {lorem.generateSentences(2)}
          </div>
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" className={classes.more}>
          View More
        </Button>
      </CardActions>
    </Card>
  );
}