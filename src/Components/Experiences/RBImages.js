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
import RBgif from '../../static/RBAIGIF.gif';

const styles = {
    root: {
        flexGrow: 1,
        marginTop: -10,
        textAlign: 'center',
        marginLeft: 55
      },
      images : {
        width: '400px',
        marginBottom: '-10px'
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
        margin: '0 auto',
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
  state = { numPages: null, pageNumber: 1, value: 0, content: researchPaper };

  render() {
    const { pageNumber, numPages, value } = this.state;
    const {classes} = this.props

    return (
      <div className={classes.root}>
        <nav style={{width: 400, textAlign: 'center'}}>
          {/* Paper/Presentation select */}

          <IconButton 
            disabled={pageNumber === 1 ? true : false}
            aria-label="prev"
            onClick={this.goToPrevPage} 
            className={classes.navbutton} >
            <PrevIcon/>
          </IconButton>
          <IconButton
            disabled={pageNumber === numPages ? true : false}
            aria-label="prev"
            onClick={this.goToNextPage}
            className={classes.navbutton}>
            <NextIcon />
          </IconButton>

        </nav>
        <div className={classes.document}>
            <img src={RBgif} className={classes.images} />
        </div> 
        </div>
    );
  }
}

export default withStyles(styles)(PDF);