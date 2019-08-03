import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: 200,
    marginLeft: 20,
    marginRight: 'auto',
    position: 'fixed',
    display: 'inline-block'
  }
}));

export default function SideBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <i class="fa fa-linkedin-square" style={{fontSize:'26px', color: 'black'}}></i>
        <br />
        <i class="fa fa-instagram" style={{fontSize:'26px', color: 'black'}}></i>
        <br />
        <i class="fa fa-github" style={{fontSize:'26px', color: 'black'}}></i>
    </div>
  );
}
