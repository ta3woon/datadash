import React, { Component } from 'react';
// import logo from './logo.svg';
import '../../assets/css/App.css';
import NavBar from '../components/NavBar';
import OldMain from './OldMain';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar>
          <Image src="https://react.semantic-ui.com/assets/images/wireframe/paragraph.png" />
        </NavBar>
        <header className="App-header">
          <h1 className="App-title">DTIG AppJsx Dashboard</h1>
        </header>
        <OldMain />
      </div>
    );
  }
}

export default App;