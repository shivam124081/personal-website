import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx'
import AMSID_Pics from './AMSID_Pics'
import '../../Projects.css'

const useStyles = makeStyles(theme => ({
  root:  {
    textAlign: 'center',
    padding: '50px',
  },
  button: {
    color: '#D5573B',
    borderColor: '#D5573B',
    fontWeight: 'bold',
    marginLeft: 'auto',
    '&:hover' : {
      color: 'white !important',
      borderColor: '#D5573B !important',
      backgroundColor: '#D5573B !important'
    }
},
}));

export default function ResponsiveDialog(moreInfo) {
  const classes = useStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={moreInfo.moreInfo}
        onClose={() => {moreInfo.setMoreInfo(false)}}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{moreInfo.title}</DialogTitle>
        <DialogContent className={clsx("view-scroll", "project-more")}>
          <DialogContentText style={{color: 'black'}}>
            <h4> Key Contributions </h4>
            <ul>
              <li>Wrote all software for the vehicle on an Arduino - RC transmission, Servo control, Sensor readings etc.</li>
              <li>Wrote real-time avergaing filter for noisy sensor data</li>
              <li>Developed linear model of dynamics to design the controller</li>
            </ul>
            <AMSID_Pics />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => {moreInfo.setMoreInfo(false)}} className={classes.button} variant="outlined">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}