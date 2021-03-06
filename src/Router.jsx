import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';

import HomePage from './pages/HomePage';
import NewGame from './pages/GamePage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Edit_User from './pages/Edit_User'
import About from './pages/About';

import Auth from './Auth';
import HighScore from './pages/HighScore';

const Router = (props) => (

  <HashRouter>
    <Switch>
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/highscore" component={HighScore} />
      <Route exact path="/about" component={About} />
      <PrivateRoute exact path="/" component={HomePage} />
      <PrivateRoute path="/game/:mode/:level" component={NewGame} />
      <PrivateRoute exact path="/edit-user" component={Edit_User} />
    </Switch>
  </HashRouter>

)

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      Auth.getAuth() ? (
        <Component {...props} />
      ) : (
          <Redirect
            to={{
              pathname: "/login"
            }}
          />
        )
    }
  />
);


export default Router;