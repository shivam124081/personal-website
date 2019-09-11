import React, { Component } from "react";
import { Document, Page, pdfjs } from 'react-pdf';
import { withStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import PrevIcon from '@material-ui/icons/KeyboardArrowLeft';
import NextIcon from '@material-ui/icons/KeyboardArrowRight';

import enc1 from '../../../static/Enceladus/orbit.gif';
import enc2 from '../../../static/Enceladus/flowchart.jpg'
import enc3 from '../../../static/Enceladus/dijkstra.gif'
import enc4 from '../../../static/Enceladus/branch.gif'

const images = [enc1, enc2, enc3, enc4];
const videos = []
const descriptions = ["Optimized Solar system orbital flyby sequence using MGA-1DSM problem formulation, and genetic optimization (PyKEP and PyGMO)",
                      "Flowchart overview of orbital analysis approach.",
                      "Dijkstra's algorithm on graphical representation of a tisserand plot to find possible flyby sequences",
                      "Branch and bound search using v-infinity leveraging technique as pruning criteria, to find viable moon flyby sequences"]

const styles = {
    root: {
        marginTop: -10,
        textAlign: 'center',
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
        textAlign: 'center',
        margin: '0 auto !important'
      },
      navbutton: {
        color: '#D5573B',
        size: 40,
        '&:hover' : {
          color: '#033966',
          backgroundColor: '#D5573B',
        }
      },
      pagenum: {
        width: 430,
        margin: '0 auto !important',
        textAlign: 'left',
        color: '#033966',
        width: '400px',
        paddingTop: '10px'
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

class EnceladusPics extends Component {
  state = { numPages: null, pageNumber: 0 };

  goToPrevPage = () =>
    this.setState(state => ({ pageNumber: state.pageNumber - 1 }));
  goToNextPage = () =>
    this.setState(state => ({ pageNumber: state.pageNumber + 1 })); 

  render() {
    const { pageNumber } = this.state;
    const {classes} = this.props

    return (
      <div className={classes.root}>
        <nav style={{textAlign: 'center'}}>
          {/* Paper/Presentation select */}

          <IconButton 
            disabled={pageNumber === 0 ? true : false}
            aria-label="prev"
            onClick={this.goToPrevPage} 
            className={classes.navbutton} >
            <PrevIcon style={{fontSize:35}}/>
          </IconButton>
          <IconButton
            disabled={pageNumber === images.length+videos.length-1 ? true : false}
            aria-label="prev"
            onClick={this.goToNextPage}
            className={classes.navbutton}>
            <NextIcon style={{fontSize:35}} />
          </IconButton>

        </nav>
        <div className={classes.document}>
            {/*  */}
            {pageNumber === -1 ? (
              <video className={classes.images} controls>
                <source src={videos[pageNumber]} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img src={images[pageNumber]} className={classes.images} /> 
            )}
        </div>
        <p className={classes.pagenum}> <b> Description: </b>{descriptions[pageNumber]} </p>
        </div>
    );
  }
}

export default withStyles(styles)(EnceladusPics);
