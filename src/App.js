import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import AppBarExampleIcon from './nav-bar'
import CardExampleWithAvatar from './course-item'
import BottomNavigationExampleSimple from './bottom-nav'
import AutoCompleteExampleSimple from './search-bar'
import Logo from './logo.js'
import LogIn from './LogIn';

injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
        <div>
            <AppBarExampleIcon />
            <LogIn />
        </div>
          <Logo />
          <AutoCompleteExampleSimple />
          <CardExampleWithAvatar />
          <CardExampleWithAvatar />
          <CardExampleWithAvatar />
          <BottomNavigationExampleSimple />
        </div>
      </MuiThemeProvider>
    );
  }
}



export default App;
