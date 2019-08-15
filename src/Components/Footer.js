import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx'


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2, 1),
    textAlign: 'center',
    backgroundColor: '#85858C', 
    marginTop: '50px',
    color: 'black',
    verticalAlign: 'middle',
    fontSize: '11px',
    '&:hover': {
        cursor: 'pointer',
        color: 'white',
        '& i': {
            color: 'white !important'
        }
    }
  },
  icon: {
    fontSize:'20px',
    color: 'black',
    paddingLeft: '5px',
    verticalAlign: 'middle'
  }
}));

export default function PaperSheet() {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root} onClick={() => {window.location = "https://github.com/shivam124081/personal-website"}}>
            <span> Built by Shivam Sharma, inspired by Material Design</span>
            <i className={clsx(`fa fa-github ${classes.icon}`)}></i>

      </Paper>
    </div>
  );
}