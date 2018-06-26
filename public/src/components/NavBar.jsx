import _ from "lodash";
import '../../assets/css/NavBar.css';
import OldMain from '../containers/OldMain';
// import SignIn from './SignIn';


import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Icon,
  Image,
  Menu,
  Sidebar,
  Segment,
  Button,
  Header,
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
      width="thin"
      icon="labeled"
      items={leftItems}
      vertical
      visible={visible}
    />
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

class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false
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

export default NavBar;


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
