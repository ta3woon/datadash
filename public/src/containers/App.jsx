import React, { Component } from 'react';
import Routes from '../routes.jsx';
// import logo from './logo.svg';
import '../../assets/css/App.css';
import NavBar from '../components/NavBar';
// import OldMain from './OldMain';

const leftItems = [
  { as: "a", content: "Home", key: "home" },
  { as: "a", content: "Dashboards", key: "Dashboards" },
  { as: "a", content: "Help", key: "Help" }
];
const rightItems = [
  { as: "a", content: "Login", key: "login" },
  { as: "a", content: "Register", key: "register" }
];

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar leftItems={leftItems} rightItems={rightItems} />
      </div>
    );
  }
}

export default App;