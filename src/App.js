import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import './App.css';
import Header from './Components/Header'
import Intro from './Components/Intro'
import SideBar from './Components/SideBar'
import About from './Components/About'

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
        <Header />
        <SideBar />
        <Container>
          <br />
          <br />
          <Intro />
          <About />
          <About />
        </Container>
    </React.Fragment>
  );
}

export default App;
