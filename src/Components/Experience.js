import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Research from './Experiences/Research'
import { LoremIpsum } from "lorem-ipsum";
import Redbrick from './Experiences/Redbrick';
import Hyperloop from './Experiences/Hyperloop';
import './Experience.css';

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4
    },
    wordsPerSentence: {
      max: 16,
      min: 4
    }
});


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}


const useStyles = makeStyles(() => ({
  rootHorizontal: {
    flexGrow: 1,
    display: 'flex',
    padding: 10,
    borderRadius: 12,
  },
  rootVertical: {
    flexGrow: 1,
    display: 'flex',
    padding: 10,
    borderRadius: 12,
  },
  tabs: {
    width: '200px'    
  },
  tab: {
    color: 'black',
    '&:hover':{
      color: '#D5573B',
      fontWeight: 'bold',
    }
  },
  tabSelect: {
      backgroundColor: '#FFF',
      borderRadius: '5px',
      color: '#D5573B',
  },
  divider: {
    color: "#033966",
    width: '40%',
    height: '1px',
    backgroundColor: '#033966',
    border: 'none',
    marginTop: -32,
    marginLeft: 205,
    marginBottom: 20
},
}));

export default function Experience() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className="section-root" id="experience">
    <h2 style={{color: '#033966'}}> <p style={{color: '#D5573B', display: 'inline'}}></p> Key Experiences </h2>
    <hr className={classes.divider}/>

    <div className="root-tab-div" style={{overflowX: 'scroll !important'}}>
      
      {/* Horizontal Tabs */}
      <Tabs
        value={value}
        onChange={handleChange}
        id="horizontal-tabs"
        aria-label="horizontal tabs example"
        className={classes.tabs}
        indicatorColor="none"
        centered
      >
        <Tab label="Research" className={ value === 0 ? classes.tabSelect : classes.tab} {...a11yProps(0)} />
        <Tab label="RedBrick AI" className={ value === 1 ? classes.tabSelect : classes.tab} {...a11yProps(1)} />
        <Tab label="Hyperloop" className={ value === 2 ? classes.tabSelect : classes.tab} {...a11yProps(2)} />
      </Tabs>
      <br />

      {/* Vertical Tabs */}
      <Tabs
        orientation="vertical"
        value={value}
        id="vertical-tabs"
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
        indicatorColor="none"
      >
        <Tab label="Research" className={ value === 0 ? classes.tabSelect : classes.tab} {...a11yProps(0)} />
        <Tab label="RedBrick AI" className={ value === 1 ? classes.tabSelect : classes.tab} {...a11yProps(1)} />
        <Tab label="Hyperloop" className={ value === 2 ? classes.tabSelect : classes.tab} {...a11yProps(2)} />

      </Tabs>
      <TabPanel value={value} index={0} >
        <Research />
      </TabPanel>
      <TabPanel value={value} index={1} >
        <Redbrick />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Hyperloop />
      </TabPanel>
    </div>
    </div>
  );
}