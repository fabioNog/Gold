import React, { Component } from 'react';

import './App.css';
import AppBar from './template/appBar'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { indigo700, blueGrey800 } from 'material-ui/styles/colors';


const muiTheme = getMuiTheme({
  palette: {
    primary1Color: indigo700,
    accent1Color: blueGrey800,
  }
})




class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <AppBar title="My AppBar" />
      </MuiThemeProvider>
    );
  }
}

export default App;
