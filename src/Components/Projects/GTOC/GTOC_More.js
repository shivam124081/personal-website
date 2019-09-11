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
import GTOCPics from './GTOC_Pics'
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

export default function GTOCMore(moreInfo) {
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
              <li>Utilized K-NN algorithm to cluster stars in galaxy and find best locations for exploration</li>
              <li>Wrote branch-and-bound Travelling Salesman algorithm (with MST pruning). Software written in C++. TSP solver
                  used to link together star clusters. 
              </li>
              <li>Wrote a branch-and-bound algorithm (with delta-V pruning) for inter-cluster exploration</li>
            </ul>
            <GTOCPics />
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