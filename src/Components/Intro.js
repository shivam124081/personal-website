import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { LoremIpsum } from "lorem-ipsum";
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link, animateScroll as scroll } from "react-scroll";

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
    marginTop: 100,
  },
  fontcolor: {
      color: '#4A5759'
  },
  para: {
      width: '40%',
      color: '#011627'
  },
  email: {
    display: 'inline',
    marginTop: 30,
    color: '#011627',
    borderColor: '#011627',
    '&:hover' : {
      color: 'white',
      borderColor: '#011627',
      backgroundColor: '#011627'
    }
}
}));

export default function Intro() {
  const classes = useStyles();

  return (
    <div className={classes.root} id='home'>
        {/* Intro */}
        <h2 style={{color: '#D5573B'}}>
            Hi, my name is
        </h2>
        <h1 style={{fontSize: 50, marginTop: -15, color: '#033966'}}>
            Shivam Sharma.
        </h1>
        <h1 style={{fontSize: 50, color: '#403F4C', marginTop: -30}}>
            I'm an Aerospace Engineer in Michigan.
        </h1>

        {/* About Paragraph */}
        <div className={classes.para}>
            {lorem.generateSentences(5)}
        </div>

        <Button variant="outlined" className={classes.email}>
            Get In Touch
        </Button>
    </div>
  );
}
