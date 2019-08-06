import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { LoremIpsum } from "lorem-ipsum";
import Button from '@material-ui/core/Button';

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
  title: {
    textAlign: 'center',
    width: '100%',
    margin: 'auto',
    paddingBottom: '100px',
    paddingTop: '100px',
    backgroundColor: '#85858C'
  },
  divider: {
    color: "#011627",
    width: '70%',
    height: '1px',
    backgroundColor: '#011627',
    border: 'none',
    marginTop: -32,
    marginBottom: 20,
    zIndex: 1
  },
  header: {
    color: '#D5573B',
    display: 'inline',
    backgroundColor: '#85858C',
    zIndex: 2,
    paddingLeft: '5px'
  },
  contact: {
    display: 'inline',
    backgroundColor: '#85858C',
    zIndex: 2,
    paddingRight: '5px'
  },
  button: {
    display: 'inline',
    marginTop: 30,
    color: '#011627',
    borderColor: '#011627',
    '&:hover' : {
      color: '#011627',
      borderColor: '#D5573B',
      backgroundColor: '#D5573B'
    }
  }
}));

export default function Contact() {
  const classes = useStyles();

  return (
    <div className={classes.title} id='contact'>
    <h2 style={{color: '#011627'}}> <p className={classes.header}> 04. </p> <p className={classes.contact}> Contact me </p> </h2>
    <hr className={classes.divider}/>
    
        <div style={{width: '50%', textAlign: 'center', color: 'white', margin: 'auto'}}>
            {lorem.generateSentences(3)}
        </div>
        <Button variant="outlined" className={classes.button}> 
                Email me
        </Button>
        
    </div>
  );
}
