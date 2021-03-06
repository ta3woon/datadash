import _ from "lodash";
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SignIn from '../components/authentication/SignIn';

// import SignIn from '../components/SignIn'
import '../../assets/css/main/main.css';
import '../../assets/js/main.js';
import {
  Container,
  Responsive
} from "semantic-ui-react";

const HeaderRow = () => {
  return (
    <div className="">
      <div id="user-container">
        <div className="account-info">
          <div id="userpic" className="tooltip top-bar-avatar">
            <span className="tooltiptext-right">Select avatar for user profile section for user info,<br />additional dashboard control commands and logging out.</span>
          </div>
          <div id="username" className="top-var-username" />
        </div>
        <button id="sign-out-button" className="">Sign out</button> 
      </div>
    </div>
  );
}

const NavigationBar = () => {
  return (
    <div className="tab mdl-layout__header-row xtheme-c2">
      <div className="mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
        <div className="ilb">
          <div xhidden id="menu-my-groups" className="tooltip overflow mdl-tabs__tab mdl-button mdl-js-button mdl-js-ripple-effect xtheme-c2 is-active">
            <i className="material-icons">dashboard</i>Dashboards
            <span className="tooltiptext-bottom">&nbsp;<br />Display dashboard panels<br />&nbsp;</span>
          </div>
          <div hidden id="menu-my-top-groups" className="mdl-tabs__tab mdl-button mdl-js-button mdl-js-ripple-effect xtheme-c2">
            <i className="material-icons">trending_up</i>My Top Groups
          </div>
          <div hidden id="menu-recent" className="mdl-tabs__tab mdl-button mdl-js-button mdl-js-ripple-effect xtheme-c2">
            <i className="material-icons">schedule</i>Recent Groups
          </div>
          <div hidden id="menu-show-unregistered" className="mdl-tabs__tab mdl-button mdl-js-button mdl-js-ripple-effect xtheme-c2">
            <i className="material-icons">screen_lock_portrait</i>Unregistered
          </div>
          <div xhidden id="menu-show-help" className="tooltip overflow mdl-tabs__tab mdl-button mdl-js-button mdl-js-ripple-effect xtheme-c2">
            <i className="material-icons">help</i>Help
            <span className="tooltiptext-bottom">&nbsp;<br />Display help panel<br />&nbsp;</span>
          </div>
          <button hidden id="new-group-button" className="mdl-button mdl-js-button mdl-button--fab mdl-shadow--4dp mdl-js-ripple-effect xtheme-c6">
            <i className="material-icons">add</i>
          </button>
        </div>
      </div>
    </div>
  );
}

const LoginDiv = (props) => {
  return (
    <div id="sign-in-wrapper-container" className="mdl-card overflow">

      <div id="sign-in-buttons-container" className="xtooltip">
        <div className="tooltip overflow">
          <span className="tooltiptext-bottom">Select button to start signing in ...</span>
          <button id="sign-in-email-button" className="mdl-button--raised mdl-button mdl-js-button mdl-js-ripple-effect"><i className="material-icons">account_circle</i> Sign in with Email</button>
          <button hidden id="sign-in-google-button" className="mdl-button--raised mdl-button mdl-js-button mdl-js-ripple-effect"><i className="material-icons">account_circle</i> Sign in with Google</button>
        </div>
      </div>

      <div hidden id="sign-in-email-container" className="mdl-card mdl-shadow--8dp mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-cell--12-col-desktop tooltip overflow">
        <div className="xmdl-card__supporting-text">
          <span className="tooltiptext-bottom">Provide email and password to sign in ...</span>
          <input hidden name="email" />
          <input className="mdl-textfield__input" style={{display: 'inline', width: 370}} type="email" id="email-sign-in-email-textfield" name="email" placeholder=" Email" />
          <input className="mdl-textfield__input" style={{display: 'inline', width: 'auto'}} type="password" id="email-sign-in-password-textfield" name="password" placeholder=" Password" />

          <div id="sign-in-buttons">
            <button id="email-sign-in-submit-button" className="mdl-button mdl-js-button mdl-button--raised" name="signin">Sign In</button>
            <button id="email-sign-in-cancel-button" className="mdl-button mdl-js-button mdl-button--raised" name="cancel-email">CANCEL</button>
            <button id="email-send-password-reset-button" className="mdl-button mdl-js-button mdl-button--raised" name="verify-email">Send Password Reset Email</button>
          </div>
        </div>
      </div> 

    </div>
  );
}

