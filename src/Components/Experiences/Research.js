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
  }
};

class Research extends Component {
  state = { numPages: null, pageNumber: 1 };

  render() {
    const {classes} = this.props

    return (
        <div className={classes.rootDiv}>
        <Grid container spacing={4}>
          {/* Text */}
          <Grid item xs={6}>
            <img src={michiganLogo} className={classes.logo}/>
            <br />
            <br />
            <p className={classes.section} style={{display: 'inline'}}> Title: </p> <p style={{display: 'inline'}}> Researcher </p>

            <p className={classes.section}> Overview </p>
            {lorem.generateSentences(5)}

            <p className={classes.section}> Key Achievements </p>
            <ul className={classes.list}>
              <li> <span> {lorem.generateSentences(1)} </span> </li>
              <li> <span> {lorem.generateSentences(1)} </span> </li>
              <li> <span> {lorem.generateSentences(1)} </span> </li>
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
