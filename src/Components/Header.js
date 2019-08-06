import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link, animateScroll as scroll } from "react-scroll";


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appbar: {
      backgroundColor: "#011627",
      marginTop: 0,
      position: 'fixed'
  },
  shivam : {
    marginLeft: 0,
    marginRight: 'auto',
    color: 'white',
    '&:hover' : {
        color: '#D5573B',
        cursor: 'pointer'
    }
  },
  sections: {
      marginLeft: 'auto',
      marginRight: 0,
      display: 'inline',
      fontWeight: 'bold',
      '& div' : {
        display: 'inline',
        paddingRight: '5px',
        paddingLeft: '5px',
        color: '#D5573B',
        '& p' : {
            display: 'inline',
            color: 'white',
            '&:hover' : {
                color: '#D5573B',
                cursor: 'pointer'
            }
        }
      }
  },
  resume: {
      display: 'inline',
      color: '#D5573B',
      borderColor: '#D5573B',
      fontWeight: 'bold',
      '&:hover' : {
        color: '#011627',
        borderColor: '#D5573B',
        backgroundColor: '#D5573B'
      }
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar} id="appbar">
        <Toolbar>
            <div className={classes.shivam}>
                <h4 style={{diplay: 'inline'}}> 
                    <Link 
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}>
                        <i class="fa fa-home" style={{fontSize:'26px', color: '#D5573B', paddingRight: 5}} />
                        Shivam Sharma
                    </Link>
                </h4>
            </div>

            <div className={classes.sections}>
                <div> 01. <p> <Link activeClass="active"
                                    to="about"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration= {500}> About </Link> </p> </div>   
                <div> 02. <p> <Link activeClass="active"
                                    to="experience"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration= {500}> Experience </Link> </p> </div>
                <div> 03. <p> <Link activeClass="active"
                                    to="projects"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration= {500}> Projects </Link> </p> </div>
                <div> 04. <p> <Link activeClass="active"
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration= {500}> Contact </Link> </p> </div>
                <Button variant="outlined" className={classes.resume}>
                    Resume
                </Button>
            </div>

        </Toolbar>
      </AppBar>
    </div>
  );
}
