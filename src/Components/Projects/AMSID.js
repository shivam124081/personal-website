import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import FileIcon from '@material-ui/icons/FolderOpen';
import { LoremIpsum } from "lorem-ipsum";
import AMSID_More from './AMSID/AMSID_More';
import '../Projects.css'

import galaxy from '../../static/AMSID/AMSID.jpg'

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

export default function AMSID() {
  const classes = useStyles();
  const [moreInfo, setMoreInfo] = React.useState(false);

  return (
    <React.Fragment>
      {/* Render Dialogs */}
      {! moreInfo ? (
        <React.Fragment />
      ) : (
       <AMSID_More moreInfo={moreInfo} setMoreInfo={setMoreInfo} title={"Multi-surface Inspection Drone - AE405"}/>
      )}

      <Card className="card">
        <CardHeader
          avatar={
            <FileIcon style={{color: '#D5573B'}}/>
          }
          title="Multi-surface Inspection Drone - AE405"
          subheader="Fall, 2018"
        />
        <CardMedia
          className={classes.media}
          image={galaxy}
          title="amsid"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            <div className={clsx("project-scroll", "view-scroll")}>
              For my senior design lab, I alongside 3 other team members, proposed, designed and manufactured a 'Multi-surface Surveillance and Inspection Drone.'.
              The drone is a 4-wheeled vehicle capable of traversing inclined surfaces including vertical walls.
              It houses 2 powerful propellers that have a dual purpose - traction on surfaces, and propulsion. 
              Design inspired by <a href="https://la.disneyresearch.com/publication/vertigo/" style={{textDecoration: 'none'}}> EHT Zurich. </a>
            </div>
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="outlined" className={classes.more} onClick={()=>{setMoreInfo(true)}}>
            View More
          </Button>
        </CardActions>
      </Card>
      </React.Fragment>
  );
}