import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import ResearchPaper from './PDF'
import { withStyles } from '@material-ui/core/styles';
import { LoremIpsum } from "lorem-ipsum";

import RBimgaes from './RBImages'
import redbrickLogo from '../../static/redbrick.png'

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
        width: '200px',
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

class Redbrick extends Component {
  state = { numPages: null, pageNumber: 1 };

  render() {
    const {classes} = this.props

    return (
        <div className={classes.rootDiv}>
        <Grid container spacing={4}>
          {/* Text */}
          <Grid item xs={6}>
            <img src={redbrickLogo} className={classes.logo}/>
            <br />
            <br />
            <p className={classes.section} style={{display: 'inline'}}> Title: </p> <p style={{display: 'inline'}}> Co-founder </p>

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
            <RBimgaes />
          </Grid>
        </Grid>
        </div>
    );
  }
}

export default withStyles(styles)(Redbrick);
