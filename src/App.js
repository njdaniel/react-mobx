import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import Login from './components/login';
import NavBar from './components/navbar';


@inject('AuthStore')
@observer
class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <BrowserRouter>
          <div className="App">
            <header >
              <NavBar 
                isAuthenticated={this.props.AuthStore.isAuthenticated}
                user={this.props.AuthStore.username}
              />
            </header>
            <Switch>
              <Route exact path="/login" component={Login} />
            </Switch>

          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
