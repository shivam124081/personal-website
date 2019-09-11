import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
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
        width: '120px',
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
          <Grid item xs={5}>
            <img src={redbrickLogo} className={classes.logo}/>
            <br />
            <br />
            <p className={classes.section} style={{display: 'inline'}}> Title: </p> <p style={{display: 'inline'}}> Co-founder, Developer </p>

            <p className={classes.section}> Overview </p>
            RedBrick is a Software platform for creating and managing computer vision data sets. The platform offers
            a variety of labeling tools (bounding boxes, segmentation, polygons), a collaborative environment, and 
            a labels quality management pipeline. The platform is completely configurable for teams to use, and fit 
            into their existing workflows. 

            <p className={classes.section}> Key Achievements </p>
            <ul className={classes.list}>
              <li> <span> Designed and built application front-end using - React JS, HTML & CSS.</span> </li>
              <li> <span> Built backend (python) pre-labeling features (automated labeling, and pre-generated labels) </span> </li>
              <li> <span> Onboarded 2 research teams (<a href="https://mcity.umich.edu/">MCity</a> and UofM Aerospace Engineering) within 3 months.</span> </li>
            </ul>
          </Grid>

          {/* Paper */}
          <Grid item xs={7}>
            <RBimgaes />
          </Grid>
        </Grid>
        </div>
    );
  }
}

export default withStyles(styles)(Redbrick);
