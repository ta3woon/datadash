import _ from "lodash";
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignIn extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };   
  }

  render() {
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
}



export default SignIn;

