import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import './App.css';

import Header from './Components/Header'
import Intro from './Components/Intro'
import SideBar from './Components/SideBar'
import About from './Components/About'
import Experience from './Components/Experience'
import Projects from './Components/Projects'
import Coursework from './Components/Coursework'
import Contact from './Components/Contact'

function App() {
  return (
    <React.Fragment>
        <Header />
        <SideBar />
        <Intro />
        <About />
        <Experience />
        <Projects />
        <Coursework />
        <Contact /> 
    </React.Fragment>
  );
}

export default App;
