import React from 'react';
// import { Route, IndexRoute} from 'react-router';
import { Route, Switch } from 'react-router-dom';

// ROUTES

import OldMain from './containers/OldMain';
import LoginForm from './components/NavBar';

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