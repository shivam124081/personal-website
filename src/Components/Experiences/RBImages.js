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
        marginLeft: 95
      },
      images : {
        width: '500px',
      },
      document: {
        border: '1px solid',
        borderColor: '#d9d9d9',
        borderRadius: 10,
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
        <nav style={{}}>
          {/* Paper/Presentation select */}
          <div style={{float: 'left', display: 'inline'}}>
            <Select
              native
              value={this.state.value}
              input={<OutlinedInput name="age" id="outlined-age-simple" classes={{root: classes.input}}/>}
              classes={{
                root: classes.select,
              }}
              color="none"
              onChange={this.handleChange}
            >
              <option value={0}>Paper</option>
              <option value={1}>Presentation</option>
            </Select>
          </div>
          <div style={{float: 'right', display: 'inline'}}>
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
          </div>
        </nav>
        <br />
        <br />
        <div className={classes.document}>
            <img src={RBgif} className={classes.images} />
        </div>
           
        </div>
    );
  }
}

export default withStyles(styles)(PDF);
