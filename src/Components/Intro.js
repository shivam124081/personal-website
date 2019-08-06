import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { LoremIpsum } from "lorem-ipsum";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import logos from '../static/logos.svg'


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
    // backgroundImage: `linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)), url(${podImage})`,
    backgroundSize: 'cover',
    backgroundPosition: '-10px',
    width: '100%',
    paddingTop: '150px',
    paddingLeft: '150px',
    paddingRight: '100px',
    paddingBottom: '100px',
  },
  fontcolor: {
      color: '#4A5759'
  },
  para: {
      width: '80%',
      color: '#011627'
  },
  email: {
    display: 'inline',
    marginTop: 30,
    color: '#D5573B',
    borderColor: '#D5573B',
    '&:hover' : {
      color: '#011627',
      borderColor: '#D5573B',
      backgroundColor: '#D5573B'
    }
}
}));

export default function Intro() {
  const classes = useStyles();

  return (
    <div className={classes.root} id='home'>
      <Grid container>
        <Grid item xs={6}>
          {/* Intro */}
          <h2 style={{color: '#D5573B'}}>
              Hi, my name is
          </h2>
          <h1 style={{fontSize: 50, marginTop: -15, color: '#033966'}}>
              Shivam Sharma.
          </h1>
          <h1 style={{fontSize: 50, color: '#403F4C', marginTop: -30}}>
              Aerospace Engineer.
          </h1>

          {/* About Paragraph */}
          <div className={classes.para}>
            I'm a senior at the <b style={{color: '#033966'}}>University of Michigan</b> studying 
            <b style={{color: '#033966'}}> Aerospace Engineering</b> with a minor in <b style={{color: '#033966'}}>Computer Science</b>.
            I have experience in the application of computer science concepts to challenging physical problems like collision avoidance, 
            control and autonomy. 
          </div>

          <Button variant="outlined" className={classes.email}>
              Get In Touch
          </Button>
        </Grid>

        {/* Logos */}
        <Grid item xs={6} style={{textAlign: 'center'}}>
          <img src={logos} style={{width: "400px", marginTop: '100px'}}/>
        </Grid>
      </Grid>
    </div>
  );
}
