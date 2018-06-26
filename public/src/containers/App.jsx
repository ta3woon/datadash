import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import LandingPage from './Landing';
import Navigation from '../components/Navigation';
import OldMain from './OldMain';

import SignUpPage from '../components/authentication/SignUp';
import SignInPage from '../components/authentication/SignIn';
import PasswordForgetPage from '../components/authentication/PasswordForget';
import AccountPage from '../components/authentication/Account';

import * as routes from '../routes';
import '../../assets/css/App.css';
// import NavBar from '../components/NavBar';

// import * as routes from '../constants/routes';

// import OldMain from './OldMain';

const leftItems = [
  { as: "a", content: "Home / Analytics", key: "dashboards", icon: "area chart" },
  { as: "a", content: "Stores / Dashboards", key: "stores", icon: "building" },
  { as: "a", content: "Settings", key: "Settings", icon: "setting" },
  { as: "a", content: "Help", key: "Help", icon: "help circle", href: "routes.HELP" },
  { as: "a", content: "Google", key: "Google", icon: "google", href: "http://www.google.com" }
];
const rightItems = [
  { as: "a", content: "Login", key: "login" },
  { as: "a", content: "Register", key: "register" }
];

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navigation leftItems={leftItems} rightItems={rightItems} />
        </Router>
      </div>
    );
  }
}

export default App;