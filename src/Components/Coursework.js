import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { LoremIpsum } from "lorem-ipsum";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import './Coursework.css';

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
  root: {
    flexGrow: 1,
    width: '100%',
    padding: '100px',
  },
  divider: {
    color: "#011627",
    width: "40%",
    height: '1px',
    backgroundColor: '#011627',
    border: 'none',
    marginTop: -32,
    marginLeft: 260,
    marginBottom: 20
  },
  list: {
    '& li' : {
        color: '#D5573B',
        fontWeight: 'bold',
        padding: '5px',
        '& span': {
            color: 'black',
            display: 'inline',
            fontWeight: 'normal'
        }
    }
  }
}));

export default function Contact() {
  const classes = useStyles();

  return (
    <div className={classes.root} id='contact'>
      <h2 style={{color: '#033966'}}> <p style={{color: '#D5573B', display: 'inline'}}></p> Relevant Coursework </h2>
      <hr className={classes.divider}/>
    
    <ol className={classes.list}>
      <Grid container>
        <Grid item xs={6}>
          <h2> Core Courses </h2>
          <ul className="coursepointer">
          <li> <span> Gas Dynamics, Aerodynamics, Propulsion </span> </li>
          <li> <span> Aerospace Structures I, II</span> </li>
          <li> <span> Dynamics & Vibration, Dynamics & Control </span></li>
          <li> <span> Space Flight Mechanics </span></li>
          <li> <span> Aero Lab I,II,III,IV</span></li>
          <li> <span> Senior Space Mission Design </span></li>
          </ul>
          
        </Grid>

        <Grid item xs={6}>
          <h2> Other Courses </h2>
          <ul className="coursepointer">
          <li> <span> Programming and Intro to Data Structures </span> </li>
          <li> <span> Computer Vision <p style={{color: '#D5573B', display: 'inline'}}> (enrolled) </p> </span> </li>
          <li> <span> Data Structures and Algorithms</span></li>
          <li> <span> Web Systems </span></li>
          <li> <span> Electrical Circuits, Systems, Application </span></li>
          <li> <span> Aerospace Independant Study </span></li>
          </ul>
          
        </Grid>
      </Grid>

    </ol>
        
    </div>
  );
}
