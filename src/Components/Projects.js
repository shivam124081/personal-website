import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import GTOC from './Projects/GTOC'
import Enceladus from './Projects/Enceladus'
import AMSID from './Projects/AMSID'
import MITEE from './Projects/MITEE'
import './Projects.css';

const styles = {
  divider: {
    color: "#011627",
    width: "40%",
    height: '1px',
    backgroundColor: '#011627',
    border: 'none',
    marginTop: -32,
    marginLeft: 205,
    marginBottom: 20
  },
  grid: {
    marginTop: '10px',
    marginBottom: '10px'
  }
};

class Projects extends Component {
  state = { };

  render() {
    const { pageNumber, numPages, value } = this.state;
    const {classes} = this.props

    return (
        <div className="section-root" style={{backgroundColor: '#85858C'}} id='projects'>
        <div id='projects-container'>
        <h2 style={{color: '#011627'}}> <p style={{color: '#D5573B', display: 'inline'}}></p> Other Projects </h2>
        <hr className={classes.divider}/>
        <Grid container justify="space-around" alignContent="flex-start">
            <Grid item md={4} className={classes.grid}>
              <AMSID />
            </Grid>

            <Grid item md={4} className={classes.grid}>
              <Enceladus />
            </Grid>

            <Grid item md={4} className={classes.grid}>
              <GTOC />
            </Grid>

            <Grid item md={12} className={classes.grid}>
              <MITEE />
            </Grid>
        </Grid>
        </div>
        </div>

    );
  }
}

export default withStyles(styles)(Projects);
