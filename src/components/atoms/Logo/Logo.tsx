import React from 'react';
import {ReactComponent as LogoIcon} from '../../../assets/icons/logo.svg';
import styles from './Logo.module.scss';

const Logo = () => {
  return (
    <div className={styles.logo}>
      <LogoIcon/>
    </div>
  );
};

export default Logo;