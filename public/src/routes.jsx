import React from 'react';
// import { Route, IndexRoute} from 'react-router';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// ROUTES

import OldMain from './containers/OldMain';
import LoginForm from './components/Navigation';

class Routes extends React.Component {
  render() {
  	return (
	  <Switch>
	    <Route exact path="/" component={Intro} />
	    <Route path="/oldMain" component={OldMain} />
	    <Route path="/login" component={LoginForm} />
	  </Switch>
	)
  }

};

export default Routes;

// export const SIGN_UP = '/signup';
// export const SIGN_IN = '/signin';
// export const LANDING = '/';
// export const HOME = '/home';
// export const ACCOUNT = '/account';
// export const PASSWORD_FORGET = '/pw-forget';


// https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial/