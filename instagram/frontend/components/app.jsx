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
import PhotoShowContainer from './photos/photo_show_container';
import Modal from './modal';

const App = () => (

  <div>
    <Modal />
    <header>
      <ProtectedRoute path="/" component={NavBarTempContainer} />
    </header>
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path="/" component={PhotoFeedContainer} />
      <ProtectedRoute exact path="/new" component={PhotoUploadContainer} />
      <ProtectedRoute exact path="/:userId" component={UserProfileContainer} />
      <ProtectedRoute exact path="/photos/:photoId" component={PhotoShowContainer}/>
      <ProtectedRoute exact path="/:userId/edit" component={EditProfileContainer} />
    </Switch>
  </div>
);

export default App;
