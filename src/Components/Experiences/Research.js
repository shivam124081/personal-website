import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import ResearchPaper from './PDF'
import { withStyles } from '@material-ui/core/styles';
import { LoremIpsum } from "lorem-ipsum";

import michiganLogo from '../../static/michigan.png'

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

const styles = {
  rootDiv: {
    flexGrow: 1
  },
  root: {
    marginTop: -30,
    textAlign: 'center',
    width: 380,
    marginLeft: 200
  },
  section: {
    fontWeight: 'bold',
    color: '#033966'
  },
  logo : {
    width: '300px',
  },
  list : {
    '& li': {
      color: '#033966',
      '& span' : {
        color: '#403F4C'
      }
    }
  },
  link : {
    textDecoration: 'none'
  }
};

class Research extends Component {
  state = { numPages: null, pageNumber: 1 };

  render() {
    const {classes} = this.props

    return (
        <div className={classes.rootDiv}>
        <Grid container >
          {/* Text */}
          <Grid item xs={6}>
            <img src={michiganLogo} className={classes.logo}/>
            <br />
            <br />
            <p className={classes.section} style={{display: 'inline'}}> Title: </p> <p style={{display: 'inline'}}> Researcher </p>

            <p className={classes.section}> Overview </p>
            Participated in research to formally verify the safety of next generation aircraft collision avoidance
            neural networks. This was a joint project between Stanford and the University of Michigan. Using aircraft 
            dynamics we defined 'safe-regions' which were used to bound and search the neural networks for 
            unsafe behavior using the linear program solver Reluplex. The neural networks are checked for unsafe behaviour
            exposing thousands of unsafe counter-examples. 

            <p className={classes.section}> Key Achievements </p>
            <ul className={classes.list}>
              <li> <span> First authored paper, presentation and presented work at <a href="google.com" className={classes.link}>AAAI symposium</a> at Stanford </span> </li>
              <li> <span> Unveiled thousands of counter-examples to safe behaviour in next generation collision avoidance 
                neural networks. </span> </li>
            </ul>
          </Grid>

          {/* Paper */}
          <Grid item xs={6}>
            <ResearchPaper />
          </Grid>
        </Grid>
        </div>
    );
  }
}

export default withStyles(styles)(Research);
