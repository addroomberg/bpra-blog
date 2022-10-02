import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import SignIn from '../containers/SignIn/SignIn';
import SignUp from '../containers/SignUp/SignUp';
import Profile from '../containers/Profile/Profile';
import Friends from '../containers/Friends/Friends';

const Routes = ({ isAuth }) => (
  <Switch>
    {
      isAuth
      ? <>
          <Route path="/profile/:id" exact key='friend' component={Profile} />
          <Route path="/profile" exact key='me' component={Profile} />
          <Route path="/friends" component={Friends} />
          <Redirect to='/profile' />
        </>
      : <>
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp}  />
          <Redirect to='/signin' />
        </>
    }
  </Switch>
);

const mapStateToProps = state => ({
  isAuth: state.auth.token,
});

export default connect(mapStateToProps)(Routes);