// const ContentArea = () => {          
// <main className="mdl-layout__content">

          
//   <section className="mdl-grid content" id="add-group-container" style={{display: 'none'}}>

//     <div className="mdl-cell mdl-cell--12-col mdl-grid">
//       {/* Card containing the inputs to add a new messages */}
//       <div className="mdl-card mdl-shadow--8dp mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--12-col-desktop xtheme-c5">

//         <div className="mdl-card__title xtheme-c4">
//           <h2 className="mdl-card__title-text">New Dashboard</h2>
//         </div>

//         <div className="mdl-card__supporting-text">

//           <form id="new-group-form" action="#">
//             <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
//               <input className="new-group-title mdl-textfield__input" type="text" id="new-group-title" />
//               <label className="mdl-textfield__label" htmlFor="new-group-title">Title for dashboard</label>
//             </div>
//             <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
//               <input className="new-group-group mdl-textfield__input" type="text" id="new-group-group" />
//               <label className="mdl-textfield__label" htmlFor="new-group-group">Identifier for dashboard (ie: the 'group' identifier can be the door value)</label>
//             </div>
//             <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
//               <textarea className="new-group-message mdl-textfield__input" rows={3} id="new-group-message" defaultValue={""} />
//               <label className="mdl-textfield__label" htmlFor="new-group-message">Message for dashboard</label>
//             </div>
//             <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
//               <input className="new-group-group mdl-textfield__input" type="text" id="new-group-tags" />
//               <label className="mdl-textfield__label" htmlFor="new-group-tags">Tags for dashboard (single-words, separated by a single space)</label>
//             </div>
//             <button id="add-group-button" type="submit" className="add-group-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect xtheme-c6">
//               Add Dashboard
//             </button>
//             <button id="new-group-dismiss-button" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect xtheme-c6">
//               Dismiss
//             </button>
//           </form>
//         </div>

//       </div>
//     </div>
//   </section>

//   {/* Show the list of user's groups */}
//   <section className="mdl-grid content mdl-tabs__panel" id="user-groups-list" style={{display: 'none'}}>
//     <div className="content-item-container mdl-cell mdl-cell--12-col mdl-grid" />
//   </section>

//   {/* Show a list of recent groups */}
//   <section className="mdl-grid content mdl-tabs__panel" id="recent-groups-list" style={{display: 'none'}}>
//     <div className="content-item-container mdl-cell mdl-cell--12-col mdl-grid" />
//   </section>

//   {/* Show the list of top user's groups */}
//   <section className="mdl-grid content mdl-tabs__panel" id="top-user-groups-list" style={{display: 'none'}}>
//     <div className="content-item-container mdl-cell mdl-cell--12-col mdl-grid" />
//   </section>

//   {/* Show user profile section */}
//   <section className="mdl-grid content mdl-tabs__panel" id="user-profile-section" style={{display: 'none'}}>
//     <div className="content-item-container mdl-cell mdl-cell--12-col mdl-grid" />
//   </section>

//   {/* Show unregistered devices section */}
//   <section className="mdl-grid content mdl-tabs__panel" id="unregistered-devices-section" style={{display: 'none'}}>
//     <div className="content-item-container mdl-cell mdl-cell--12-col mdl-grid" />
//   </section>

//   {/* Show help */}
//   <section className="mdl-grid content mdl-tabs__panel" id="help-section" style={{display: 'none'}}>
//     <div className="content-item-container mdl-cell mdl-cell--12-col mdl-grid" />
//   </section>
//</main>
// }

            // <img id="splash-logo" src="../../assets/img/dbi2w.png" />

          // <header className="header mdl-layout__header xtheme-c1">
          //   <HeaderRow />
          //   <NavigationBar />
          // </header>
class OldMain extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    // console.log(this.props)

    return (
      <div>
        <div className="">

          { /* SPLASH SCREEN */ }



          <section id="page-splash">

            <SignIn />
            <div id="version-container" className="version-container">Version: 0.9.9</div>
          </section>

          {/* Main Application Area */}


        </div>



      </div>
    );
  }
}

export default OldMain;