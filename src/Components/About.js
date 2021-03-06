import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { LoremIpsum } from "lorem-ipsum";
import Grid from '@material-ui/core/Grid';
import profilePic from '../static/profile.jpg';
import './About.css';

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
  rootGrid : {
    flexGrow: 1
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
      width: '40%',
      height: '1px',
      backgroundColor: '#011627',
      border: 'none',
      marginTop: -32,
      marginLeft: 140,
      marginBottom: 20
  },
}));

export default function SideBar() {
  const classes = useStyles();

  return (
    <div className="section-root" style={{backgroundColor: '#85858C'}} id="about">
        <Grid container clasName={classes.rootGrid} id="about-root-grid">
            <Grid item xs={6}>
                <h2 style={{color: '#011627'}}> <p style={{color: '#D5573B', display: 'inline'}}></p> About Me </h2>
                <hr className={classes.divider}/>
                <div style={{color: 'white'}}>
                  I am a senior at the University of Michigan majoring in Aerospace Engineering, with a minor in Computer Science. 
                  Through my coursework, projects, and work experience I have developed engineering problem solving skills, especially 
                  in the interface between software and hardware. I enjoy being passionately engaged in challenging problems, and working
                  in driven high-paced teams. 
                <br />
                Below are some of the software languages that I have experience in. 
                </div>

                <ol>
                    <Grid container justify="center">
                        <Grid item xs={6}>
                          <ul className="techdetails">
                            <li> <span>C++ </span></li>
                            <li> <span>Python</span> </li>
                            <li> <span>MATLAB</span> </li>
                            </ul>
                        </Grid>
                        <Grid item xs={6}>
                          <ul className="techdetails">
                            <li> <span>Javascript</span></li>
                            <li> <span>LaTex</span> </li>
                            <li> <span>HTML / CSS</span> </li>
                            </ul>
                        </Grid>
                    </Grid>
                </ol>
            </Grid>

            <Grid item xs={6}>
                <img src={profilePic} className='profile-img' id="profile-img"/>
            </Grid>
        </Grid>
    </div>
  );
}
