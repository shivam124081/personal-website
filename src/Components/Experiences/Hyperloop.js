import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import ResearchPaper from './PDF'
import { withStyles } from '@material-ui/core/styles';
import { LoremIpsum } from "lorem-ipsum";

import HypeImages from './HypeImages'
import hypeLogo from '../../static/mhyperloop.png'

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
        <Grid container spacing={1}>
          {/* Text */}
          <Grid item lg={6}>
            <img src={hypeLogo} id='logo'/>
            <br />
            <br />
            <p className={classes.section} style={{display: 'inline'}}> Title: </p> <p style={{display: 'inline'}}> Co-founder, Engineering Lead </p>

            <p className={classes.section}> Overview </p>
            Co-founded the team at University of Michigan, and participated in the SpaceX Hyperloop Competition (I,II). Our
            team was 1 of 23 (from over 300 around the world) selected by SpaceX to design and build prototype pods, and test
            them at their facility in Hawthorne CA. 
            <br />
            <br />
            Worked towards forming and establishing the team at the university, raise funds for build and travel, manage team
            of undergraduates and graduate students, and responsible for design, analysis and build of major engineering 
            systems of the vehicle. 
            <p className={classes.section}> Key Achievements </p>
            <ul className={classes.list}>
              <li> <span> Selected by SpaceX as 1 of 23 teams (from over 300) for final round of competition I & II </span> </li>
              <li> <span> Led design and analysis of critical engineering systems and designed magnetic systems of vehicle </span> </li>
              <li> <span> Core involvement in manufacturing (moulds, tooling, layup) of 18ft. Carbon Fiber Shell </span> </li>
            </ul>
          </Grid>

          {/* Paper */}
          <Grid item lg={6}>
            <HypeImages />
          </Grid>
        </Grid>
        </div>
    );
  }
}

export default withStyles(styles)(Redbrick);
