import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { LoremIpsum } from "lorem-ipsum";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import logos from '../static/logos.svg';
import './Intro.css';

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

const cycle = ['U8ha5seT4fJ3F0bk9', '8S4IF5ZwxYoU0J6P9', 'DRIAwVIc6q0DW9ose',
              'UTsdreBJBQIQsXqzW', 'qdF2CIiyTyWPGGY0e', 'sxO2QSUKIdu13gpfh',
              'ssCVY0azuDU0oxwEG', 'sshiaGiu31Usx28hdN', 'sshivqhoqGQA9W3yky',
              'sshivamY2DqTwaNIf', 'sshivam@u9OORe5FxF', 'sshivam@umkRvOMXL',
              'sshivam@umiClgp1e', 'sshivam@umicCbOVp', 'sshivam@umichGQA9',
              'sshivam@umich.NIf', 'sshivam@umich.e28', 'sshivam@umich.ed3',
              'sshivam@umich.edu']

export default function Intro() {
  const classes = useStyles();
  const [email, setEmail] = useState(
    'Zh9SvSG72d3VnNzlY'
  );
  const [reveal, setReveal] = useState(
    0
  );

  function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // EFFECTS: handle button reveal
  async function handleReveal() {
    if (reveal === 0) {
      for (let i=0; i<cycle.length; ++i) {
        await timeout(85)
        setEmail(cycle[i]);
      }
      setReveal(1)
    } else {
      window.location = "mailto:sshivam@umich.edu";
    }
  }

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

          <Button variant="outlined" className={classes.email} onClick={handleReveal}>
             {email}
          </Button>
          {email === 'Zh9SvSG72d3VnNzlY' &&
          <p style={{fontSize: 11, marginTop: 0, fontWeight: 'bold', color: '#033966'}}> Click to reveal email </p>
          }

        </Grid>

        {/* Logos */}
        <Grid item xs={6} style={{textAlign: 'center'}}>
          <img src={logos} style={{width: "400px", marginTop: '100px'}}/>
        </Grid>
      </Grid>
    </div>
  );
}
