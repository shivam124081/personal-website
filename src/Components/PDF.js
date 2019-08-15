import React, { Component } from "react";
import { Document, Page, pdfjs } from 'react-pdf';
import researchPaper from './SSS19_final.pdf'
import researchPres from './Safeable_VNN19.pdf'
import { withStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import PrevIcon from '@material-ui/icons/KeyboardArrowLeft';
import NextIcon from '@material-ui/icons/KeyboardArrowRight';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import '../App.css';
import './Pdf.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const styles = {
  root: {
    flexGrow: 1,
    marginTop: -10,
    textAlign: 'center',
    marginLeft: 25
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
    margin: '10 auto 0',
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
  },
};

class PDF extends Component {
  state = { numPages: null, pageNumber: 1, value: 0, content: researchPaper };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  goToPrevPage = () =>
    this.setState(state => ({ pageNumber: state.pageNumber - 1 }));
  goToNextPage = () =>
    this.setState(state => ({ pageNumber: state.pageNumber + 1 }));
  
  handleChange = (event) => {
    this.setState({value: event.target.value})
    if (this.state.value === 0) {
      this.setState({content: researchPaper})
    } else {
      this.setState({content: researchPres})
    }
  }

  render() {
    const { pageNumber, numPages, value } = this.state;
    const {classes} = this.props

    return (
      <div>
        <nav style={{}}>
          {/* Paper/Presentation select */}
          <div style={{float: 'left', display: 'inline', marginTop: 12}}>
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

        <div className={classes.document} style={{width: "100%", marginTop: 20}}>
          <Document
            file={value === 0 ? researchPaper : researchPres}
            onLoadSuccess={this.onDocumentLoadSuccess}
            width={100}
          >
            <Page pageNumber={pageNumber}/>
          </Document>
        </div>
        <p className={classes.pagenum}> Page {pageNumber} of {numPages} </p>
      </div>
    );
  }
}

export default withStyles(styles)(PDF);
