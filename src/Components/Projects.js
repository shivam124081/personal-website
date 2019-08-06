import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import GTOC from './Projects/GTOC'
import Enceladus from './Projects/Enceladus'
import AMSID from './Projects/AMSID'
import MITEE from './Projects/MITEE'

const styles = {
  title: {
    flexGrow: 1,
    width: '100%',
    padding: '100px',
    backgroundColor: '#85858C'
  },
  divider: {
    color: "#011627",
    width: 430,
    height: '1px',
    backgroundColor: '#011627',
    border: 'none',
    marginTop: -32,
    marginLeft: 205,
    marginBottom: 20
  },
  grid: {
    paddingBottom: '10px',
    paddingTop: '10px'
  }
};

class Projects extends Component {
  state = { };

  render() {
    const { pageNumber, numPages, value } = this.state;
    const {classes} = this.props

    return (
        <div className={classes.title} id='projects'>
        <h2 style={{color: '#011627'}}> <p style={{color: '#D5573B', display: 'inline'}}> 02. </p> Other Projects </h2>
        <hr className={classes.divider}/>
        <Grid container alignItems="stretch">
            <Grid item xs={4} className={classes.grid}>
                <GTOC />
            </Grid>

            <Grid item xs={4} className={classes.grid}>
              <Enceladus />
            </Grid>

            <Grid item xs={4} className={classes.grid}>
              <AMSID />
            </Grid>

            <Grid item xs={4} className={classes.grid}>
              <MITEE />
            </Grid>
        </Grid>
        </div>

    );
  }
}

export default withStyles(styles)(Projects);
