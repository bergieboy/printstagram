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
import EditProfileContainer from './user_profile/edit_profile_container';
import PhotoUploadContainer from './photos/photo_upload_container';
import PhotoFeedContainer from './photos/photo_feed_container';
const App = () => (

  <div>
    <header>
      <ProtectedRoute path="/" component={NavBarTempContainer} />
    </header>
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route exact path="/" component={PhotoFeedContainer} />
      <Route exact path="/new" component={PhotoUploadContainer} />
      <Route exact path="/:username" component={UserProfileContainer} />
      <Route exact path="/:username/edit" component={EditProfileContainer} />
    </Switch>
  </div>
);

export default App;
