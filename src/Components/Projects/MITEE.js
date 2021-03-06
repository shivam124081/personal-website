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
import MITEEMore from './MITEE/MITEE_More';
import '../Projects.css'

import galaxy from '../../static/mitee.jpg'

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

export default function MITEE() {
  const classes = useStyles();
  const [moreInfo, setMoreInfo] = React.useState(false);

  return (
    <React.Fragment>
    {/* Render Dialogs */}
    {! moreInfo ? (
      <React.Fragment />
    ) : (
      <MITEEMore moreInfo={moreInfo} setMoreInfo={setMoreInfo} title={"Miniature Tether Electrodynamics Experiment"}/>
    )}
    <Card className="card">
      <CardHeader
        avatar={
          <FileIcon style={{color: '#D5573B'}}/>
        }
        title="Miniature Tether Electrodynamic Experiment"
        subheader="2018"
        classes={{
          title: {color:'green'}
        }}
      />
      <CardMedia
        className={classes.media}
        image={galaxy}
        title="amsid"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          <div className={clsx("project-scroll", "view-scroll")}>
            The Miniature Tether Electrodynamic Experiement is a Research Project at the University of Michigan
            aimed at testing small electrodynamic tethers as a form of propulsion for small satellites. I worked on
            the Orbits Attitude Determination and Control sub-team. 
          </div>
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" className='view-morebtn' onClick={()=>{setMoreInfo(true)}} disabled={true}>
          View More
        </Button>
      </CardActions>
    </Card>
    </React.Fragment>
  );
}