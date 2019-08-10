import React from 'react';
import Profile from "./components/Profile/profile";
import Skills from "./components/Skills/skills";
import Projects from "./components/Projects/projects";
import Background from './components/Background/background';
// import Demo from './components/Demo/demo';

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
//import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import theme from './theme';
import CryptoTicker from './components/CryptoTicker/cryptoticker';

function App(props) {
  return (
    <div className="App">

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Background></Background>
        <AppBar position="static" color="default">
          <Toolbar>
            {/* <Typography variant="h6" color="inherit">Justin Ashcraft</Typography> */}
          </Toolbar>
        </AppBar>
        
        <Profile></Profile>
        <Skills></Skills>
        <Projects></Projects>
        <CryptoTicker></CryptoTicker>
      </ThemeProvider>
    </div>
  );
}

export default (App);
