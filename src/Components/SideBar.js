import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: 340,
    marginLeft: 20,
    marginRight: 'auto',
    position: 'fixed',
    display: 'inline-block'
  },
  icon: {
    fontSize:'26px',
    color: 'black',
    transition: 'all .1s ease-in-out',
    padding: '2px',
    '&:hover': {
      fontSize: '30px',
      cursor: 'pointer'
    }
  }
}));

export default function SideBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <i className={clsx(`fa fa-linkedin-square ${classes.icon}`)} onClick={()=>{window.location = "https://www.linkedin.com/in/shivam-sharma-38109210a/";}}></i>
        <br />
        <i className={clsx(`fa fa-instagram ${classes.icon}`)} onClick={()=>{window.location = "https://www.instagram.com/shivam124081/?hl=en";}}></i>
        <br />
        <i className={clsx(`fa fa-github ${classes.icon}`)}></i>
    </div>
  );
}
