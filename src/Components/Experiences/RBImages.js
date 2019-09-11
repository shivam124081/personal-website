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

import workflowGif from '../../static/rb-workflow.gif'
import RBgif from '../../static/RBAIGIF.gif';
import rbVid from '../../static/rb-overview.mp4';

const images = [workflowGif, rbVid, RBgif]
const videos = [rbVid]
const descriptions = ['Completely customizable workflow, high-performance labeling, and a collaborative environment',
                      'Create and manage high-quality vision training data.',
                      'Create and manage high-quality vision training data.',
                    ]

const styles = {
    root: {
        flexGrow: 1,
        marginTop: -10,
        textAlign: 'center',
        marginLeft: 55
      },
      document: {
        border: '1px solid',
        borderColor: '#d9d9d9',
        borderRadius: 10,
        width: 400,
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
        color: '#033966'
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
    const { pageNumber } = this.state;
    const {classes} = this.props

    return (
      <div className={classes.root}>
        <nav className='nav'>
          {/* Paper/Presentation select */}

          <IconButton 
            disabled={pageNumber === 0 ? true : false}
            aria-label="prev"
            onClick={this.goToPrevPage} 
            className={classes.navbutton} >
            <PrevIcon/>
          </IconButton>
          <IconButton
            disabled={pageNumber === images.length - 1? true : false}
            aria-label="prev"
            onClick={this.goToNextPage}
            className={classes.navbutton}>
            <NextIcon />
          </IconButton>

        </nav>
        <div className='document'>
            {/*  */}
            {pageNumber === 1 ? (
              <video className='images-rb' id='images-rb' controls>
                <source src={videos[0]} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img src={images[pageNumber]} className='images-rb' id='images-rb'/> 
            )}
        </div>
        <p className='pagenum'> <b>Description: </b>{descriptions[pageNumber]} </p>
        </div>
    );
  }
}

export default withStyles(styles)(PDF);
