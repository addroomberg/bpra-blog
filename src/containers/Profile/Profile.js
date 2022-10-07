import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as actions from '../../store/actions/index'; 
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo';

import styles from './Profile.module.css';

class Profile extends Component {
  constructor() {
    super();
    this.state = { expanded: '' };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getUser(id);
  }

  handleAccordionChange = (panel) => (event, newExpanded) => {
    this.setState({ expanded: newExpanded ? panel : false });
  };

  render() {
    return (
     <PageWrapper>
        <main className={styles.profile}>
          <ProfileInfo user={this.props.user} />
        </main>
      </PageWrapper>
    );
  }
};

const mapStateToProps = state => ({
  user: state.profile.user,
});

const mapDispatchToProps = dispatch => ({
  getUser: (id) => dispatch(actions.getUser({ id })),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));
