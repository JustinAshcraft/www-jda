import React from 'react';
//import logo from './logo.svg';


import Profile from "./components/Profile/profile";
import Skills from "./components/Skills/skills";
import Background from './components/Background/background';

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import theme from './theme';

import './App.scss';

function App(props) {
  return (
    <div className="App">

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Background></Background>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              Justin Ashcraft
          </Typography>
          </Toolbar>
        </AppBar>
        <Profile></Profile>
        <Skills></Skills>
        
      </ThemeProvider>
    </div>
  );
}

export default (App);
