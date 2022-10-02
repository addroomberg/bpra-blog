import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { Button, TextField } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index'; 
import { DEFAULT_SIGN_IN_STATE } from '../../utils/constants';

import styles from './SignIn.module.css';


class SignIn extends Component {
  constructor() {
    super();
    this.state = { ...DEFAULT_SIGN_IN_STATE };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    this.props.onSignIn({ username, password, history: this.props.history });
  }

  handleValueChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  }

  render() {
    return (
      <form className={styles.signIn} onSubmit={this.handleSubmit}>
        <TextField id="username" label="Username" variant="outlined" value={this.state.username}
          onChange={this.handleValueChange} fullWidth />
        <TextField id="password" label="Password" type='password' value={this.state.password}
          onChange={this.handleValueChange} variant="outlined" fullWidth />
        <Button type="submit" variant="contained" className={styles.signInButton}>Sign In</Button>
        <hr/>
        <NavLink to='signup'>
          <Button variant="contained" className={styles.signUpButton}>Sign Up</Button>
        </NavLink>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSignIn: (payload) => dispatch(actions.signIn(payload)),
});

export default withRouter(connect(null, mapDispatchToProps)(SignIn));
