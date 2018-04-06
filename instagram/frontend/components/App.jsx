import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from './../util/route_util';

import NavBarTempContainer from './navbar/navbar_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import UserProfileContainer from './user_profile/user_profile_container';

const App = () => (

  <div>
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </Switch>
    <header>
      <ProtectedRoute path="/" component={NavBarTempContainer} />
    </header>
    <Route path="/profile" component={UserProfileContainer} />
  </div>
);

export default App;
