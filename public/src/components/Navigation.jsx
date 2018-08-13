import _ from "lodash";
import '../../assets/css/NavBar.css';
import OldMain from '../containers/OldMain';
// import * as routes from '../constants/routes';
// import SignIn from './SignIn';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../routes';

import {
  Container,
  Icon,
  Image,
  Menu,
  Sidebar,
  Segment,
  Button,
  Header,
  Dropdown,
  Responsive
} from "semantic-ui-react";

// const leftItems = [
//   { as: "a", content: "Home", key: "home" },
//   { as: "a", content: "Users", key: "users" }
// ];
// const rightItems = [
//   { as: "a", content: "Login", key: "login" },
//   { as: "a", content: "Register", key: "register" }
// ];

import SignOutButton from './authentication/SignOut';


const brandOptions = [ 
  { key: 'DTIG', value: 'DTIG', text: 'DTIG Dashboard', href: 'https://dtig-data-dashboard.firebaseapp.com/' }, 
  { key: 'MAC', value: 'MAC', text: 'MAC Dashboard', href: 'https://mac-modiface-c4d8f.firebaseapp.com/' }, 
  { key: 'Clinique', value: 'Clinique Dashboard', text: 'Clinique' }
]

const NavBarMobile = ({
  children,
  leftItems,
  onPusherClick,
  onToggle,
  rightItems,
  visible
}) => (
  <Sidebar.Pushable as={Segment}>
    <Sidebar
      as={Menu}
      animation="push"
      width="wide"
      icon="labeled"
      vertical
      inverted
      visible={visible}
    >
      <div className="brand-options">
        <Dropdown placeholder='Switch Dashboard' search selection options={brandOptions} />
      </div>
      {_.map(leftItems, item => <Menu.Item {...item} />)}
    </Sidebar>
    <Sidebar.Pusher
      onClick={onPusherClick}
    >
      <Menu fixed="top" >
        <Menu.Item onClick={onToggle}>
          <Icon name="sidebar" />
        </Menu.Item>
        <Menu.Item>
          <Image size="mini" src="assets/img/logo-test2.png" />
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>Login</Menu.Item>
          <Menu.Item>Register</Menu.Item>
        </Menu.Menu>
      </Menu>
      {children}
    <Segment basic>
      <OldMain />
    </Segment>
    </Sidebar.Pusher>
  </Sidebar.Pushable>
);

const NavBarDesktop = ({ leftItems, rightItems }) => (
  <Menu fixed="top" >
    <Menu.Item>
      <Image size="mini" src="assets/img/logo-test2.png" />
    </Menu.Item>
    {_.map(leftItems, item => <Menu.Item {...item} />)}
    <Menu.Menu position="right">
      {_.map(rightItems, item => <Menu.Item {...item} />)}
    </Menu.Menu>
  </Menu>
);

const NavBarChildren = ({ children }) => (
    <Container style={{ marginTop: "52px" }}>{children}</Container>
);

class Navigation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: true
    };   
    this.handlePusher = this.handlePusher.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handlePusher() {
    const { visible } = this.state;
    if (visible) this.setState({ visible: false });
  };

  handleToggle() {
    this.setState({ visible: !this.state.visible })
  };

  render() {
    const { children, leftItems, rightItems } = this.props;
    const { visible } = this.state;
    // console.log(this.props)

    return (
      <div>
        <Responsive>
          <NavBarMobile
            leftItems={leftItems}
            onPusherClick={this.handlePusher}
            onToggle={this.handleToggle}
            rightItems={rightItems}
            visible={visible}
          >
            <NavBarChildren>{children}</NavBarChildren>
          </NavBarMobile>
        </Responsive>
      </div>
    );
  }
}

export default Navigation;


// <div>
//   <Responsive {...Responsive.onlyMobile}>
//     <NavBarMobile
//       leftItems={leftItems}
//       onPusherClick={this.handlePusher}
//       onToggle={this.handleToggle}
//       rightItems={rightItems}
//       visible={visible}
//     >
//       <NavBarChildren>{children}</NavBarChildren>
//     </NavBarMobile>
//   </Responsive>
//   <Responsive minWidth={Responsive.onlyTablet.minWidth}>
//     <NavBarDesktop leftItems={leftItems} rightItems={rightItems} />
//     <NavBarChildren>{children}</NavBarChildren>
//   </Responsive>
// </div>