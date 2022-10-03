import React from 'react';

import styles from './PageWrapper.module.css';

const PageWrapper = ({ children }) => (
  <div className={styles.pageWrapper}>
    {/* header should be defined here */}
    {children}
  </div>
);

export default PageWrapper;
