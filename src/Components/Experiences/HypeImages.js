import React, { Component } from "react";
import { Document, Page, pdfjs } from 'react-pdf';
import researchPaper from '../SSS19_final.pdf'
import researchPres from '../Safeable_VNN19.pdf'
import { withStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import PrevIcon from '@material-ui/icons/KeyboardArrowLeft';
import NextIcon from '@material-ui/icons/KeyboardArrowRight';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';

import Pod1 from '../../static/SubtrackPod1.jpg';
import Pod2 from '../../static/pod3.jpg';
import Pod3 from '../../static/pod2.jpg';
import Pod4 from '../../static/pod4.mp4'

const images = [Pod1, Pod2, Pod3];
const videos = [Pod4]
const descriptions = ["OpenLoop pod on SpaceX subtrack during testing weekend Competition I.",
                      "Pod without shell in vacuum tube at SpaceX for test.",
                      "Pod in front of race vacuum tube.",
                      "Timelapse of carbon fiber shell layups."]

const styles = {
    root: {
        flexGrow: 1,
        marginTop: -10,
        textAlign: 'center',
        marginLeft: 55
      },
      images : {
        width: '430px',
        marginBottom: '-10px'
      },
      document: {
        border: '1px solid',
        borderColor: '#d9d9d9',
        borderRadius: 10,
        width: 430,
        overflow: 'hidden',
      },
      navbutton: {
        color: '#D5573B',
        '&:hover' : {
          color: '#033966',
          backgroundColor: '#D5573B',
        }
      },
      pagenum: {
        float: 'left',
        textAlign: 'left',
        color: '#033966',
        width: '400px'
      },
      select : {
        height: "30px",
        width: "120px",
        padding: "0",
        paddingLeft: "5px",
        '&:hover' : {
        }
      },
      input: {
        '&:hover': {
          borderColor: 'red'
        }
      }
};

class PDF extends Component {
  state = { numPages: null, pageNumber: 0, value: 0, content: researchPaper };

  goToPrevPage = () =>
    this.setState(state => ({ pageNumber: state.pageNumber - 1 }));
  goToNextPage = () =>
    this.setState(state => ({ pageNumber: state.pageNumber + 1 })); 

  render() {
    const { pageNumber, value } = this.state;
    const {classes} = this.props

    return (
      <div className={classes.root}>
        <nav style={{width: 400, textAlign: 'center'}}>
          {/* Paper/Presentation select */}

          <IconButton 
            disabled={pageNumber === 0 ? true : false}
            aria-label="prev"
            onClick={this.goToPrevPage} 
            className={classes.navbutton} >
            <PrevIcon/>
          </IconButton>
          <IconButton
            disabled={pageNumber === images.length+videos.length-1 ? true : false}
            aria-label="prev"
            onClick={this.goToNextPage}
            className={classes.navbutton}>
            <NextIcon />
          </IconButton>

        </nav>
        <div className='document'>
            {/*  */}
            {pageNumber === 3 ? (
              <video className='images-rb' controls>
                <source src={videos[pageNumber-3]} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img src={images[pageNumber]} className='images-rb' /> 
            )}
        </div>
        <p className={classes.pagenum}> <b>Description: </b>{descriptions[pageNumber]} </p>
        </div>
    );
  }
}

export default withStyles(styles)(PDF);
