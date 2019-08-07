import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { LoremIpsum } from "lorem-ipsum";
import Grid from '@material-ui/core/Grid';
import profilePic from '../static/profile.jpg'

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
  rootDiv: {
    flexGrow: 1,
    width: '100%',
    padding: '100px',
    marginTop: 200,
    backgroundColor: '#85858C'
  },
  rootGrid : {
    flexGrow: 1
  },
  profile: {
      maxWidth: '70%',
      maxHeight: '100%',
      width: 400,
      height: 310,
      borderRadius: 12,
      marginTop: 40,
      marginLeft: 60,
      zIndex: 2
  },
  border : {
      border: '2px solid',
      borderColor: '#D5573B',
      maxWidth: '70%',
      maxHeight: '100%',
      height: 310,
      width: 400,
      borderRadius: 12,
      zIndex: 1,
      marginTop: -305,
      marginLeft: 77,
  },
  divider: {
      color: "#011627",
      width: 430,
      height: '1px',
      backgroundColor: '#011627',
      border: 'none',
      marginTop: -32,
      marginLeft: 140,
      marginBottom: 20
  },
  list: {
    '& li' : {
        color: '#D5573B',
        fontWeight: 'bold',
        '& span': {
            color: 'white',
            display: 'inline',
            fontWeight: 'normal'
        }
    }
  }
}));

export default function SideBar() {
  const classes = useStyles();

  return (
    <div>
    <div className={classes.rootDiv} id="about">
        <Grid container clasName={classes.rootGrid} spacing={10}>
            <Grid item xs={6}>
                <h2 style={{color: '#011627'}}> <p style={{color: '#D5573B', display: 'inline'}}> 01. </p> About Me </h2>
                <hr className={classes.divider}/>
                <div style={{color: 'white'}}>
                
                {lorem.generateParagraphs(1)}
                <br />
                {lorem.generateParagraphs(1)}
                </div>

                <ol className={classes.list}>
                    <Grid container spacing={4}>
                        <Grid item xs={6}>
                            <li> <span>C++ </span></li>
                            <li> <span>Python</span> </li>
                            <li> <span>MATLAB</span> </li>
                        </Grid>
                        <Grid item xs={6}>
                            <li> <span>Javascript</span></li>
                            <li> <span>LaTex</span> </li>
                            <li> <span>HTML / CSS</span> </li>
                        </Grid>
                    </Grid>
                </ol>
            </Grid>

            <Grid item xs={6}>
                <img src={profilePic} className={classes.profile}/>
                <div className={classes.border}/>
            </Grid>
        </Grid>
    </div>
    </div>
  );
}
