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
import '../Projects.css'

import GTOCMore from './GTOC/GTOC_More'
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
}));

export default function GTOC() {
  const classes = useStyles();
  const [moreInfo, setMoreInfo] = React.useState(false);

  return (
    <React.Fragment>
    {/* Render Dialogs */}
    {! moreInfo ? (
      <React.Fragment />
    ) : (
      <GTOCMore moreInfo={moreInfo} setMoreInfo={setMoreInfo} title={"Global Trajectory Optimization Competition X"}/>
    )}
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
          <div className={clsx("project-scroll", "view-scroll")}>
            Member of the team from University of Michigan that participated in the 10th Global Trajectory Competition - started
            by the European Space Agency, and problem statement released by JPL NASA. Teams were tasked with finding optimal
            solutions to settling the galaxy under various constraints. 
          </div>
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" className='view-morebtn' onClick={()=>{setMoreInfo(true)}}>
          View More
        </Button>
      </CardActions>
    </Card>
    </React.Fragment>
  );
}