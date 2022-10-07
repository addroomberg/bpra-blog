import React from 'react';
import { Avatar } from '@mui/material';

import styles from './ProfileInfo.module.css';

const ProfileInfo = ({ user }) => {
  return (
    <div className={styles.profileInfo}>
      <Avatar alt={user.name} src={`${user.name}.jpg`} />
      <div>
        <p><em>Name: </em>{user.name}</p>
        <p><em>Phone: </em>{user.phone}</p>
        <p><em>Email: </em>{user.email}</p>
        <p><em>Website: </em>{user.website}</p>
        <p><em>Address: </em>{user.address?.city} {user.address?.street} {user.address?.zipcode}</p>
      </div>
    </div>
  );
};

export default ProfileInfo;
