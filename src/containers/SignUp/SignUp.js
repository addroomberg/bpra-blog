import React, { Component } from 'react';
import { Button, TextField } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index'; 
import { DEFAULT_SIGN_UP_STATE } from '../../utils/constants';

import styles from './SignUp.module.css';


class SignUp extends Component {
  constructor() {
    super();
    this.state = { ...DEFAULT_SIGN_UP_STATE }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSignUp( { history: this.props.history, ...this.state });
  }

  handleValueChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  }

  render() {
    return (
      <form className={styles.signUp} onSubmit={this.handleSubmit}>
        <TextField id="name" value={this.state.name} label="Name" variant="outlined"
          onChange={this.handleValueChange} fullWidth />
        <TextField id="username" value={this.state.username} label="Username"
          onChange={this.handleValueChange} variant="outlined" fullWidth />
        <TextField id="email" value={this.state.email} type="email" label="Email"
          variant="outlined" onChange={this.handleValueChange} fullWidth />
        <div className={styles.locationGroup}>
          <TextField id="street" value={this.state.street} label="Street"
            variant="outlined" onChange={this.handleValueChange} />
          <TextField id="city" value={this.state.city} label="City"
            variant="outlined" onChange={this.handleValueChange} />
          <TextField id="zipcode" value={this.state.zipcode} type="number"
            label="Zip Code" variant="outlined" onChange={this.handleValueChange} />
        </div>
        <TextField id="phone" value={this.state.phone} label="Phone" variant="outlined"
          onChange={this.handleValueChange} fullWidth />
        <TextField id="password" value={this.state.password} label="Password" type='password'
          variant="outlined" onChange={this.handleValueChange} fullWidth />
        <TextField id="company" value={this.state.company} label="Company"
          variant="outlined" onChange={this.handleValueChange} fullWidth />
        <Button type="submit" variant="contained" className={styles.signUpButton}>Sign Up</Button>
        <hr/>
        <NavLink to='signin'>
          <Button variant="contained" className={styles.signInButton}>Sign In</Button>
        </NavLink>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSignUp: (payload) => dispatch(actions.signUp(payload)),
});

export default withRouter(connect(null, mapDispatchToProps)(SignUp));
